const User = require("../models/user.model");
const cookieParser=require('cookie-parser')
const signUpUser = async (req, res) => {
  if (req.body.email && req.body.password){
    const { email, password } = req.body;
    console.log("work");
    const user=await User.findOne({email: req.body.email })
    if (user){
        console.log(user);
        return res.status(400).json({"msg":"user found"})
    }
    else{
        const result =  User.create({ email: email, password: password })
        return res.status(201).json(result)
    }
    
  }
};



const signInUser =async (req, res) => {
    const {email,password}=req.body
    if (email && password){
        const user= await User.find({email:email})
        console.log(user,email,password);
        if (user && user[0]){
            if (user[0].password===password){
                res.cookie('cook-name','email').send('cookie-set ',email,password)
            }
        }    
    }
    

};





module.exports={
    signUpUser,
    signInUser
}