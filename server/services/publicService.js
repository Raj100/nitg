const User = require('../models/userModel');
const Annoucement = require('../models/announcementModel');

const getallFacultyList = async () => {
    const user = (await User.find()).select('profile');
    if (!user) throw new Error('User not found');
    return user;
};

const getFacultyProfile = async (username) => {
    console.log('here');
    const user = await User.findOne({ 'profile.facultyPageRoute': username });
    if (!user) throw new Error('User not found');
    return user.profile;
};
const postfetchSlides = async () => {
      const slides = [
    { type: "video", image: video, description: "Description 5", accentColorLink: bg_4 },
    { type: "image", image: slideshow1, description: "Description 1", accentColorLink: bg_1 },
    { type: "image", image: slideshow2, description: "Description 2", accentColorLink: bg_2 },
    { type: "image", image: slideshow3, description: "Description 3", accentColorLink: bg_3 },
    { type: "image", image: slideshow4, description: "Description 4", accentColorLink: bg_4 },
  ];
  return slides;
}
const postAllDepartmentFaculty = async () => {
    const user = await User.find().select('profile');
    if (!user) throw new Error('User not found');
    console.log('user', user);
    return user;
};

const announcementsfetch = async () => {
    const user = await Annoucement.find();
    if (!user) throw new Error('User not found');
    console.log('user', user);
    return user;
}


module.exports = {
    getallFacultyList,
    getFacultyProfile,
    postfetchSlides,
    postAllDepartmentFaculty,
    announcementsfetch,
};
