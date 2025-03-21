const ensureAuthenticated = require('../Middlewares/Auth');
const express = require('express');
const router = express.Router();
const User = require('../Models/User'); 

// Get logged-in user's profile
router.get('/profile', ensureAuthenticated, async (req, res) => {
    try {
        console.log('---- Logged in user detail ---', req.user);

        // Fetch user details from the database
        const user = await User.findById(req.user.id).select('-password'); // Exclude password field

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ message: "Server error. Unable to fetch user profile." });
    }
});

module.exports = router;
