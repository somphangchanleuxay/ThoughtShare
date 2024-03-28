const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendListSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    friend: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('FriendList', friendListSchema);