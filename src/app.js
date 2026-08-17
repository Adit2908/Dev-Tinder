require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const PORT = process.env.PORT || 7777;

app.use(express.json());

app.use(
  cors({
    origin: "https://dev-tinder-62k3.onrender.com",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(PORT, () => {
      console.log("server is successfully lisetening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected", err);
  });

