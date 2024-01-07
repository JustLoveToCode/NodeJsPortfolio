require('dotenv').config();
require('express-async-errors');
// Importing the express Module:
const express = require('express');
// Invoking the express function:
const app = express();

const authenticateUser = require('./middleware/authentication');

//connectDB Here:
const connectDB=require('./db/connect');

// Importing the Routes Here:
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

// Additional Security Packages for Importing:
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');

// Using the Error Handlers:
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // This is 15 minutes convert to ms
  max: 100, // Limit each IP to 100 Requests
}));
app.use(express.json());
app.use(helmet())
app.use(cors());
app.use(xss());



// Creating the get Routes:
app.use('/api/v1', authRouter);
app.use('/api/v1', authenticateUser, jobsRouter);

// Using the app.use for using the Middleware:
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


// Creating the port Variable:
const port = process.env.PORT || 5000;

// Creating the start Function:
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

// Invoking the start function:
start();

// Using the Postman API to test your Routes 
// for the NodeJs Application
