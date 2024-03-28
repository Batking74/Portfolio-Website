// Importing Modules/Packages
const { Schema, model } = require('mongoose');

// Defining Database Schema
const testimonialSchema = new Schema({
    Firstname: String,
    LastName: String,
    Association: String,
    Profession: String,
    Image: String,
    Testimonial: String
});

// Creating Testimonal Collection and it's defined Schema
const testimonial = model('Testimonals', testimonialSchema);

// Exporting Modules
module.exports = testimonial;