const facultyService = require('../services/facultyService');

const getProfile = async (req, res) => {
    try {
        console.log("here", req.user.username);
        const profile = await facultyService.getFacultyProfile(req.user.username);
        res.json(profile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateProfile = async (req, res) => {
    try {
        console.log("user updating",req.user.username);
        const updatedProfile = await facultyService.updateFacultyProfile(req.user.username, req.body);
        res.json(updatedProfile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};




module.exports = { getProfile, updateProfile };
