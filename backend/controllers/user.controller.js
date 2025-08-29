const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const salt = 10;


exports.store = async(req,res,next) => {
    try {
        const {password} = req.body;
        const hashedPassword = await bcrypt.hash(password,salt);
        req.body.password = hashedPassword;
        const user = await User.create(req.body)
        return res.json({status:200, success: true, message: "user created successfully", user})
    } catch (error) {
        console.log(error)
    }
}


exports.login = async (req,res,next) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email:email})
        if(!user){
            return res.json({status:200, success:false, message:"user not found"})
        }
        const userFinded = await bcrypt.compare(password,user.password)
        if(userFinded){
            return res.json({ status: 200, success: true, message: "User Logged in Successfully" })
        }
         else{
            return res.json({status:400,message:"Password Incorrect",success:false})
        }
    } catch(error){
        console.log(error)
    }
}


