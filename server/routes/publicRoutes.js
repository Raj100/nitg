const { getallFacultyList, getFacultyProfile ,postfetchSlides,postAllDepartmentFaculty , announcementsFetch, newsFetch,noticeFetch,tenderFetch} = require('../controllers/publicController');
const express = require('express');
const router = express.Router();

router.get('/getallfacultylist', getallFacultyList);

router.post('/faculty', getFacultyProfile);
router.get('/slides', postfetchSlides);
router.post('/departments/faculty', postAllDepartmentFaculty);

router.get('/news', newsFetch);
router.get('/noticeboard', noticeFetch);
router.get('/tender', tenderFetch);

router.get('/announcements', announcementsFetch);
// router.get('/announcements', announcementsfetch);



module.exports = router;