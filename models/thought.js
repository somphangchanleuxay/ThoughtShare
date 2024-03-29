const mongoose = require('mongoose');
const reactionSchema = require('./reaction')
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    reactions: [reactionSchema]
});

module.exports = mongoose.model('Thought', thoughtSchema);