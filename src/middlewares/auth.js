// const jwt = require("jsonwebtoken");
// const User = require("../models/user");

// const userAuth = async (req, res, next) => {
//   try {
//     const {token} = req.cookies;
//     if (!token) {
//       return res.status(401).send("Please Login!");
//     }

//     const decodedObj = await jwt.verify(token, "DEV@Tinder$678");

//     const { _id } = decodedObj;

//     const user = await User.findById(_id);

//     if (!user) {
//       throw new Error("user not foundz");
//     }

//     req.user = user;
//     next();
//   } catch (err) {
//     res.status(400).send("ERROR: " + err.message);
//   }
//   //Read the token from the req.cookies

//   //Find the username
// };

// module.exports = { userAuth };

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    if (!token) {
      return res.status(401).send("Please Login!");
    }

    const decodedObj = await jwt.verify(token, process.env.JWT_SECRET);

    const { _id } = decodedObj;

    const user = await User.findById(_id);

    if (!user) {
      throw new Error("user not found");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};

module.exports = { userAuth };
