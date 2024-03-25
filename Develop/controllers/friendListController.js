// controllers/friendListController.js
const FriendList = require('../models/friendList');

// Controller functions
exports.getFriendListById = async (req, res) => {
    const { id } = req.params;
    try {
        const friendList = await FriendList.findById(id);
        if (!friendList) {
            return res.status(404).json({ error: 'Friend list not found' });
        }
        res.json(friendList);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createFriendList = async (req, res) => {
    const friendListData = req.body;
    try {
        const friendList = await FriendList.create(friendListData);
        res.status(201).json(friendList);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

exports.deleteFriendList = async (req, res) => {
    const { id } = req.params;
    try {
        const friendList = await FriendList.findByIdAndDelete(id);
        if (!friendList) {
            return res.status(404).json({ error: 'Friend list not found' });
        }
        res.json({ message: 'Friend list deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};