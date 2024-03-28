// Importing Package
const mongoose = require('mongoose');
require('dotenv').config();

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION);

// Exporting Modules
module.exports = mongoose;