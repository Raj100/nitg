const User = require('../models/userModel');

// Get Faculty Profile
const getFacultyProfile = async (username) => {
    const user = await User.findOne({ username });
    if (!user) throw new Error('User not found');
    return user.profile;
};

// Update Faculty Profile
const updateFacultyProfile = async (username, profileData) => {

    let { bio,customSections, phone,email,link } = profileData;
    // console.log("bio", bio);
    // const user1 = await User.findOne({ username });
    // const facultyPageRoute = user1.profile.facultyPageRoute;
    // const imageLink = user1.profile.imageLink;
    // const name = user1.profile.name;
    console.log("profileData",profileData);
    const link1=link || ".";
    phone=phone || "";
    email= email || "";
    bio=bio ? JSON.parse(bio) : {};
    customSections=customSections ? JSON.parse(customSections) : {};
    
    console.log("link",link1);
    console.log("phone",phone);
    console.log("email",email);
    console.log("bio",bio);
    console.log("customSections",customSections);
try{
    console.log("start ",username);
    const user = await User.findOneAndUpdate(
        { username },
        {
            $set: {
                "profile.email": email,
                "profile.phone": phone,
                "profile.bio": bio,
                "profile.customSections": customSections,
                "profile.imageLink": link1,
                "profile.researcharea": profileData?.researcharea || "",
                "profile.courses": profileData?.courses || "",
            }
        },
        { new: true, upsert: false },
    );
    console.log("new");
    if (!user) throw new Error('User not found');
    return user.profile;
}
catch (error) {
    console.log("Error updating profile", error);
    throw new Error('Error updating profile');}
   
};

module.exports = {
    getFacultyProfile,
    updateFacultyProfile
};
