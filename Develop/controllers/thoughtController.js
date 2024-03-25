// controllers/thoughtController.js
const Thought = require('../models/thought');

// Controller functions

// Controller functions
exports.getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getThoughtById = async (req, res) => {
    const { id } = req.params;
    try {
        const thought = await Thought.findById(id);
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        res.json(thought);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createThought = async (req, res) => {
    const thoughtData = req.body;
    try {
        const thought = await Thought.create(thoughtData);
        res.status(201).json(thought);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

exports.updateThought = async (req, res) => {
    const { id } = req.params;
    const thoughtData = req.body;
    try {
        const thought = await Thought.findByIdAndUpdate(id, thoughtData, { new: true });
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        res.json(thought);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

exports.deleteThought = async (req, res) => {
    const { id } = req.params;
    try {
        const thought = await Thought.findByIdAndDelete(id);
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        res.json({ message: 'Thought deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};