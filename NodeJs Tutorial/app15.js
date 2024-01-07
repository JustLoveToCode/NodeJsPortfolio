var http=require('http')
var fs=require('fs')

http
    .createServer(function (req,res){
        // const text=fs.readFileSync('./content/big.txt','utf8')
        // res.end(text)
        const fileStream=fs.createReadStream('./content/big.txt','utf8');
        fileStream.on('open',()=>{
        fileStream.pipe(res)  
        })
        fileStream.on('error',(err)=>{
            res.end(err)
        })
    })
.listen(5000)

// Code Explanation
// fileStream.pipe: These streams can be used to read and write the data
// from the files. Pipes can be used to connect the Multiple Streams together.
// One of the most common examples is to pipe the read and write stream together
// for the transfer of the data from one file to another file.
