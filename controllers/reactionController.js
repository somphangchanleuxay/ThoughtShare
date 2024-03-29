// controllers/reactionController.js
const Reaction = require('../models/reaction');

// Controller functions
exports.getAllReactions = async (req, res) => {
    try {
        const reactions = await Reaction.find();
        res.json(reactions);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getReactionById = async (req, res) => {
    const { id } = req.params;
    try {
        const reaction = await Reaction.findById(id);
        if (!reaction) {
            return res.status(404).json({ error: 'Reaction not found' });
        }
        res.json(reaction);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createReaction = async (req, res) => {
    const reactionData = req.body;
    try {
        const reaction = await Reaction.create(reactionData);
        res.status(201).json(reaction);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

exports.deleteReaction = async (req, res) => {
    const { id } = req.params;
    try {
        // Find the reaction by ID and delete it
        const reaction = await Reaction.findByIdAndDelete(id);
        if (!reaction) {
            // If reaction with the provided ID is not found, return 404 Not Found status
            return res.status(404).json({ error: 'Reaction not found' });
        }
        // If deletion is successful, send a success message
        res.json({ message: 'Reaction deleted successfully' });
    } catch (error) {
        // If there is an error during deletion, return 500 Internal Server Error status
        res.status(500).json({ error: 'Server error' });
    }
};