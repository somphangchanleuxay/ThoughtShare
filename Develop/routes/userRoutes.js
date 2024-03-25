// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Define routes for users
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

// Add route for adding a friend to a user's friend list
router.post('/:userId/friends/:friendId', userController.addFriend);
// Add route for removing a friend from a user's friend list
router.delete('/:userId/friends/:friendId', userController.removeFriend);

module.exports = router;