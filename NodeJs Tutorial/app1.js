// Path Module
const path= require('path')

console.log(path.sep)

// Output Result
// This is using the path.join Method that will join
// the entire filepath into 1 single filepath
const filePath=path.join('/content', 'subfolder', 'path.txt');
console.log(filePath);




// Output Result
// \content\subfolder\path.txt

// We will get the full filePath


const base=path.basename(filePath)
console.log(base)


// Output Result
// path.txt
// Code Explanation
// This will give you the final filePath 
// which is the base 'path.txt'

// The meaning of the path.resolve: This is to generate the Absolute Path.
// __dirname is the Global Variable in the NodeJs Application that represent
// the Directory name of the Current Module:
// The purpose of the path.resolve is to generate the Absolute Path
// by Combining the provided path segments:
const absolute=path.resolve(__dirname,'content', 'subfolder', 'path.txt');
console.log(absolute)


// Output Result
// C:\Users\Guest 1\Desktop\Tutorial\content\subfolder\path.txt

// Code Explanation
// This will give you the Absolute Path which is also the Full Path here
// This will give you the Full Filepath here.





