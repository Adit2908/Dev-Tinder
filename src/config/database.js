const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
   "mongodb+srv://adityadev:4qikK3MAAz74Szfx@namstenode.9phjinq.mongodb.net/devTinder"
  );
};

module.exports=connectDB;
