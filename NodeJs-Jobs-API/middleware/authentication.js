const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {UnauthenticatedError} = require('../errors');

const auth = (req,res,next)=>{
//Check for the Header
const authHeader = req.headers.authorization
if(!authHeader || !authHeader.startsWith('Bearer')){
    throw new UnauthenticatedError("Authentication Invalid")
}

const token = authHeader.split(' ')[1]

try{
const payload = jwt.verify(token, process.env.JWT_SECRET);
console.log(payload)
//  payload = {
//     userId: '656dcf085854943cc8c7225d',
//     name: 'jack',
//     iat: 1701695251,
//     exp: 1704287251
//   }
req.user = {userId:payload.userId, name:payload.name}
next()
} 

catch(error){
throw new UnauthenticatedError('Authentication Invalid')
}

}

module.exports = auth
