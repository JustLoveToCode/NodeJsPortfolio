const os= require('os')


// Info about current user
// First Way os.userInfo()
const user= os.userInfo()

console.log(user)


// Output Result
// {
//     uid: -1,
//     gid: -1,
//     username: 'Guest 1',
//     homedir: 'C:\\Users\\Guest 1',
//     shell: null
//   }

// Methods return the system uptime in seconds
// What is uid and gid
// Unix-like Operating System identifies the user by the 
// value called the user identifier(UID) and identify the group
// by a group identifier(GID), are used to determine which system
// resource a user or group can access



// The Uptime of the System
// Second Way os.uptime()

console.log(`The System Uptime is ${os.uptime()} seconds`)


// Code Explanation
// This will tell you the uptime of the System or this will
// tell you the System Uptime.

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)

// Output Result
// {
//     name: 'Windows_NT',
//     release: '10.0.19045',
//     totalMem: 8453738496,
//     freeMem: 2352001024
//   }

console.log('Hello World')
console.log('Hello to you')