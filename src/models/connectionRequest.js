const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User", // reference to the user collection
      required: true,
      
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["ignored", "interested", "accepted", "rejected"],
        message: `{VALUE} is incorrect status type`,
      },
    },
  },
  {
    timestamps: true,
  },
);

//ConnectionRequest.find(fromUserId:23444, toUserId:38q38448488248y )
connectionRequestSchema.index({fromUserId: 1, toUserId: 1})

connectionRequestSchema.pre("save",function(){
  const connectionRequest=this;
  //Check if the fromUserId is same as toUserId
  if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
    throw new Error("Cannot sent connection request to yourself");
  }
 
})


module.exports= mongoose.model("ConnectionRequest",connectionRequestSchema);