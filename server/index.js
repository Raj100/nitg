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
app.use("/api/faculty", authenticateToken, authorizeRoles(['faculty']), facultyRoutes);
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

app.listen(5001, () => {
    console.log("Server running on port 5001");
});
