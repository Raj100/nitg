const express = require('express');
const { updateFacultyProfile, updateProfile,updateSlides,addSlides, deleteSlides, updateAnnouncement,updateNews,addNews,deleteNews,updateNoticeboard,addNoticeboard,deleteNoticeboard,updateTenders, addTenders, deleteTenders, deleteFaculty,updateProfileByAdmin, getFacultyProfileByAdmin } = require('../controllers/adminController');
const router = express.Router();
// const upload = require('../middlewares/fileMiddleware');
const multer = require('multer');
const User = require('../models/userModel');
const { getFacultyProfile } = require('../services/facultyService');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './static/'); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });

// router.put('/announcements', updateAnnouncement);

router.put('/faculty/:id', updateFacultyProfile);

router.put('/profile', updateProfile);

router.put('/slides', updateSlides);
router.post('/slides',upload.single('file'), addSlides);
router.delete('/slides', deleteSlides);

router.put('/noticeboard', updateNoticeboard);
router.post('/noticeboard',upload.single('file') ,addNoticeboard);
router.delete('/noticeboard', deleteNoticeboard);

router.put('/news', updateNews);
router.post('/news',upload.single('file'), addNews);
router.delete('/news', deleteNews); 

router.put('/tender', updateTenders);
router.post('/tender',upload.single('file'), addTenders);
router.delete('/tender', deleteTenders); 

router.delete('/faculty/:id', deleteFaculty); 
router.put('/editfacultyprofile', upload.single('file'),updateProfileByAdmin);
router.get('/getfacultyprofile/:id', getFacultyProfileByAdmin);






router.put('/announcements',updateAnnouncement);


module.exports = router;
