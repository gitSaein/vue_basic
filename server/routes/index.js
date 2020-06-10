var express = require("express");
var router = express.Router();

router.get("/getMsg", function (req, res) {
    if (Math.random() < 0.5) {
        res.send("World~!")
    } else {
        res.send("Hello~!")
    }
});

module.exports = router