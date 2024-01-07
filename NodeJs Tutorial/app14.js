const {createReadStream}=require('fs')

// The highWaterMark Determine how much data buffer is inside the stream
// The data is then flushed to the reading mechanism(Data Handler)
// By default, readable fs streams have their highWaterMark set to 64kb.
// You can override this
// If your data is 85 byte and you set the limit to be 20.
// It will read the data in 5 iteration which is 20, 20, 20, 20, 5
// If you set the limit to be 80, you will read in 2 Iteration which is 80 and 5.
const stream=createReadStream('../content/big.txt',{highWaterMark: 90000,
    //With utf8, the content of the files will be in words
encoding:'utf8'});

stream.on('data',(result)=>{
    console.log(result)
})


stream.on('error',(err)=>console.log(err))