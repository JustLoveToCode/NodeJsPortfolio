const Job = require('../models/Job');
const {StatusCodes} = require('http-status-codes');
const {BadRequestError, NotFoundError} = require('../errors');

const getAllJobs = async(req,res)=>{
    // You get this property through the createJob:
    const jobs = await Job.find({createdBy: req.user.userId}).sort('createdAt');
    // THis is getting back the StatusCodes and the json response
    // with the jobs and the jobs.length here:
    res.status(StatusCodes.OK).json({jobs, count: jobs.length});
}

const getJob = async(req,res)=>{
    // This is what you create for the req itself:
    const {user:{userId}, params:{id: jobId}} = req
    // Using the findOne method here to get the _id and the createdBy properties:
    const job = await Job.findOne({
        _id: jobId, createdBy: userId
    })

    if(!job){
        throw new NotFoundError(`No job with the id of ${jobId}`)
    }
    res.status(StatusCodes.OK).json({job});

}


const createJob = async(req,res)=>{
    // This is the createdBy properties that is assigned to the
    // req.user.userId: The job that is being created is associated
    // with the Specific User and req.user.userId represent the User
    // who is actually creating the job. By assigning this value, you
    // are indicating that the job is created by the user with the Specific User ID
    // This will createBy: req.user.userId
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const updateJob = async(req,res)=>{
   const {
    body: {company, position},
    user: {userId},
    params: {id: jobId} 
   } = req

   if(company === '' || position  === ''){
    throw new BadRequestError('Company or Position Field Cannot Be Empty')
   }

   const job = await Job.findByIdAndUpdate({_id:jobId, createdBy:userId}, req.body, {new:true,
runValidators: true});
// If there is no job to be found: throw the NotFoundError Here:
if (!job){
    throw new NotFoundError(`No job with the id ${jobId}`);
}
res.status(StatusCodes.OK).json({job});

}

const deleteJob = async(req,res)=>{
    const {
        user: {userId},
        params: {id: jobId},
    } = req
    const job = await Job.findByIdAndRemove({
        _id:jobId,
        createdBy:userId
    })
    if(!job){
        throw new NotFoundError(`There is No job with the id of ${jobId}`);
    }
    res.status(StatusCodes.OK).json(`The job with the ${jobId} is Deleted Successfully`);
}

module.exports = {
    getAllJobs, getJob,
    createJob, updateJob, 
    deleteJob
}