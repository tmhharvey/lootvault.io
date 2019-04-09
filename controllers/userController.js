const express = require("express");
const router = express.Router();
const User = require("../models/user");

// PUT Example
router.put("/newUserEmail", async (req, res) => {
  console.log("ROUTE WAS FIRED");
  const userDbEntry = {};
  userDbEntry.userId =
    req.body.email + (Math.floor(Math.random() * 1000000) + 1);
  userDbEntry.email = req.body.email;

  try {
    const user = await User.create(userDbEntry);

    res.json({
      status: 200,
      data: {
        userId: user.newUserId,
        email: user.userEmail
      }
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// GET Example
router.get("/:userid/exampleURL", async (req, res) => {
  try {
    //Logic
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
