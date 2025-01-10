const User = require('../models/userModel');
const Slide = require('../models/slideModel');
const Announcements = require('../models/announcementModel');
const News = require('../models/newsModel');
const Tender = require('../models/tenderModel');
const NoticeBoard = require('../models/noticeboardModel');
const bcrypt = require('bcryptjs');

// // Post Announcements (dummy function, can be expanded with announcement logic)
// const postAnnouncement = async (announcementData) => {
//     const { title, content } = announcementData;
//     const announcement = Announcements.findOneAndUpdate();
//     return { title, content, message: 'Announcement posted' };
// };

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
    // console.log('us',slideData);
    const slide = await Slide.findOneAndUpdate({'_id': slideData._id}, slideData);
    return slideData;
};
const addSlides = async (slideData) => {
    console.log('slideDataa',slideData);
    const newslide = await Slide.create(slideData);  
    console.log('slide added successfully');
    return newslide;
};
const deleteSlides = async (slideData) => {
    // console.log('us',slideData);
    const slide = await Slide.findOneAndDelete({'_id': slideData});
    return slide;
};
const updateAnnouncement = async (announcementData) => {
    const { title, content } = announcementData;
    try{
        const announcement = await Announcements.findOneAndUpdate(
            { _id: announcementData._id },
            announcementData,
        );
        return announcement;
    }
    catch (error) {
        throw new Error('Announcement not found');
    }
};
const addAnnouncement = async (announcementData) => {
    const { title, content } = announcementData;
    try{
        const announcement = await Announcements.insert(
            announcementData,
        );
        return announcement;
    }
    catch (error) {
        throw new Error('Announcement not found');
    }
};
const updateNews = async (newsData) => {
    // console.log('us',newsData);
    const news = await News.findOneAndUpdate({'_id': newsData._id}, newsData);
    return news;
};
const addNews = async (newsData) => {
    // console.log('slideDataa',slideData);
    const news = await News.create(newsData);  
    // console.log('news' newsData);
    return news;
};
const deleteNews = async (newsData) => {
    // console.log('us',newsData);
    const news = await News.findOneAndDelete({'_id': newsData});
    return news;
};
const updateNoticeboard = async (newsData) => {
    // console.log('us',newsData);
    const news = await NoticeBoard.findOneAndUpdate({'_id': newsData._id}, newsData);
    return news;
};
const addNoticeboard = async (newsData) => {
    // console.log('slideDataa',newsData);
    const news = await NoticeBoard.create(newsData);  
    // console.log('news' newsData);
    return news;
};
const deleteNoticeboard = async (newsData) => {
    // console.log('us',newsData);
    const news = await NoticeBoard.findOneAndDelete({'_id': newsData});
    return news;
};
const updateTender = async (newsData) => {
    // console.log('us',newsData);
    const news = await Tender.findOneAndUpdate({'_id': newsData._id}, newsData);
    return news;
};
const addTender = async (newsData) => {
    // console.log('tender',newsData);
    const news = await Tender.create(newsData);  
    // console.log('news' newsData);
    return news;
};
const deleteTender = async (newsData) => {
    // console.log('us',newsData);
    const news = await Tender.findOneAndDelete({'_id': newsData});
    return news;
};
const deleteFaculty = async (newsData) => {
    // console.log('deltefaculty',newsData);
    const news = await User.findOneAndDelete({'_id': newsData});
    return news;
};



const getFacultyProfile = async (id) => {
    const user = await User.findOne({ _id: id });
    if (!user) throw new Error('User not found');
    return user;
};

// Update Faculty Profile
const updateFacultyProfile = async (id, profileData) => {

    let { bio,customSections, phone,email,link,designation,department,password,username,staff } = profileData;
    // console.log("bio", bio);
    // const user1 = await User.findOne({ username });
    // const facultyPageRoute = user1.profile.facultyPageRoute;
    // const imageLink = user1.profile.imageLink;
    // const name = user1.profile.name;
    console.log("profileData",profileData);
    link=link || "";
    phone=phone || "";
    email= email || "";
    bio=bio ? JSON.parse(bio) : {};
    designation=designation || ""; 
    department=department || "";
    customSections=customSections ? JSON.parse(customSections) : {};
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log("phone",phone);
    // console.log("email",email);
    // console.log("bio",bio);
    // console.log("customSections",customSections);
    console.log("link",link);
try{
    console.log("start ",id);
    const user = await User.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                "username":username,
                "password": hashedPassword,
                "profile.email": email,
                "profile.phone": phone,
                "profile.bio": bio,
                "profile.customSections": customSections,
                "profile.imageLink": link,
                "profile.designation": designation,
                "profile.department": department,
                "profile.staff": staff,
                "profile.researcharea": profileData?.researcharea || "",
                "profile.courses": profileData?.courses || "",
            }
        },
        { new: true, upsert: false },
    );
    console.log("new");
    if (!user) throw new Error('User not found');
    return user;
}
catch (error) {
    console.log("Error updating profile", error);
    throw new Error('Error updating profile');}
   
};


module.exports = {
    updateAnyFacultyProfile,
    updateAdminProfile,
    updateSlides,
    addSlides,
    deleteSlides,
    updateAnnouncement,
    addAnnouncement,
    updateNews,
    addNews,
    deleteNews,
    updateNoticeboard,
    addNoticeboard,
    deleteNoticeboard,
    updateTender,
    addTender,
    deleteTender,
    deleteFaculty,
    getFacultyProfile,
    updateFacultyProfile
};
