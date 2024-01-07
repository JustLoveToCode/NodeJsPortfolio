const express=require('express');
const app=express();

// Importing the Function
let {people}=require('./data')

// Static Assets:
app.use(express.static('./02-express-tutorial/methods-public'));

//Parse Form Data:
app.use(express.urlencoded({extended:false}))

//Parsing the Json Data Here:
app.use(express.json())

// MiddleWare for the Post Data for the login route:
app.post('/login',(req,res)=>{
    // By Default, it is req.body.name
    const {name}=req.body;
    // If the name exist:
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    // If the name do not exist:
    res.status(401).send('Please Provide Credential')
})




// Run the file using node app21.js using the app.listen:
app.listen(5000,()=>{
    console.log('Server is listening on the Port 5000 at app21...');
})