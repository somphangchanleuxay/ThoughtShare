// controllers/thoughtController.js
const Thought = require('../models/thought');
const Reaction = require('../models/reaction');

// Controller functions

// Controller functions
exports.getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find()
            .populate('author', 'username')
            .populate('reactions', '_id content author createdAt');

        // Calculate reaction count for each thought
        const thoughtsWithReactions = thoughts.map(thought => {
            const reactionCount = thought.reactions.length;
            return {
                _id: thought._id,
                content: thought.content,
                author: thought.author,
                createdAt: thought.createdAt,
                reactions: thought.reactions,
                reactionCount: reactionCount
            };
        });

        res.json(thoughtsWithReactions);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getThoughtById = async (req, res) => {
    const { id } = req.params;
    try {
        const thought = await Thought.findById(id).populate('reactions');
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
    const updatedData = req.body;
    try {
        const thought = await Thought.findByIdAndUpdate(id, updatedData, { new: true });
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        res.json(thought);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

exports.updateThoughtById = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const thought = await Thought.findByIdAndUpdate(id, updatedData, { new: true });
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        res.json(thought);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
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

exports.addReactionToThought = async (req, res) => {
    const { thoughtId } = req.params;
    const reactionData = req.body;
    console.log(thoughtId,  reactionData)
    try {
        const thought = await Thought.findByIdAndUpdate(
            thoughtId,
            { $push: { reactions: reactionData } },
            { new: true }
        );
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        res.json(thought);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.removeReactionFromThought = async (req, res) => {
    const { thoughtId, reactionId } = req.params;
    try {
        const thought = await Thought.findByIdAndUpdate(
            thoughtId,
            { $pull: { reactions: { _id: reactionId } } },
            { new: true }
        );
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        res.json(thought);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};