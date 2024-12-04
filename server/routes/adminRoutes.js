const express = require('express');
const { postAnnouncement, updateFacultyProfile, updateProfile,updateSlides } = require('../controllers/adminController');
const router = express.Router();

// Admin can post announcements
router.post('/announcements', postAnnouncement);

// Admin can update any faculty's profile
router.put('/faculty/:id', updateFacultyProfile);

// Admin can update their own profile
router.put('/profile', updateProfile);

router.put('/slides', updateSlides);


module.exports = router;
