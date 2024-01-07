const http= require('http')
const {readFileSync}=require('fs');

// Get all files
// We are only requesting the files once
// We are not invoking this everytime someone come to the server
// It is restarted at the initial time when the Server started
// to initiate.
// This const homePage=readFileSync(./index.html) do not keep running
// again and again. It is only started at the very beginning when 
// we start the server
// The number of dot notation here represent the depth, if it is 2 level deep,
// you will need 2 Dots Notations (.)



const homePage=readFileSync('./02-express-tutorial/navbar-app/index.html')
const homeStyles=readFileSync('./02-express-tutorial/navbar-app/styles.css')
const homeImage=readFileSync('./02-express-tutorial/navbar-app/logo.svg')
const homeLogic=readFileSync('./02-express-tutorial/navbar-app/browser-app.js')

const server=http.createServer((req,res)=>{
    const url=req.url
    console.log(url)
// Homepage this is the /index.html 
    if(url==='/'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage)
    res.end()
    
}
// /about
else if(url==='/about'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>About Page</h1>')
    res.end()
    
}


//styles.css file
else if(url==='/styles.css'){
    res.writeHead(200,{'content-type':'text/css'})
    res.write(homeStyles)
    res.end()
    
}

//image/logo
else if(url==='/logo.svg'){
    res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeImage)
    res.end()
    
}


//JavaScript Logic
else if(url==='/browser-app.js'){
    res.writeHead(200,{'content-type':'text/javascript'})
    res.write(homeLogic)
    res.end()
    
}







//Resource not found 404
else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>Page not Found</h1>')
    res.end() 
    
}

})

server.listen(5000)