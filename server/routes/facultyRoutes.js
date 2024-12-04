const express = require('express');
// const multer = require('multer')
const { getProfile, updateProfile } = require('../controllers/facultyController');
const router = express.Router();
// const upload = multer({ dest: 'uploads/' })


// Faculty can view their own profile
router.get('/profile', getProfile);

// Faculty can update their own profile
router.put('/profile', updateProfile);

// router.post('/profile/photos/upload', upload.single('file'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   req.sent('File uploaded successfully');
// })


module.exports = router;
