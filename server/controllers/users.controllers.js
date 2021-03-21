import UsersModel from "../models/users.model.js"
import ProjectsModel from "../models/projects.model.js"

async function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    const users = await UsersModel.find();
    res.render("users/index", {
        title: "Users Page",
        loginStatus: loginStatus,
        users: users,
        user: req.user,
    });
}

async function showUser(req, res) {
    let loginStatus = "Login"
    let stylesheet = "/stylesheets/hidden.css";
    const projects = await ProjectsModel.find({
        "details.authorId" : req.params.id
    });
    
    const user = await UsersModel.findById(req.params.id);
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
        const userbyUsername = await UsersModel.findOne({ "details.username" : req.body.username })
        if (userbyUsername !== null && userbyUsername._id !== req.user.id) {
            res.render("users/edit", {
                title: "Edit Profile",
                loginStatus: "Logout",
                user: req.user,
                username: req.body.username,
                message: "Username taken"
            })
        } else {
            const user = await UsersModel.findByIdAndUpdate(req.user.id,{
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

export default {
    show,
    showUser,
    showEdit,
    submitEdit,
  };