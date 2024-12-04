const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Department = require('../models/departmentModel');
const bcrypt = require('bcryptjs');

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
    console.log(req.body);
    const { username, password, profile, department } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    try {
        let departmentDoc = "new";
        const name = profile?.name || "";
        const email = profile?.email || "";
        const bio = {};
        // let departmentDoc = await Department.findById(department);
        // if (!departmentDoc) {
        //     // return res.status(400).json({ message: 'Invalid department selected' });
        //     departmentDoc = {name: "new"};
        // }

        const hashedPassword = await bcrypt.hash(password, 10);

        let facultyPageRoute = profile?.name.replace(/\s+/g, '_').toLowerCase();
        if (!facultyPageRoute || facultyPageRoute === '') {
            facultyPageRoute = Math.random().toString(36).substring(7);
        }
        console.log("here");
        const newUser = new User({
            username,
            password: hashedPassword,
            facultyPageRoute,
            // department: departmentDoc._id, // Save department reference as ObjectId
            department: departmentDoc,
            profile: {
                name: name,
                email: email,
                bio: bio,
                facultyPageRoute: facultyPageRoute,
            },
            verified: false
        });
        console.log("new");
        const token = jwt.sign({ username: username, role: "faculty" }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
        res.json({ accessToken: token });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: {message:'Error creating user'}, message: 'Error creating user', error });
    }
});


// Login Route
router.post('/login', async (req, res) => {
    try {
        
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            console.log('Invalid credentials', username, password);
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        if(user.verified || true){
        const token = jwt.sign({ username: user.username, role: user.role }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
        res.json({ accessToken: token });
        console.log('Login successful:', username);
        }
        else{
            return res.status(401).json({ error: {message:'User not verified, contact admin'}, message: 'User not verified, contact admin' });
        }
    } catch (error) {

        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
