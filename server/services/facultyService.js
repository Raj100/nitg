const User = require('../models/userModel');

// Get Faculty Profile
const getFacultyProfile = async (username) => {
    const user = await User.findOne({ username });
    if (!user) throw new Error('User not found');
    return user.profile;
};

// Update Faculty Profile
const updateFacultyProfile = async (username, profileData) => {
    const {department, bio,customSections, phone,email } = profileData;
    console.log("bio", bio);
    // const user1 = await User.findOne({ username });
    // const facultyPageRoute = user1.profile.facultyPageRoute;
    // const imageLink = user1.profile.imageLink;
    // const name = user1.profile.name;

    const user = await User.findOneAndUpdate(
        { username },
        {
            $set: {
                "profile.email": email,
                "profile.phone": phone,
                "profile.bio": bio,
                "profile.customSections": customSections,
            }
        },
        { new: true, upsert: false },
    );
    // console.log("new",user);
    if (!user) throw new Error('User not found');
    return user.profile;
};

module.exports = {
    getFacultyProfile,
    updateFacultyProfile
};
