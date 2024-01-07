// Importing the express Module:
const express = require('express');
// Invoking the Router:
const router = express.Router();

// Getting the Different Controllers By Importing them:
const {getAllJobs, getJob, createJob, updateJob, deleteJob}
= require('../controllers/jobs');

// post method is for Creation:
router.route('/jobs').post(createJob).get(getAllJobs);
// get method is for Getting the Job
router.route('/jobs/:id').get(getJob).delete(deleteJob).patch(updateJob);

// exporting the Router Here:
module.exports = router


