const Product = require('../models/product');

// Controllers:
const getAllProductsStatic = async (req, res) =>{
    // Finding all the objects and sort it by the
    // Alphabetical Order from A-Z:
    // You can also use .sort() method after the .find() Method:
    // You can use the limit and the skip method:
    // price: {gt:30} it mean greater than:
    const products = await Product.find({price:{$gt:30}}).sort('price').select('name price company').limit(10).skip(5);
    // This is to find all the Products:
    // finding based on the Certain Condition: featured: true:
    // ({name: 'vase table'}), {featured: true}
    // const products = await Product.find({});
    res.status(200).json({products,nbHits: products.length});
}


//Controllers:
const getAllProducts = async (req, res)=>{
    // Using Object Destructuring from req.query method:
    // req.query is a String:
    // req.query.featured, req.query.company, etc:
    const {featured,company,name,sort,fields, numericFilters} = req.query;

    // Initially, It is an Empty object:
    const queryObject = {}
   
    // If featured exist:
    if(featured){
        // Using the Ternary Conditional Operator:
        queryObject.featured = featured === 'true' ? true: false
    }
    // If company exist:
    if(company){
        queryObject.company = company
    }
    // If name exist:
    if(name){
        queryObject.name = {$regex:name, $options: 'i'}
    }
    // Using Numeric Filters Here:
    // Convert into the Language that Mongoose Understand Here:
    if(numericFilters){
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }
        const regEx = /\b(<|>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(regEx, (match)=>`-${operatorMap[match]}-`)
        console.log(filters)

        const options = ['price', 'rating'];

        filters = filters.split(',').forEach((item)=>{
            // Array Destructuring: Splitting into 3 Different Values:
            const [field, operator, value] = item.split('-');
            // queryObject['price'] = { '>=': 100 };
            if(options.includes(field)){
                queryObject[field] = {[operator]:Number(value)}
            }

        })

    }
    // This will find the result based on the queryObject
    // using the Product.find() Method:
    // Even if the find is empty object {}, it mean to get everything:
    // result = Product.find({}): This mean to get the result of everything:
    let result = Product.find(queryObject);

    // If the sort actually exist in req.params: ("a,b"):
    if(sort){
        // Multiple Filters:
        sortList = sort.split(',').join(' ');
        result = result.sort(sortList)
    }
   

    else{
        result = result.sort('createdAt');
    }
    // If fields exist here:
    if(fields){
        // Multiple Filters:
        // Splitting through the comma, and join based on the Space Separation:
        // string1,string2,string3- Output: string1 string2 string3
        fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
       
    }
    // If i am at page 1, I will skip 0, but will still limit to 10(default)
    // If i am at page 2, I will skip first 7 when it multiply by
    // the limit here and hence i will reach page 2 and will not show page 3 result
    // since there is a limit here:
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page-1) * limit;
   

    result = result.skip(skip).limit(limit)

    // await keyword ensure that each result is applied sequentially
    // before the final result is output: It ensure that the Above
    // Operations are completed before you move on to the next line of code:
    const products = await result
    
    res.status(200).json({products, nbHits: products.length});
}

// This is exported into the routes/products.js
module.exports = {
    getAllProducts,
    getAllProductsStatic
}


