const router = require("express").Router();
const passport = require("passport");
const checkAuth = require("../util/checkAuth");

router.get("/login", passport.authenticate("github"));
router.get("/auth/github", passport.authenticate("github", { failureRedirect: "/" }), function(req, res){
    res.redirect("/");
});

router.get("/", checkAuth, (req, res) => {
    res.status(200).json({
        error: false,
        displayName: req.user.displayName,
        username: req.user.username,
        id: req.user._json.id,
        website: req.user._json.blog,
        link: req.user.profileUrl,
        avatar: req.user.photos[0].value,
        bio: req.user._json.bio,
        followers: req.user._json.followers,
        following: req.user._json.following,
        created: req.user._json.created_at,
        extra: {
            raw: req.user._raw
        }
    });
});

module.exports = router;