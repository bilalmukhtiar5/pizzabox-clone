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
        const userFinded = await bcrypt.compare(password, user.password)
        console.log("~exports.login = ~userFinded:~", userFinded)
        return res.json({status:200, success:true, message:"user logged in successfully",user  }) 
    } catch(error){
        console.log(error)
    }
}


