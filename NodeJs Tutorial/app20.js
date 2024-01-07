const express=require('express')
const app=express()
const morgan=require('morgan')
const logger=require('./logger')
const authorize=require('./authorize')

// Multiple MiddleWare
// app.use([logger, authorize])
// app.use(express.static('./public'))

// Using the morgan Package:
app.use(morgan('tiny'))

//req=>Middleware=>res
app.get('/',(req,res)=>{
    
    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/api/products',(req,res)=>{
    res.send('Products')
})

app.get('/api/items',(req,res)=>{
   
    res.send('Items')
})




// Run the file using node app20.js
app.listen(5000,()=>{
    console.log('Server is listening on Port 5000 at app20...')
})