// controllers/userController.js
const User = require('../models/user');

// Controller functions
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createUser = async (req, res) => {
    const userData = req.body;
    try {
        const user = await User.create(userData);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, userData, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};