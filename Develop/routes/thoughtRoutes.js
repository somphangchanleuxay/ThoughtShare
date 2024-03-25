// routes/thoughtRoutes.js
const express = require('express');
const router = express.Router();
const ThoughtController = require('../controllers/thoughtController');

// Define routes for thoughts
router.get('/', ThoughtController.getAllThoughts);
router.get('/:id', ThoughtController.getThoughtById);
router.post('/', ThoughtController.createThought);
router.put('/:id', ThoughtController.updateThought);
router.delete('/:id', ThoughtController.deleteThought);

// Add route for adding a reaction to a thought
router.post('/:thoughtId/reactions', thoughtController.addReactionToThought);
// Add route for deleting a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.removeReactionFromThought);


module.exports = router;