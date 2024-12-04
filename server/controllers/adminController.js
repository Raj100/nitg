const adminService = require('../services/adminService');

const postAnnouncement = async (req, res) => {
    try {
        const announcement = await adminService.postAnnouncement(req.body);
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
        res.json(updatedSlides);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { postAnnouncement, updateFacultyProfile, updateProfile ,updateSlides};
