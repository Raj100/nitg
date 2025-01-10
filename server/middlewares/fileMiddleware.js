const multer = require('multer');
const path = require('path');

// Configure multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
        console.log('File uploaded',file.originalname);
    },
});

const uploadMiddleware = multer({ storage });

const upload = (req, res, next) => {
    console.log('Uploading Body',req.body.content);
    console.log('Uploading File',req.file);
    if (req.body.type === 'Upload') {
        console.log('Upload');
    
        const singleUpload = uploadMiddleware.single('file'); // Field name 'file' for the uploaded file
        singleUpload(req, res, (err) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            }

            // Save file path in req.body.link
            if (req.file) {
                const baseURL = 'http://localhost:5000';
                req.body.link = `${baseURL}/uploads/${req.file.filename}`;
            }

            next(); // Proceed to the next middleware or route handler
        });
    } else {
        next(); // Skip file handling and move to the next middleware
    }
};

module.exports = upload;
