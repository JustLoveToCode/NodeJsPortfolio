const express=require('express')
// Invoking the Express Router:
const app=express()

// Importing from the routes folder followed by the 
const peopleRouter = require('./routes/people');
const authRouter =require('/routes/auth');



// Static Assets
app.use(express.static('./02-express-tutorial/methods-public'))

//Parse Form Data
app.use(express.urlencoded({extended:false}))

//Parse json using the express application:
app.use(express.json())

// Base Path: Applied to the api/people Route:
app.use('/api/people', peopleRouter);

// Base Path: Applied to the login Route:
app.use('/login', authRouter);




// Listening to the Server on port 5000:
app.listen(5000,()=>{
    console.log('Server is listening on Port 5000 on app.js...')
})