This is the StoreAPI where it will allowed you to query all the different products
and make a numericFilter based on the price. You can use the Postman API to test the
route 

For example:
{{URL}} have already been created with the Postman API Dev Environment:
Variable   type          initial value                current value
URL        default       http://localhost:5000/api/v1 http://localhost:5000/api/v1
URL_3000   default       http://localhost:3000/api/v1 http://localhost:3000/api/v1

Example of URL:
{{URL}}/products?numericFilters=price>80
{{URL}}/products?numericFilters=price>100
{{URL}}/products?numericFilters=price>150

For the .env file:

# This is the MONGO_URL that is extracted from the MongoDB Website:
# For the mongodb + srv://This is your username:password@mongodbproject.qop8aqf.mongodb.net/project-name?retryWrites=true&w=majority
MONGO_URL=mongodb+srv://username:password@mongodbproject.qop8aqf.mongodb.net/10-e-commerce?retryWrites=true&w=majority
# Created in the jwt.io Website URL:
# This is created in the jwt.io Website:
JWT_SECRET= eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3MzIxIiwibmFtZSI6Ikd1aSIsImlhdCI6MTUxNjIzOTAyMn0.ek97KM-87SJ6_3jMCIKTA9TjzrR2XX1234
# For the JWT_LIFETIME, it can be 15d or 30d etc:
JWT_LIFETIME= 30d
