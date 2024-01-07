const express = require('express');
// Invoking the Router using express.Router():
const router = express.Router();

// MiddleWare for the Post Data:
// The Base Route would be '/login':
router.post('/',(req,res)=>{
    // By Default, it is req.body.name
    const {name}=req.body;
    // If the name actually exist
    // return the Status Code of 200 which is Successful:
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    // If it is not successful, return the Status Code of 401:
    res.status(401).send('Please Provide Credential')
})

// Exporting the Router here:
module.exports = router;