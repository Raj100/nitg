const mongoose = require('mongoose');

const announcementsSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
});

const Announcements = mongoose.model('announcements', announcementsSchema);
module.exports = Announcements;