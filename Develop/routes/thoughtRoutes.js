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

module.exports = router;