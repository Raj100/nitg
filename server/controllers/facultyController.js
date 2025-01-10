const facultyService = require('../services/facultyService');

const getProfile = async (req, res) => {
    try {
        // console.log("here", req.user.username);
        const profile = await facultyService.getFacultyProfile(req.user.username);
        res.json(profile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateProfile = async (req, res) => {
    try {
        console.log("Hello updateProfile facultyController",req.body);
        // console.log("req.file.path",req.file.path);
        if(req?.file?.path){
            req.body.link = `https://nitgoa.ac.in/${req.file.path}`;
        }
        console.log("user updating",req?.user?.username);
        const updatedProfile = await facultyService.updateFacultyProfile(req.user.username, req.body);
        console.log("user updating done",req.user.username);
        console.log("updatedProfile", req?.user);
        res.json(updatedProfile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};




module.exports = { getProfile, updateProfile };
