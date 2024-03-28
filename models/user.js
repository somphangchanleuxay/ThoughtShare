const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

// Define a virtual property for thoughts count
userSchema.virtual('thoughtsCount', {
    ref: 'Thought', // Reference the Thought model
    localField: '_id', // Field in User model
    foreignField: 'author', // Field in Thought model
    count: true // Calculate the count
});

// Define a virtual property for friend count
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

module.exports = mongoose.model('User', userSchema);