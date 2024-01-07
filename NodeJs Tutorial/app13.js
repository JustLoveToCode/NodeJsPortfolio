const {writeFileSync}=require('fs')

// Using the for Loop to Loop through the Code:
for(let i=0; i <10000; i++){
    writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'})
}