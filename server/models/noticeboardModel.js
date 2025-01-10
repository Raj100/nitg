const mongoose = require('mongoose');

const noticeboardSchema = new mongoose.Schema({
    type: { type: String, required: true},
    link: { type: String, required: true},
    content: { type: String, required: true},
});

const NoticeBoard = mongoose.model('noticeboard', noticeboardSchema);
module.exports = NoticeBoard;