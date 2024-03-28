// Importing Modules/Packages
const certificates = require('../models/certificates');
const projects = require('../models/projects');
const testimonials = require('../models/testimonials');
const skills = require('../models/skills');
const {
    projectFeilds,
    certificateFeilds,
    testimonialFeilds,
    skillFeilds,
    ProjectType,
    CertificateType,
    TestimonalType,
    SkillType 
} = require('./helpers');

const {
    GraphQLSchema,
    GraphQLString,
    GraphQLObjectType,
    GraphQLList
} = require('graphql');


// Function for displaying error messages
function throwError({ message }, queryName, queryType) {
    console.error(`Error occurred in ${queryName} ${queryType}! - ${message}`);
    throw error;
}


// Defining RootQuery
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        QueryAllSkills: {
            type: new GraphQLList(SkillType),
            async resolve(parent, args) {
                // Get All Skills From database
                try {
                    return await skills.find();
                }
                catch(error) {
                    throwError(error, 'QueryAllSkills', 'query');
                }
            }
        },
        QueryAllProjects: {
            type: new GraphQLList(ProjectType),
            async resolve(parent, args) {
                // Get All Projects From database
                try {
                    return await projects.find();
                }
                catch(error) {
                    throwError(error, 'QueryAllProjects', 'query');
                }
            }
        },
        QueryAllTestimonials: {
            type: new GraphQLList(TestimonalType),
            async resolve(parent, args) {
                // Get All Testimonials From database
                try {
                    return await testimonials.find();
                }
                catch(error) {
                    throwError(error, 'QueryAllTestimonials', 'query');
                }
            }
        },
        QueryAllCertificates: {
            type: new GraphQLList(CertificateType),
            async resolve(parent, args) {
                // Get All Certificates From database
                try {
                    return await certificates.find();
                }
                catch(error) {
                    throwError(error, 'QueryAllCertificates', 'query');
                }
            }
        }
    }
})

// Defining Mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // Skill Mutations
        AddSkill: {
            type: SkillType,
            args: skillFeilds,
            async resolve(parent, { Skill, BackgroundColor, SkillSize, IsInTechArsenal }) {
                // Creating new Skill
                try {
                    return await skills.create({ Skill, BackgroundColor, SkillSize, IsInTechArsenal });
                }
                catch(error) {
                    throwError(error, 'AddSkill', 'mutation');
                }
            }
        },
        DeleteSkill: {
            type: SkillType,
            args: { id: { type: GraphQLString } },
            resolve(parent, { id }) {
                // Delete skill at id
            }
        },
        // Project Mutations
        AddProject: {
            type: ProjectType,
            args: projectFeilds,
            async resolve(parent, { Name, HashTags, Image, URL }) {
                // Create new Project
                try {
                    return await projects.create({ Name, HashTags, Image, URL });
                }
                catch(error) {
                    throwError(error, 'AddProject', 'mutation');
                }
            }
        },
        UpdateProject: {
            type: ProjectType,
            args: projectFeilds,
            resolve(parent, { Name, HashTags, Image, URL, id }) {
                // Update Project at id
            }
        },
        DeleteProject: {
            type: ProjectType,
            args: { id: { type: GraphQLString } },
            resolve(parent, { id }) {
                // Delete Project at id
            }
        },
        // Testimonial Mutations
        AddTestimonial: {
            type: TestimonalType,
            args: testimonialFeilds,
            async resolve(parent, { Firstname, LastName, Association, Profession, Image, Testimonial }) {
                // Create new Testimonial
                try {
                    return await testimonials.create({
                        Firstname,
                        LastName,
                        Association,
                        Profession,
                        Image,
                        Testimonial
                    });
                }
                catch(error) {
                    throwError(error, 'AddTestimonial', 'mutation');
                }
            }
        },
        DeleteTestimonial: {
            type: TestimonalType,
            args: { id: { type: GraphQLString } },
            resolve(parent, { id }) {
                // Get Testimonial at id
            }
        },
        // Certificate Mutations
        AddCertificate: {
            type: CertificateType,
            args: certificateFeilds,
            async resolve(parent, { Link, Image, AltText, Tags, Description }) {
                // Create new Certificate
                try {
                    return await certificates.create({ Link, Image, AltText, Tags, Description });
                }
                catch(error) {
                    throwError(error, 'AddCertificate', 'mutation');
                }
            }
        },
        UpdateCertificate: {
            type: CertificateType,
            args: certificateFeilds,
            resolve(parent, { Link, Image, AltText, Tags, Description, id }) {
                // Update Certificate at id
            }
        },
        DeleteCertificate: {
            type: CertificateType,
            args: { id: { type: GraphQLString } },
            resolve(parent, { id }) {
                // Delete Certificate at id
            }
        }
    }
});


// Exporting Schema
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});