const express = require("express");

const app = express();



// This will only handle GET call to /user

// /ac, /abc
app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params)
  res.send({firstName: "Aditya",lastName: "Pratap Rao"});
});


app.listen(7777, () => {
  console.log("server is successfully lisetening on port 7777...");
});
