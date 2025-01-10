const express = require('express');
const multer = require('multer')
const { getProfile, updateProfile } = require('../controllers/facultyController');
const router = express.Router();
const { updateAnnouncement } = require('../services/adminService');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './static/'); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });


// Faculty can view their own profile
router.get('/profile', getProfile);

// Faculty can update their own profile
router.put('/profile', upload.single('file'),updateProfile);



// router.post('/profile/photos/upload', upload.single('file'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   req.sent('File uploaded successfully');
// })


module.exports = router;
