const express = require("express");

const app = express();

const {adminAuth,userAuth}= require("./middlewares/auth")

//Handle Auth Middleware for all request GET,POST,PUT and DELETE
app.use("/admin",adminAuth)

app.post("/user/login",(req,res)=>{
  res.send("User loggin in successfully")
})


app.get("/user/data",userAuth,(req,res)=>{
    res.send("User Data Sent")
})


app.get("/admin/getAllData",(req,res)=>{
    res.send("All Data Sent")
})

app.get("/admin/deleteUser",(req,res)=>{
  res.send("Deleted a User")
})

app.listen(7777, () => {
  console.log("server is successfully lisetening on port 7777...");
});
