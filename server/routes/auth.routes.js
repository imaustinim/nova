const router = require("express").Router();
const passport = require("passport");
const ctrl = require("../controllers/auth.controllers")

// @desc    Authenticate with Google
router.get("/google", passport.authenticate("google", { scope : ["profile"] }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login"}), ctrl.redirect);

// @desc    Authenticate with Facebook
router.get("/facebook", passport.authenticate("facebook"));
router.get("/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/"}), ctrl.redirect);

// @desc    Authenticate with Twitter
router.get("/twitter", passport.authenticate("twitter"));
router.get("/twitter/callback", passport.authenticate("twitter", { failureRedirect: "/"}), ctrl.redirect);

// @desc    Authenticate with Twitch
router.get("/twitch", passport.authenticate("twitch"));
router.get("/twitch/callback", passport.authenticate("twitch", { failureRedirect: "/"}), ctrl.redirect);

// @desc    Login Page
router.get("/login", ctrl.login);

// @desc    Logout User
router.get("/logout", ctrl.logout);

// @desc    Checks if logged in
router.get("/user", ctrl.userProfile);
module.exports = router;
