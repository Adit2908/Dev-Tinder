const validator=require('validator')

const ValidateSignUpData=(req)=>{

    const {firstName,lastName,emailId,password}=req.body;

    if(!firstName || !lastName){
        throw new Error("Name is not valid")
    }
    else if(!validator.isEmail(emailId)){
        throw new Error("Email is not valid")
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Please enter a strong password")
    }
} 

// const ValidateLoginData=(req)=>{
//     const{emailId,password}=req.body;
//     if(!validator.isEmail(emailId)){
//         throw new Error("Password is not valid");
//     }else if(!validator.isStrongPassword(password)){
//         throw new Error("Password is not valid")
//     }
// }
module.exports={
    ValidateSignUpData
}