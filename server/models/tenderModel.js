const mongoose = require('mongoose');

const tenderSchema = new mongoose.Schema({
    type: { type: String, required: true},
    link: { type: String, required: true},
    content: { type: String, required: true},
});

const Tender = mongoose.model('tender', tenderSchema);
module.exports = Tender;