import ProjectsModel from "../models/projects.model.js"
// const ProjectsModel = require("../models/projects.model");

async function show(req, res) {
    let loginStatus = "Login";
    if (req.isAuthenticated()) loginStatus = "Logout";
    const projects = await ProjectsModel.find();
    res.render("projects/index", {
        title: "Projects Page",
        loginStatus: loginStatus,
        projects: projects,
        user : req.user,
    });
}

export {
    show
  };