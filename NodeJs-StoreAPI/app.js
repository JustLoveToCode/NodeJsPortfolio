require('dotenv').config()
require('express-async-errors');

// Importing the express package:
const express = require('express');

// Invoking the Express Router:
const app = express();

const connectDB = require('./db/connect');

//Importing the Routes Here in app.js File:
//You will need to name your Route: productRouter:
const productsRouter = require('./routes/products');

// Importing the notFoundMiddleware and errorMiddleware:
const NotFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//Using the Middleware: Parse Incoming Requests with JSON payloads:
// Express automatically parse the Incoming JSON data and make it
// available in the request.body object:
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">Product Route</a>')
});

// This is the Base URL which is /api/v1 here:
// router.route('/products').get(getAllProducts):/api/v1/products
// router.route('/static').get(getAllProductsStatic): /api/v1/static
app.use('/api/v1',productsRouter);


// Using the NotFoundMiddleware and the errorMiddleware:
// using the app.use() Methods:
app.use(NotFoundMiddleware);
app.use(errorMiddleware);

// Using the port Variable:
const port = process.env.PORT || 5000

// Creating the start function:
const start = async()=>{
    try{
    // Invoking the connectDB Function here:
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is Listening to the port ${port} Here in app.js file`))
    }
    catch(error){
    console.log(error)
    };
}

// Invoking the start function:
start()



