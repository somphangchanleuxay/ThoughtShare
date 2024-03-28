const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reactionSchema = new Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    thought: { type: Schema.Types.ObjectId, ref: 'Thought', required: true }
});

module.exports = mongoose.model('Reaction', reactionSchema);