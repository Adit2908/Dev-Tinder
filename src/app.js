const express = require("express");
const connectDB=require("./config/database")
const app = express();
const User =require('./models/user')


app.post("/signup",async(req,res)=>{
const user= new User({
  firstName:"Sachin",
  lastName:"Tendulkar",
  emailId:"sachin@gmail.com",
  password:"sachin@123"


})
try{
await user.save();
res.send("User Added Successfully")
}
catch(err){
res.status(400).send("error saving the user:"+err.message)
}


})




connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
    console.log("server is successfully lisetening on port 7777...");
});
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });




