import ProjectsModel from "../models/projects.model.js"

// async function show(req, res) {
//     let loginStatus = "Login";
//     if (req.isAuthenticated()) loginStatus = "Logout";
//     const projects = await ProjectsModel.find();
//     res.render("projects/index", {
//         title: "Projects Page",
//         loginStatus: loginStatus,
//         projects: projects,
//         user : req.user,
//     });
// }

async function show(req, res) {
    try {
        const projects = await ProjectsModel.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default {
    show
  };