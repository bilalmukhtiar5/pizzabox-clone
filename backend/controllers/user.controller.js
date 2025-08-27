const User = require('../models/user.model');


exports.store = async(req,res,next) => {
    try {
        const user = await user.create(req.body)
        return res.json({status:200, success: true, message: "user created successfully", user})
    } catch (error) {
        console.log(error)
    }
}


