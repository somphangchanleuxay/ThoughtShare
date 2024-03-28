// db.js
const { connect, connection } = require('mongoose');

// Connect to MongoDB database
connect('mongodb://127.0.0.1:27017/social_network_db')

module.exports = connection;