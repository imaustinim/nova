const userModel = require("../models/user.model")

function show(req, res) {
    res.render("search", {
        title: "Search Results",
    });
}

function search(req, res) {
    res.send(req.body);
}

module.exports = {
    show,
    search
  };