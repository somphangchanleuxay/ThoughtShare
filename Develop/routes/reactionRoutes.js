// routes/reactionRoutes.js
const express = require('express');
const router = express.Router();
const ReactionController = require('../controllers/reactionController');

// Define routes for reactions
router.get('/', ReactionController.getAllReactions);
router.get('/:id', ReactionController.getReactionById);
router.post('/', ReactionController.createReaction);
router.delete('/:id', ReactionController.deleteReaction);

module.exports = router;