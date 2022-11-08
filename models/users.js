const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    url: String,
    filename: String
})

const userSchema = new Schema({
    name: String,
    dob: {
        type: String,
    },
    country: {
        type: String
    },
    resume: [resumeSchema]

});

module.exports = mongoose.model('addiUser', userSchema);