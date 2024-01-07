const http=require('http')

// Using Event Emitter API
const server=http.createServer()
// Emits request event
// Subscribe to it, Listen to it, Respond to it


// Listen to the request event
server.on('request',(req,res)=>{
    res.end('Welcome')
})


server.listen(5000)