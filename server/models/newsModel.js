const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    type: { type: String, required: true},
    link: { type: String, required: true},
    content: { type: String, required: true},
});

const News = mongoose.model('news', newsSchema);
module.exports = News;