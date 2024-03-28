// Importing Modules/Packages
const { Schema, model } = require('mongoose');

// Defining Database Schema
const certificateSchema = new Schema({
    Link: String,
    Image: String,
    AltText: String,
    Tags: String,
    Description: String
});

// Creating Certificate Collection and it's defined Schema
const certificate = model('Certificates', certificateSchema);

// Exporting Modules
module.exports = certificate;