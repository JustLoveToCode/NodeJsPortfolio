const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const {BadRequestError, UnauthenticatedError} = require('../errors');



// Creating the register function:
const register = async(req,res)=>{
    // Take the existing Values and Add on New Values:
    // User.create Method will Invoke the UserSchema 
    // and the pre-save Method:
    const user = await User.create({...req.body});
    // Invoking the Method createJWT():
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({user: {name:user.name},
        token});
}

// Creating the login function:
const login = async(req,res)=>{
    // Object Destructuring from the req.body:
    const {email, password} = req.body
    // If the email or password do not exist:
    if(!email || !password){
        throw new BadRequestError('Please Provide Email and Password');
    }
    // Using the findOne to get the user email Object:
    const user = await User.findOne({email});
    // If the user do not exist:
    if(!user){
        throw new UnauthenticatedError('Invalid Credentials');
    }
    // comparePassword with the password that is passed in from the req.body
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials');
    }

    const token = user.createJWT();
    res.status(StatusCodes.OK).json({user:{name: user.name}, token})

}

module.exports = {
    register, login,
}