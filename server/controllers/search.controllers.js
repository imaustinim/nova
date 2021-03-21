import UsersModel from "../models/users.model.js"
import ProjectsModel from "../models/projects.model.js"

function show(req, res) {
    res.render("search", {
        title: "Search Results",
    });
}

function search(req, res) {
    res.send(req.body);
}

export default  {
    show,
    search
  };