const {readFile, writeFile}=require('fs')

console.log('This is the Synchronous Code')

readFile('./content/first.txt','utf8',(err, result)=>{
    // This is reading the first.txt file
    if(err){
    console.log(err)
    return
    
   
    }
    // This will log out the first.txt file
    
    // This is within the first outer code block
    console.log(result)
    // Declared outside on Global Scope relatively on the codeblock
    const first= result
   
    readFile('./content/second.txt','utf8',(err,result)=>{
    // This is reading the second.txt file
    if (err){
    console.log(err)
    return
    
        }
    console.log(result)
    const second=result
    
    writeFile('./content/content1/result-async.txt',
    `Here is the RESULT: ${first} and ${second}`, {flag: 'a'},
    (err,result)=>{
    if(err){
        console.log(err)
        return;
       
    }
    console.log('done with this task')
   
    })
        
    })
    
    
})

// Synchronous Code will have priority in execution
console.log('starting next task')


// Output Result- Without the utf8
//Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 
// 74 65 78 74 20 66 69 6c 65>

//Output Result-With the utf8

// Output Result- With the utf8
// Hello this is first text file





