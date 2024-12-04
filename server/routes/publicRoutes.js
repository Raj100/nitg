const { getallFacultyList, getFacultyProfile ,postfetchSlides,postAllDepartmentFaculty , announcementsfetch} = require('../controllers/publicController');
const express = require('express');
const router = express.Router();

router.get('/getallfacultylist', getallFacultyList);

router.post('/faculty', getFacultyProfile);
router.post('/slides', postfetchSlides);
router.get('/slides', postfetchSlides);
router.post('/departments/faculty', postAllDepartmentFaculty);

router.get('/announcements', announcementsfetch);
// router.get('/announcements', announcementsfetch);



module.exports = router;