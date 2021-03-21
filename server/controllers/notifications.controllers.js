function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    if (req.isAuthenticated()) {
        res.render("notifications/index", {
            title: "Notifications Page",
            loginStatus: loginStatus,
        });        
    } else {
        res.redirect("/auth/login");
    }
}

export default {
    show
  };