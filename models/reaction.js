const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reactionSchema = new Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = reactionSchema;