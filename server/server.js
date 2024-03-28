// Importing Modules/Packages
const { connection } = require('./database/database');
const express = require('express');
const app = express();
const { join } = require('path');
const PORT = process.env.PORT || 4000;

// Serving up frontend once server starts
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(join(__dirname, '../client/dist/index.html'));
    });
}

// Listening for database connection
connection.once('open', () => {
    console.log('Database connected successfully!');

    // Starting Server
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}!`);
        // Middleware
    });
});
