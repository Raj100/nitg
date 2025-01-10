const mongoose = require('mongoose');

const slidesSchema = new mongoose.Schema({
    type: { type: String, required: true},
    image: { type: String, required: true},
    description: { type: String, required: true},
    accentColorLink: { type: String},
});

const Slides = mongoose.model('slides', slidesSchema);
module.exports = Slides;

// const slides = [
    //     { type: "video", image: "video#t=10,25", description: "Welcome to NIT Goa", accentColorLink: "static/Slideshow/bg-01.jpg" },
    //     { type: "image", image: "https://nitgoa1.vercel.app/static/Slideshow/Hackathon.jpeg", description: "Winners of Goa Police Hackathon", accentColorLink: "https://nitgoa1.vercel.app/static/Slideshow/bg-00.jpg" },
    //     { type: "image", image: "https://nitgoa1.vercel.app/static/Slideshow/CleanlinessDemani.png", description: "Swachh Bharat Abhiyan", accentColorLink: "https://nitgoa1.vercel.app/static/Slideshow/bg-2.jpg" },
    //     { type: "image", image: "https://nitgoa1.vercel.app/static/Slideshow/Gaurav.png", description: "Janjatiya Gaurav Diwas", accentColorLink: "https://nitgoa1.vercel.app/static/Slideshow/bg-3.jpg" },
    //   ];