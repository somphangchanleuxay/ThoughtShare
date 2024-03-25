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
        const reaction = await Reaction.findByIdAndDelete(id);
        if (!reaction) {
            return res.status(404).json({ error: 'Reaction not found' });
        }
        res.json({ message: 'Reaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};