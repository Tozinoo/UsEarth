const express = require("express");
const AuthBoard = require("../models/AuthBoard");
const User = require("../models/User");

const { auth } = require("../middleware/auth");
const router = express.Router();

router.use(auth);
router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

router.get("/:id", async (req, res) => {
    try {
        const userNick = req.params.id;
        const mypage = await User.findOne({ nickname: userNick });
        const userPosts = await AuthBoard.find({
            postedBy: mypage._id,
        }).populate("postedBy");

        let waits = 0;
        let completes = 0;
        let wrongs = 0;
        for (let i = 0; i < userPosts.length; i++) {
            if (
                userPosts[i].compliteAuth === false &&
                userPosts[i].wrongAuth === false
            ) {
                waits += 1;
            } else if (userPosts[i].compliteAuth === true) {
                completes += 1;
            } else {
                wrongs += 1;
            }
        }

        const postsState = { waits, completes, wrongs };
        const userImage = await User.findOne({ nickname: userNick });
        const profileImage = userImage.profileImage;

        return res.status(200).json({ userPosts, postsState, profileImage });
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
