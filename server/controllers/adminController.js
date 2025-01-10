const adminService = require('../services/adminService');

const updateAnnouncement = async (req, res) => {
    try {
        const announcement = await adminService.updateAnnouncement(req.body);
        res.status(201).json(announcement);
    } catch (error) {
        res.status(500).json({ message: 'Error posting announcement' });
    }
};

const updateFacultyProfile = async (req, res) => {
    try {
        const updatedProfile = await adminService.updateAnyFacultyProfile(req.params.id, req.body);
        res.json(updatedProfile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateProfile = async (req, res) => {
    try {
        const updatedProfile = await adminService.updateAdminProfile(req.user.username, req.body);
        res.json(updatedProfile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateSlides = async (req, res) => {
    try {
        const updatedSlides = await adminService.updateSlides(req.body);
        console.log("updatedSlides", updatedSlides);
        res.json(updatedSlides);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const addSlides = async (req, res) => {
    try {
        // console.log("req", req.body);
        if(req?.file?.path){
            req.body.image = `https://nitgoa.ac.in/${req.file.path}`;
        }
        const addedSlides = await adminService.addSlides(req.body);
        console.log("slide addes sucess")
        res.status(200).json(addedSlides);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const deleteSlides = async (req, res) => {
    try {
        console.log("req", req.body);
        const deletedSlides = await adminService.deleteSlides(req.body.id);
        console.log("deletedSlides", deletedSlides);

        res.json(req.body.id);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateNews = async (req, res) => {
    try {
        const updatedNews = await adminService.updateNews(req.body);
        console.log("updatedNews", updatedNews);
        res.json(updatedNews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const addNews = async (req, res) => {
    try {
        if(req.file.path){
            req.body.link = `https://nitgoa.ac.in/${req.file.path}`;
        }
        console.log("add news req file",req.file.path);
        console.log("add news req body",req.body);
        console.log("add news req content", req.content);
        const addedNews = await adminService.addNews(req.body);
        console.log("DDobe");
        res.status(200).json(addedNews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const deleteNews = async (req, res) => {
    try {
        console.log("req", req.body);
        const deletedNews = await adminService.deleteNews(req.body.id);
        console.log("deletedNews", deletedNews);

        res.json(req.body.id);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateNoticeboard = async (req, res) => {
    try {
        const updatedNews = await adminService.updateNews(req.body);
        console.log("updatedNews", updatedNews);
        res.json(updatedNews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const addNoticeboard = async (req, res) => {
    try {
        console.log("add news req file");
        if(req?.file?.path){
            req.body.link = `https://nitgoa.ac.in/${req.file.path}`;
        }
        // console.log("add news req file",req?.file?.path);
        // console.log("add news req body",req?.body);
        // console.log("add news req content", req?.content);
        const addedNews = await adminService.addNoticeboard(req.body);
        console.log("DDobe");
        res.status(200).json(addedNews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const deleteNoticeboard = async (req, res) => {
    try {
        console.log("req", req.body);
        const deletedNews = await adminService.deleteNoticeboard(req.body.id);
        console.log("deletedNews", deletedNews);

        res.json(req.body.id);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateTenders = async (req, res) => {
    try {
        const updatedNews = await adminService.updateTender(req.body);
        console.log("updatedNews", updatedNews);
        res.json(updatedNews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const addTenders = async (req, res) => {
    try {
        if(req.file.path){
            req.body.link = `https://nitgoa.ac.in/${req.file.path}`;
        }
        const addedNews = await adminService.addTender(req.body);
        console.log("add success");
        res.status(200).json(addedNews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const deleteTenders = async (req, res) => {
    try {
        console.log("req", req.body);
        const deletedNews = await adminService.deleteTender(req.body.id);
        console.log("deletedNews", deletedNews);

        res.json(req.body.id);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const deleteFaculty = async (req, res) => {
    try {
        console.log("req", req.body);
        const deletedNews = await adminService.deleteFaculty(req.params.id);
        console.log("deletedNews", deletedNews);

        res.json(req.body.id);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const getFacultyProfileByAdmin = async (req, res) => {
    try {
        console.log("here", req.params?.id);
        const profile = await adminService.getFacultyProfile(req?.params?.id);
        res.json(profile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateProfileByAdmin = async (req, res) => {
    try {
        console.log("Hello updateProfile facultyController",req.body);
        // console.log("req.file.path",req.file.path);
        if(req?.file?.path){
            req.body.link = `https://nitgoa.ac.in/${req.file.path}`;
        }
        console.log("user updating",req?.body?.id,);
        const updatedProfile = await adminService.updateFacultyProfile(req.body.id, req.body);
        console.log("user updating done",req.user.username);
        console.log("updatedProfile", req?.user);
        res.json(updatedProfile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports =
{
    updateFacultyProfile,
    updateProfile,
    updateSlides,
    updateAnnouncement,
    addSlides,
    deleteSlides,
    updateNews,
    addNews,
    deleteNews,
    updateNoticeboard,
    addNoticeboard,
    deleteNoticeboard,
    updateTenders,
    addTenders,
    deleteTenders,
    deleteFaculty,
    getFacultyProfileByAdmin,
    updateProfileByAdmin
};
