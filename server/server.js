// Importing Modules/Packages
const { connection } = require('./database/database');
const schema = require('./schema/schema');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const express = require('express');
const app = express();
const { join } = require('path');
const PORT = process.env.PORT || 4000;

// Creating Apollo Server
const apolloServer = new ApolloServer({ schema });


// Starts to All Servers
async function startApplicationServers() {
    try {
        await apolloServer.start();
        
        // Middleware
        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());

        checkForNewEnvironment();

        // Route for GraphQL API
        app.use('/GraphQL', expressMiddleware(apolloServer));

        // Listening for database connection
        connection.once('open', () => {
            console.log('Database connected successfully!');

            // Starting Server
            app.listen(PORT, () => {
                console.log(`Listening on Port ${PORT}!`);
                // Middleware
            });
        });
    }
    catch (error) {
        console.error('Error Occurred Starting Apollo Server ', error);
        throw error
    }
}


// Serving up frontend once server starts
function checkForNewEnvironment() {
    if (process.env.NODE_ENV === 'production') {
        // Serve static files from the client/dist directory
        app.use(express.static(join(__dirname, '../client/dist')));

        app.get('*', (req, res) => {
            res.sendFile(join(__dirname, '../client/dist/index.html'));
        });
    }
}

startApplicationServers();