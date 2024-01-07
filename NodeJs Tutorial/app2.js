const {readFileSync, writeFileSync} = require('fs');


console.log('start')
// This is the method provided by the filesystem Module
// to read the content of the file, the Sync indicate that
// the Operation is actually synchronous in nature, meaning
// that it will block the execution of the program until the
// file read operation is complete:
// This is used to read the contents of the file named "example.txt".
// The Second Parameter called the 'utf-8' specified the encoding of the file,
// In this case, it assumed that the file contain the text data.
const first =readFileSync('./content/first.txt', 'utf8')
const second =readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// If there are some values in the existing file, the values will be overwritten
// If you do not want the values to be overwritten, you will need to give the 
//  {flag: 'a'} input.
// writeFileSync is to write or output the result into that Particular File:
writeFileSync('./content/result-sync.txt',`Here is the result: 
${first}, ${second}`, {flag:'a'})

console.log(combinedFile)

console.log('Done with this task')
console.log('Starting the next one')

// Code Explanation
// JavaScript is reading the code Synchronously, Hence if 1 user is actually
// 'using' this code and reading the Line 6 Code, what this mean that the code
//  will be stucked at Line 6, it will not continue as the user is at Line 6.
//  Hence, this is the Disadvantages of Synchronous Code



