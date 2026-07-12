const express = require("express");

const app = express();

//middleware-middleware is a function that executes during the request-response lifecycle of your application


app.use("/hello",(req, res) => {
  res.send("Namaste Jhulelaluuu");
});

app.use("/test",(req, res) => {
  res.send("my server created successfully");
});

app.use("/",(req, res) => {
  res.send("hello from the dashboard");
});




app.listen(7777, () => {
  console.log("server is successfully lisetening on port 7777...");
});
