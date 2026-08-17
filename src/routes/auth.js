const express = require("express");
const authRouter = express.Router();
const { ValidateSignUpData } = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");

authRouter.post("/signup", async (req, res) => {
  try {
    //Validation of data
    ValidateSignUpData(req);

    const {
      firstName,
      lastName,
      emailId,
      password,
      age,
      gender,
      photoUrl,
      about,
    } = req.body;
    //Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    //Creating a new instance of the User model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
      age,
      gender,
      photoUrl,
      about,
    });

    const savedUser = await user.save();
    const token = await savedUser.getJWT();

    //Add the token to cookie and send the response to the user
    // res.cookie("token", token, {
    //   expires: new Date(Date.now() + 8 * 3600000),
    // });

    res.cookie("token", token, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.json({ message: "User Added Successfully", data: savedUser });
  } catch (err) {
    res.status(400).send("Error : " + err.message);
  }
});

// authRouter.post("/login", async (req, res) => {
//   try {
//     const { emailId, password } = req.body;

//     const user = await User.findOne({ emailId: emailId });
//     if (!user) {
//       throw new Error("Invalid Credential");
//     }

//     const isPasswordValid = await user.validatePassword(password);
//     if (isPasswordValid) {
//       //Create a JWT token

//       const token = await user.getJWT();

//       //Add the token to cookie and send the response to the user
//       res.cookie("token", token, {
//         expires: new Date(Date.now() + 8 * 3600000),
//       });
//       res.send(user);
//     } else {
//       throw new Error("Invalid Credential");
//     }
//   } catch (error) {
//     res.status(400).send("Error : " + error.message);
//   }
// });

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId });

    if (!user) {
      throw new Error("Invalid Credential");
    }

    const isPasswordValid = await user.validatePassword(password);

    if (!isPasswordValid) {
      throw new Error("Invalid Credential");
    }

    const token = await user.getJWT();

    res.cookie("token", token, {
      maxAge: 8 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    res.send(user);
  } catch (error) {
    res.status(400).send("Error : " + error.message);
  }
});

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.send("logout succesfull");
});
module.exports = authRouter;
