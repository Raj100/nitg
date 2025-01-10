const User = require('../models/userModel');
const Annoucement = require('../models/announcementModel');
const Slide = require('../models/slideModel');
const News = require('../models/newsModel');
const NoticeBoard = require('../models/noticeboardModel');
const Tender = require('../models/tenderModel');

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
//       const slides = [
//     { type: "video", image: video, description: "Description 5", accentColorLink: bg_4 },
//     { type: "image", image: slideshow1, description: "Description 1", accentColorLink: bg_1 },
//     { type: "image", image: slideshow2, description: "Description 2", accentColorLink: bg_2 },
//     { type: "image", image: slideshow3, description: "Description 3", accentColorLink: bg_3 },
//     { type: "image", image: slideshow4, description: "Description 4", accentColorLink: bg_4 },
//   ];
    const slides = await Slide.find();
    if (!slides) throw new Error('Slides not found');
    // console.log('slides', slides);
  return slides;
}
const postAllDepartmentFaculty = async () => {
    const user = await User.find().select('profile');
    if (!user) throw new Error('User not found');
    // console.log('user', user);
    return user;
};

const announcementsfetch = async () => {
    const announcements = await Annoucement.find().sort({ _id: -1 });
    if (!announcements) throw new Error('Announcements not found');
    // console.log('user', user);
    return announcements;
}
const newsfetch = async () => {
    const news = await News.find().sort({ _id: -1 });
    if (!news || news.length === 0) {
        throw new Error('News not found');
    }
    return news;
};
const noticefetch = async () => {
    const news = await NoticeBoard.find().sort({ _id: -1 });
    if (!news || news.length === 0) {
        throw new Error('News not found');
    }
    return news;
};
const tenderfetch = async () => {
    const news = await Tender.find().sort({ _id: -1 });
    // console.log("tender",news);
    if (!news || news.length === 0) {
        throw new Error('News not found');
    }
    return news;
};


module.exports = {
    getallFacultyList,
    getFacultyProfile,
    postfetchSlides,
    postAllDepartmentFaculty,
    announcementsfetch,
    newsfetch,
    noticefetch,
    tenderfetch
};
