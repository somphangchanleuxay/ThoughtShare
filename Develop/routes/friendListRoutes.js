// routes/friendListRoutes.js
const express = require('express');
const router = express.Router();
const FriendListController = require('../controllers/friendListController');

// Define routes for friend lists
router.get('/', FriendListController.getAllFriendLists);
router.get('/:id', FriendListController.getFriendListById);
router.post('/', FriendListController.createFriendList);
router.delete('/:id', FriendListController.deleteFriendList);

module.exports = router;