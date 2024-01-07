const {readFile}=require('fs')

console.log('Starting the First Task')


readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
    console.log(err)
    return
    }
    console.log('Testing it Out')
    console.log(result)
    console.log('Completed First Task')
})

console.log('Starting Next Task')



// Code Explanation
// Output Result
// Starting the First Task
// Starting Next Task
// Testing it Out
// Hello this is first text file
// Completed First Task

// readFile is considered to be the Asynchronous Function
// Event Loop will Upload this to the File System
// We Offload the tasks and keep on Reading the Code Synchronously