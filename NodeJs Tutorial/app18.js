const express=require('express')
// Using the path module to combine the path here:
const path=require('path')
// Invoking the express Module:
const app=express()

// Setup Static and Middleware: You will need to provide the Relative Path:
app.use(express.static('./02-express-tutorial/public'))


// The app.js file is actually in a different directory compared to index.html
// x=app.get('/', (req,res)=>{
// res.sendFile(path.resolve(__dirname,'./02-express-tutorial/navbar-app/index.html'))
// })



app.all('*',(req,res)=>{
    res.status(404).send('Resource not found')
})

app.listen(5000,()=>{
    console.log(`Server is Listening on Port 5000 on app18...`)
})