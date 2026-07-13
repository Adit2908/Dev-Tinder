const express = require("express");

const app = express();

// app.use("/route",rH,[rH2,rH3],rH4,rH5)

app.use("/user",
(req,res,next)=>{
  console.log("Handling the route user!!");
  next();
 
},
(req,res,next) =>{
  console.log("Handling the route user 2!!");
  // res.send("2nd response!!");
  next();
},

(req,res,next) =>{
  console.log("Handling the route user 3!!");
  // res.send("3rd response!!")
  next();
},
(req,res,next) =>{
  console.log("Handling the route user 4!!");
  // res.send("4th response!!")
  next();
},

(req,res,next) =>{
  console.log("Handling the route user 5!!");
  res.send("5th response!!")
  
}
)

app.listen(7777, () => {
  console.log("server is successfully lisetening on port 7777...");
});
