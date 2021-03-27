import passport from "passport";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as TwitterStrategy } from "passport-twitter";
import { OAuth2Strategy as TwitchStrategy } from "passport-twitch";

function google(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    (accessToken, refreshToken, profile, callback) => {
        // console.log(profile);
        callback(null, profile);

    //     let unique = false;
    //     let tempUsername = "";
    //     while (!unique) {
    //         tempUsername = Math.random().toString(36).substring(7);
    //         if (UsersModel.findOne( {"details.username" : tempUsername }) == null) unique = true; 
    //     }
    //     const newUser = {
    //         details: {
    //             loginId: profile.id,
    //             firstName: profile.name.givenName,
    //             lastName: profile.name.familyName,
    //             displayName: profile.displayName,
    //             username: profile.name.givenName + profile.name.familyName + tempUsername,
    //         }
    //     }
        
    //     try {
    //         let user = UsersModel.findOne({ "details.loginId" : profile.id })
    //         if(user) {
    //             callback(null, user)
    //         } else {
    //             user = UsersModel.create(newUser)
    //             callback(null, user)
    //         }
    //     } catch(err) {
    //         console.log(err)
    //     }
    }));
    
    passport.serializeUser((user, callback) => {
        console.log("ser", user)
        callback(null, user)
    })

    passport.deserializeUser((user, callback) => {
        console.log("deser", user)
        callback(null, user)
    })
    // passport.deserializeUser((id, callback) => {
    //     UserModel.findById(id, (err, user) => {
    //         return callback(err, user)
    //     })
    // })
}

function facebook(passport) {
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK
    },
//     async (accessToken, refreshToken, profile, callback) => {
//         const newUser = {
//             loginId: profile.id,
//             displayName: profile.displayName,
//             firstName: profile.name.givenName || profile.displayName.split(" ")[0],
//             lastName: profile.name.familyName || profile.displayName.split(" ")[profile.displayName.split(" ").length-1],
//         }
//         if (err) return callback(err);
        
//         let user = await UserModel.findOne({ "details.loginId" : profile.id })
//         console.log(user)
//         if(user) {
//             callback(null, user)
//         } else {
//             user = await UserModel.create(newUser)
//             callback(null, user)
//         }
//     }));
    
//     passport.serializeUser((user, callback) => {
//         callback(null, user.id)
//     })
    
//     passport.deserializeUser((id, callback) => {
//         UserModel.findById(id, (err, user) => {
//             callback(err, user)
//         })
//     })
// }

    async (accessToken, refreshToken, profile, callback) => {
        await UserModel.findOne({ "details.loginId" : profile.id }, (err, user) => {
            console.log(user)

            if (err) return callback(err);
            if (user) {
                return callback(null, user);
            } else {
                let unique = false;
                let tempUsername = "";
                while (!unique) {
                    tempUsername = Math.random().toString(36).substring(7);
                    const check = UserModel.findOne({ username: tempUsername })
                    if (check) unique = true;
                    }
                const newUser = new UserModel ({
                    details: {
                        loginId: profile.id,
                        firstName: profile.name.givenName || profile.displayName.split(" ")[0],
                        lastName: profile.name.familyName || profile.displayName.split(" ")[profile.displayName.split(" ").length-1],
                        displayName: profile.displayName,
                        username: tempUsername
                    },
                    socialMedia: {
                        twitter: "",
                        instagram: "",
                        facebook: "",
                        youtube: "",
                        twitch: "",
                        linkedin: "",
                        github: "",
                        personal: ""
                    }
                });
                
                newUser.save((err) => {
                    if (err) return callback;
                    return callback(null, newUser)
                })
            }
        })
    }));
    
    passport.serializeUser((user, callback) => {
        callback(null, user.id)
    })
    
    passport.deserializeUser((id, callback) => {
        UserModel.findById(id, (err, user) => {
            callback(err, user)
        })
    })
}

function twitch(passport) {
    passport.use(new TwitchStrategy({
        clientID: process.env.TWITCH_CLIENT_ID,
        clientSecret: process.env.TWITCH_SECRET,
        callbackURL: process.env.TWITCH_CALLBACK,
        scope: "user_read"
    },
    async (accessToken, refreshToken, profile, callback) => {
        const newUser = {
            loginId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName || profile.displayName.split(" ")[0],
            lastName: profile.name.familyName || profile.displayName.split(" ")[profile.displayName.split(" ").length-1],
        }

        try {
            let user = await UserModel.findOne({ "details.loginId" : profile.id })
            if(user) {
                callback(null, user)
            } else {
                user = await UserModel.create(newUser)
                callback(null, user)
            }
        } catch(err) {
            callback(null, user)

            console.log(err)
        }
    }));
    
    passport.serializeUser((user, callback) => {
        callback(null, user.id)
    })
    
    passport.deserializeUser((id, callback) => {
        UserModel.findById(id, (err, user) => {
            callback(err, user)
        })
    })
}

export {
    google,
    facebook,
    twitch
}