const User = require('../models/userModel');
const Slide = require('../models/slideModel');
const Announcement = require('../models/announcementModel');

// Post Announcements (dummy function, can be expanded with announcement logic)
const postAnnouncement = async (announcementData) => {
    const { title, content } = announcementData;
    // Logic to save the announcement (e.g., in a database) or send notifications
    // For now, just return the data
    return { title, content, message: 'Announcement posted' };
};

// Update Any Faculty Profile
const updateAnyFacultyProfile = async (facultyId, profileData) => {
    const { name, department, bio } = profileData;
    const user = await User.findByIdAndUpdate(
        facultyId,
        { profile: { name, department, bio } },
        { new: true }
    );
    if (!user) throw new Error('User not found');
    return user.profile;
};

// Admin Update Their Own Profile
const updateAdminProfile = async (username, profileData) => {
    const { name, department, bio } = profileData;
    const user = await User.findOneAndUpdate(
        { username },
        { profile: { name, department, bio } },
        { new: true }
    );
    if (!user) throw new Error('User not found');
    return user.profile;
};

const updateSlides = async (slideData) => {
    const slide = await Slide.findOneAndUpdate(
        { username },
        { profile: { name, department, bio } },
        { new: true }
    );
    return slideData;
};
const updateAnnouncement = async (announcementData) => {
    const { title, content } = announcementData;
    try{
        const announcement = await Announcement.findOneAndUpdate(
            { title },
            { content },
            { new: true }
        );
        return announcement;
    }
    catch (error) {
        throw new Error('Announcement not found');
    }
};
module.exports = {
    postAnnouncement,
    updateAnyFacultyProfile,
    updateAdminProfile,
    updateSlides,
    updateAnnouncement,
};
