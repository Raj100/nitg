const mongoose = require('mongoose');
const Department = require('./departmentModel');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['faculty', 'admin'], default: 'faculty' },
    facultyPageRoute: { type: String},
    department: { type: String },
    profile: {
        name: String,
        email: String,
        department: String,
        phone: String,
        designation: String,
        bio: {  
            type: Map,
            of: [String] 
        },
        customSections: {
            type: Map,
            of: [String]
        },
        facultyPageRoute: { type: String},
        imageLink: {type:String},
        staff: { type: Boolean, default: false },
        researcharea: String,
        courses: String,
    },
    verified: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
