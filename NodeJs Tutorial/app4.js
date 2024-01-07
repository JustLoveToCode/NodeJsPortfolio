const http=require('http')

// req represent the incoming request
// res represent the response received in response to the req
const server=http.createServer((req,res)=>{
if(req.url==='/'){
    // You will need a return statement
    // Otherwise the Server will end Abruptly
    // If we do not have the return, JavaScript will
    // keep reading the code downward and not stop at the
    // return statement code, each req can only have 1 res
    // Second alternative is to set up the if else if block
    // In that case, the else if block will not run at all.
    return res.end('Welcome to the Homepage')
   
}
if(req.url==='/about'){
    return res.end('Here is our short history')
  
}
res.end(`
<h1>The page is not found</h1>
<p>We cannot seem to find the page</p>
<a href='/'>Back to Homepage</a>
`)


    
})

// Server.listen() method create a listener 
// on the Specific port or path
server.listen(5000)