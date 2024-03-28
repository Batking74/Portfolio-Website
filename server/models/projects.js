// Importing Modules/Packages
const { Schema, model } = require('mongoose');

// Defining Database Schema
const projectSchema = new Schema({
    Name: String,
    HashTags: String,
    Image: String,
    URL: String
});

// Creating Projects Collection and it's defined Schema
const project = model('Projects', projectSchema);

// Exporting Modules
module.exports = project;