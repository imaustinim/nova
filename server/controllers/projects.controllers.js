const ProjectsModel = require("../models/projects.model")

async function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    const projects = await ProjectsModel.find();
    res.render("projects/index", {
        title: "Projects Page",
        loginStatus: loginStatus,
        projects: projects,
        user: req.user,
    });
}

function showCreateForm(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    if (req.isAuthenticated()) {
        res.render("projects/create", {
            title: "New Project",
            loginStatus: loginStatus,
        });
    } else {
        res.redirect("/auth/login");
    }
}

async function submitCreateForm(req, res) {
    if (!req.isAuthenticated()) res.redirect("/auth/login");
    const project = await ProjectsModel.create({
        details: {
            projectName: req.body.projectName,
            projectType: req.body.projectType,
            authorName: req.body.authorName,
            authorId: req.user.id,
            description: req.body.description,
            visibility: req.body.status,
            releaseDate: req.body.releaseDate,
            genres: req.body.genres.replace("/,\s/g", ',').split(","),
            media: req.image,
            videoUrl: req.body.videoUrl
        },
        contract: {
            capitalRequired: req.body.capitalRequired,
            capitalRaised: 0,
            returnrate: req.body.returnRate,
        },
        // socialMedia: {

        // }        
    })
    res.redirect(`/projects/${project._id}`);
            // title: "New Project",
            // loginStatus: loginStatus,
}

async function showProject(req, res) {
    let loginStatus = "Login"
    let stylesheet = "/stylesheets/hidden.css";

    const project = await ProjectsModel.findById(req.params.id);
    if (req.isAuthenticated()) {
        loginStatus = "Logout";
        if (project.details.authorId.toString() == req.user._id.toString()) {
            stylesheet = "/stylesheets/projects/edit.css";
        }
    }

    res.render("projects/project", {
        stylesheet: stylesheet,
        title: project.projectName,
        loginStatus: loginStatus,
        project: project,
        investStatus: (Date.parse(project.details.releaseDate) < Date.now()) ? "disabled" : "",
    })
            // title: "New Project",
            // loginStatus: loginStatus,
}

module.exports = {
    show,
    showCreateForm,
    submitCreateForm,
    showProject,
  };