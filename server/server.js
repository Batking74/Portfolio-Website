// Importing Modules/Packages
const { connection } = require('./database/database');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Test route for when I deploy
app.get('/Test', (req, res) => {
    res.json({ Name: 'Nazir', Lastname: 'King'});
})

// Listening for database connection
connection.once('open', () => {
    console.log('Database connected successfully!');

    // Starting Server
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}!`);
    });
});