const express=require('express')
const app=express()
// Importing the products and in the Global Variable:
const {products}=require('./data.js');

// This SERVE our data and now, we can just ACCESS that data,
// and build the Front-End Application using this data in the data.js
app.get('/',(req,res)=>{
    res.send('<h1>Homepage</h1><a href="/api/products">Products</a>')
})

app.get('/api/products/',(req,res)=>{
    // Accessing All the Products in 1 Single Browser
    const newProducts=products.map((product)=>{
        // Object Destructuring
        const {id,name,image}=product;
        return{id,name,image}
    })
    res.json(newProducts)
})


app.get('/api/products/:productID',(req,res)=>{
    // Accessing the Single Product in a Single Browser
    const {productID}=req.params;
    // This is using the singleProduct to find 1 Single Product Here
    // especially when it want to check if the product.id matched the Number(productID)
    const singleProduct=products.find((product)=>product.id===Number(productID))
    // If the singleProduct do not exist:
    if (!singleProduct){
        return res.status(404).send('Product does not Exist')
    }
    return res.json(singleProduct)
})


app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send('Hello World')
})

// If there are some query string parameter present
// You can use the filter method for the products
app.get('/api/v1/query', (req,res)=>{
    // console.log(req.query);
    // If the search and limit is in my query parameter and is like the properties
    // of the object req.query
    const {search, limit}=req.query
    let sortedProducts=[...products];
    
    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        // Convert limit into the Number
        sortedProducts=sortedProducts.slice(0, Number(limit))
    }
    // It mean it is Not Returning ANYTHING in the Search Result.
    if(sortedProducts.length <1){
        // res.status(200).send('No Product Match your Search')
        return res.status(200).json({success:true, data:[]})
    }
    res.status(200).json(sortedProducts)
    

})



app.listen(5000,()=>{
    console.log('Server is listening on Port 5000 app19...')
})