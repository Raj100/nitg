const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const facultyRoutes = require('./routes/facultyRoutes');
const adminRoutes = require('./routes/adminRoutes');
const { authenticateToken, authorizeRoles } = require('./middlewares/authMiddleware');
const cors = require('cors');
const publicRoutes = require('./routes/publicRoutes');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const connectDB = require('./config/db');
connectDB();

app.use((req, res, next) => {
    console.log(`Received ${req.method} request on ${req.originalUrl}`);
    next();
});

app.use("/api/auth", authRoutes);
app.use("/api/faculty", authenticateToken, authorizeRoles(['faculty','admin']), facultyRoutes);
app.use("/api/admin", authenticateToken, authorizeRoles(['admin']), adminRoutes);
app.use("/api/public",publicRoutes)

app.use('/static', express.static(path.join(__dirname, 'static')));
app.get('/static/Slideshow/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'static', filename), (err) => {
        if (err) {
            res.status(err.status).end();
        }
    });
});
app.get('/static/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'static', filename), (err) => {
        if (err) {
            res.status(err.status).end();
        }
    });
});

app.use('/tmp', express.static(path.join(__dirname, 'tmp')));
app.get('/tmp/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join('tmp', filename), (err) => {
        if (err) {
            res.status(err.status).end();
        }
    });
});

app.listen(5001, () => {
    console.log("Server running on port 5001");
});

// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const app = express();
// app.get('/', (req, res) => {
//     console.log('Hello World');
// });

// app.use((req, res, next) => {
//     console.log(`Received ${req.method} request on ${req.originalUrl}`);
//     next();
// });

// // Set up multer storage (you can save the file to disk or use memory storage)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // Define where the file should be stored
//     cb(null, 'uploads/'); // Make sure the "uploads" directory exists
//   },
//   filename: (req, file, cb) => {
//     // Use original file name or any custom naming
//     cb(null, Date.now() + path.extname(file.originalname)); // Appending timestamp to filename to avoid conflicts
//   },
// });

// // Initialize multer with the defined storage settings
// const upload = multer({ storage: storage });

// // Define route to handle POST request to add news
// app.post('/api/admin/news', (req, res) => {
//     console.log('Uploading File');
//     console.log('Uploading Body',req.body.content);
//   try {

//     // Access the form fields from the request body
//     console.log('Request body:', req.body);
//     const link = req.body.link;         // Text field
//     const content = req.body.content;   // Text field
//     const file = req.file;              // File field

//     // If the file is uploaded successfully
//     if (file) {
//       console.log('Uploaded file:', file);
//     }

//     // If text fields are provided
//     console.log('Link:', link);
//     console.log('Content:', content);

//     // You can save the data to a database or perform other logic
//     // Example response
//     res.status(200).json({
//       message: 'News added successfully',
//       data: {
//         link,
//         content,
//         file: file ? file.path : null, // The file path after upload
//       },
//     });
//   } catch (error) {
//     console.error('Error processing upload:', error);
//     res.status(500).json({
//       message: 'Failed to process the request',
//       error: error.message,
//     });
//   }
// }, upload.single('file'));

// // Make sure the uploads directory exists
// const fs = require('fs');
// const uploadDir = './uploads';
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// app.listen(5001, () => {
//   console.log('Server is running on http://localhost:5001');
// });

