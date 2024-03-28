const express = require('express');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');
const reactionRoutes = require('./routes/reactionRoutes');
const friendListRoutes = require('./routes/friendListRoutes');
const db = require('./config/db');

require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);
app.use('/api/friend-list', friendListRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);

    if (err instanceof mongoose.Error) {
        // Mongoose validation or database error
        return res.status(400).json({ error: err.message });
    }

    if (err.status === 404) {
        // Route not found
        return res.status(404).json({ error: 'Not found' });
    }

    // Generic server error
    res.status(500).json({ error: 'Internal server error' });
});

db.once('open', () => {
    // Start server
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});