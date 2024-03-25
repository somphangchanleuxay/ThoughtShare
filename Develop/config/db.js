// db.js
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/social_network_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

module.exports = mongoose.connection;