const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url=== "/"){
    return res.end('This is the Homepage')
    }
    //BLOCKING CODE
    if(req.url==='/about'){
    for (let i=0; i <10000; i++){
      for (let j=0; j<10000; j++){
        console.log(`${i} ${j}`)  
      }
    }  
        
    return res.end('This is the About Page')
    }
res.end('Error Page do not exist')
    
})

server.listen(5000,()=>{
    console.log('Server Listening on Port 5000...')
})

// When you set up the Blocking Code,
// You will also Block Traffic to Other Website 
// Pages that is Asynchronous in Nature.
// The only ways for the other website pages to run
// is when the Asynchronous code stopped running