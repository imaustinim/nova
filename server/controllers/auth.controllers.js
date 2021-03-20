const passport = require("passport");

function redirect(req, res) {
    if (req.user.username == null) {
        res.redirect(`/users/${req.user._id}/edit`);
    } else {
        res.redirect("/");
    }
}

function login(req, res) {
    res.render("auth/login", {
        title: "Login Page",
        loginStatus: "Login",
    });
}

function logout(req, res) {
    req.logout();
    res.redirect("/")
}

function ensureAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/auth/login");
    }
}

async function userProfile(req, res) {
    if (req.isAuthenticated()) {
        res.redirect(`/users/${req.user._id}`);
    } else {
        res.redirect("/auth/login")
    }
}

module.exports = {
    redirect,
    login,
    logout,
    ensureAuth,
    userProfile
  };