const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserModel = require("../models/user.model")
const ProjectsModel = require("../models/projects.model")

async function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    const users = await UserModel.find();
    res.render("users/index", {
        title: "Users Page",
        loginStatus: loginStatus,
        users: users,
        user: req.user,
    });
}

function getUser(req, res) {
    res.status(200).send(req.user)
}
async function showUser(req, res) {
    let loginStatus = "Login"
    let stylesheet = "/stylesheets/hidden.css";
    const projects = await ProjectsModel.find({
        "details.authorId" : req.params.id
    });
    
    const user = await UserModel.findById(req.params.id);
    if (req.isAuthenticated()) {
        loginStatus = "Logout";
        if (user._id.toString() == req.user._id.toString()) {
            stylesheet = "/stylesheets/users/edit.css";
        }
    }

    res.render("users/user", {
        stylesheet: stylesheet,
        loginStatus: loginStatus,
        title: user.details.displayName,
        projects: projects,
        user: user,
    })
}

async function showEdit(req, res) {
    if (req.isAuthenticated()) {
        res.render("users/edit", {
            title: "Edit Profile",
            loginStatus: "Logout",
            user: req.user,
            username: req.user.details.username,
            message: ""
        })
    }
}

async function submitEdit(req, res) {
    if (req.isAuthenticated()) {
        const userbyUsername = await UserModel.findOne({ "details.username" : req.body.username })
        if (userbyUsername !== null && userbyUsername._id !== req.user.id) {
            res.render("users/edit", {
                title: "Edit Profile",
                loginStatus: "Logout",
                user: req.user,
                username: req.body.username,
                message: "Username taken"
            })
        } else {
            const user = await UserModel.findByIdAndUpdate(req.user.id,{
                details: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    username: req.body.username,
                    displayName: req.body.displayName,
                    position: req.body.position,
                    genres: req.body.genres.split(",").map(s => s.trim()),
                    location: req.body.location,
                    birthDate: req.body.birthdDate,
                    bio: req.body.bio,
                },
                socialMedia: {
                    twitter: req.body.twitter,
                    instagram: req.body.instagram,
                    facebook: req.body.facebook,
                    youtube: req.body.youtube,
                    twitch: req.body.twitch,
                    linkedin: req.body.linkedin,
                    github: req.body.github,
                    personal: req.body.personal
                }
            })
            res.redirect(`/users/${user._id}`);
        }
    } else {
        res.redirect("/auth/login");
    }
}

module.exports = {
    show,
    getUser,
    showUser,
    showEdit,
    submitEdit,
    create,
    login,
    checkToken
  };

  function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }
  
  async function create(req, res) {
    try {
      // Add the user to the database
      const user = await User.create(req.body);
      // token will be a string
      const token = createJWT(user);
      // Yes, we can use res.json to send back just a string
      // The client code take this into consideration
      res.json(token);
    } catch (err) {
      // Client will check for non-2xx status code 
      // 400 = Bad Request
      res.status(400).json(err);
    }
  }
  
  async function login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) throw new Error();
      const match = await bcrypt.compare(req.body.password, user.password);
      if (match) {
        const token = createJWT(user);
        res.json(token);
      } else {
        throw new Error();
      }
    } catch (e) {
      res.status(400).json('Bad Credentials');
    }
  }
  
  /*-- Helper Functions --*/
  
  function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }