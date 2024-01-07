This is the StoreAPI where it will allowed you to query all the different products
and make a numericFilter based on the price. You can use the Postman API to test the
route 

For example:
{{URL}} have already been created with the Postman API Dev Environment:
Variable   type          initial value                current value
URL        default       http://localhost:5000/api/v1 http://localhost:5000/api/v1
URL_3000   default       http://localhost:3000/api/v1 http://localhost:3000/api/v1

{{URL}}/products?numericFilters=price>80
{{URL}}/products?numericFilters=price>100
{{URL}}/products?numericFilters=price>150
