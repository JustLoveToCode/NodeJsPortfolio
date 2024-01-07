require('dotenv').config()

const connectDB = require('./db/connect');

const Product = require('./models/product');
const jsonProducts = require('./products.json');



const start = async()=>{
    try{
    await connectDB(process.env.MONGO_URI);
    // Clear Away Existing Data:
    await Product.deleteMany();
    // Creating New Document:
    await Product.create(jsonProducts);
    console.log('Successfully Connected');
    // Exit the Process:
    process.exit(0);
    }
    catch(error){
    console.log(error);
    // Exit the Process:
    process.exit(1);
    }
};

start()