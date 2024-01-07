const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please Provide the Company Name'],
        maxlength: 50
    },

    position: {
        type: String,
        required: [true, 'Please Provide the Position'],
        maxlength: 100
    },

    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending',

    },
// Binding the reference ref to the User Model:
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please Provide User']
    }
// When we set the timestamps: true, we get the
// createdAt and updatedAt properties:
}, {timestamps: true})

module.exports = mongoose.model('Job', JobSchema)