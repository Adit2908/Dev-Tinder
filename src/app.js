const express = require("express");

const app = express();

app.use("/user",(req,res)=>{
  res.send("HAHAHAHAHAHAHHAHAAHAHA")
})

// This will only handle GET call to /user
app.get("/user",(req,res)=>{
  res.send({firstName:"Aditya",lastName:"Pratap Rao"})
})


app.post("/user",(req,res)=>{
//saving data to DB
  res.send("Data Successfully saved to the database")
})


app.delete("/user",(req,res)=>{
//saving data to DB
  res.send("Deleted successfully")
})

//middleware-middleware is a function that executes during the request-response lifecycle of your application


//this will match all the HTTP method method API calls to /test
app.use("/test",(req, res) => {
  res.send("my server created successfully");
});


app.listen(7777, () => {
  console.log("server is successfully lisetening on port 7777...");
});
