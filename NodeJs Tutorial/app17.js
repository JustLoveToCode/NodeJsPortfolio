// Import the Modules
const express=require('express')

// Invoking the express function using the express()
const app=express()

// Incoming request and response:
app.get('/', (req,res)=>{
    console.log('User hit the Homepage')
   res.status(200).send('Home Page') 
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

// Cover all the HTTP Verb, whether GET, POST,etc
//Regardless of any HTTP Verb or method, as long as the path is not found
// It will be 404 Status.
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000,()=>{
    console.log('Server is Listening on port 5000 on app17')
})
