const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // Setting the Default:
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, please try again later'
  }

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })
  // }
  
  if(err.name === 'ValidationError'){
    console.log(Object.values(err.errors))
    customError.msg = Object.values(err.errors).map((item)=> item.message).join(',')
    customError.statusCode == 400
  }

  
  if(err.name === 'CastError'){
    CustomError.msg = `No Item found with the id ${err.value}`
    CustomError.statusCode = 404
  }

  if(err.code && err.code  === 11000){
    console.log(err)
    // Object.keys() in JavaScript is used to extract the keys of the object
    // and returned them as the Array:
    customError.msg = `Duplicate Values Entered For ${Object.keys(err.keyValue)} fields, Please Choose another Value`
    customError.statusCode = 400

  }
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err})
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
