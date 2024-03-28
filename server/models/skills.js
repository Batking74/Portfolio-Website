// Importing Modules/Packages
const { Schema, model } = require('mongoose');

// Defining Database Schema
const skillSchema = new Schema({
    Skill: String,
    BackgroundColor: String,
    SkillSize: Number,
    IsInTechArsenal: Boolean
});

// Creating Skills Collection, and it's defined Schema
const skill = model('Skills', skillSchema);

// Exporting Modules
module.exports = skill;