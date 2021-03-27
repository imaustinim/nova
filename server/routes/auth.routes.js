import express from "express"
const router = express.Router();
import passport from "passport"
import AuthCtrl from "../controllers/auth.controllers.js"

// @desc    Authenticate with Google
router.get("/google", passport.authenticate("google", { scope : ["profile"] }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/"}), AuthCtrl.redirect);

// @desc    Authenticate with Facebook
router.get("/facebook", passport.authenticate("facebook"));
router.get("/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/"}), AuthCtrl.redirect);

// @desc    Authenticate with Twitter
router.get("/twitter", passport.authenticate("twitter"));
router.get("/twitter/callback", passport.authenticate("twitter", { failureRedirect: "/"}), AuthCtrl.redirect);

// @desc    Authenticate with Twitch
router.get("/twitch", passport.authenticate("twitch"));
router.get("/twitch/callback", passport.authenticate("twitch", { failureRedirect: "/"}), AuthCtrl.redirect);

// // @desc    Login Page
// router.get("/login", AuthCtrl.login);

// // @desc    Logout User
// router.get("/logout", AuthCtrl.logout);

// // @desc    Checks if logged in
// router.get("/user", AuthCtrl.userProfile);

export default router;
