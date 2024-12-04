const publicService = require('../services/publicService');

const getallFacultyList = async (req, res) => {
    try {
        const facultyList = await publicService.getallFacultyList();
        console.log('facultyList', facultyList);
        res.json(facultyList);
    } catch (error) {
        res.status(404).json({ error: "Some Error occured", message: error.message });
    }
};

const getFacultyProfile = async (req, res) => {
    try {
        // console.log("req",req);
        console.log("req",req.body);
        const profile = await publicService.getFacultyProfile(req.body.username);
        res.json(profile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const postfetchSlides = async (req, res) => {
    try {
        // const slides = await publicService.postfetchSlides();
        console.log("re");
        const slides = [
            { type: "video", image: "video#t=10,25", description: "Welcome to NIT Goa", accentColorLink: "static/Slideshow/bg-01.jpg" },
            { type: "image", image: "https://nitgoa1.vercel.app/static/Slideshow/Hackathon.jpeg", description: "Winners of Goa Police Hackathon", accentColorLink: "https://nitgoa1.vercel.app/static/Slideshow/bg-00.jpg" },
            { type: "image", image: "https://nitgoa1.vercel.app/static/Slideshow/CleanlinessDemani.png", description: "Swachh Bharat Abhiyan", accentColorLink: "https://nitgoa1.vercel.app/static/Slideshow/bg-2.jpg" },
            { type: "image", image: "https://nitgoa1.vercel.app/static/Slideshow/Gaurav.png", description: "Janjatiya Gaurav Diwas", accentColorLink: "https://nitgoa1.vercel.app/static/Slideshow/bg-3.jpg" },
          ];
        console.log("slides",slides);
        res.json(slides);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const postAllDepartmentFaculty = async (req, res) => {
    try {
        console.log("abcd");
        const facultyList = await publicService.postAllDepartmentFaculty();
        console.log('facultyList', facultyList);
        res.json(facultyList);
    } catch (error) {
        res.status(404).json({ error: "Some Error occured", message: error.message });
    }
}
const announcementsfetch = async (req, res) => {
    try {
        const announcements = await publicService.announcementsfetch();
        console.log('announcements', announcements);
        res.json(announcements);
    } catch (error) {
        res.status(404).json({ error: "Some Error occured", message: error.message });
    }
};

module.exports = { getallFacultyList, getFacultyProfile, postfetchSlides , postAllDepartmentFaculty , announcementsfetch };



