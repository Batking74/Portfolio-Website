// Importing Module
const { GraphQLBoolean, GraphQLInt, GraphQLString, GraphQLObjectType, } = require('graphql');


// Defining GraphQL Schema Type Feilds
const projectFeilds = {
    Name: { type: GraphQLString },
    HashTags: { type: GraphQLString },
    Image: { type: GraphQLString },
    URL: { type: GraphQLString }
};

const certificateFeilds = {
    Link: { type: GraphQLString },
    Image: { type: GraphQLString },
    AltText: { type: GraphQLString },
    Tags: { type: GraphQLString },
    Description: { type: GraphQLString }
};

const testimonialFeilds = {
    Firstname: { type: GraphQLString },
    LastName: { type: GraphQLString },
    Association: { type: GraphQLString },
    Profession: { type: GraphQLString },
    Image: { type: GraphQLString },
    Testimonial: { type: GraphQLString }
};

const skillFeilds = {
    Skill: { type: GraphQLString },
    BackgroundColor: { type: GraphQLString },
    SkillSize: { type: GraphQLInt },
    IsInTechArsenal: { type: GraphQLBoolean }
};


// Defining GraphQL Schema Types
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => (projectFeilds)
});

const CertificateType = new GraphQLObjectType({
    name: 'Certificate',
    fields: () => (certificateFeilds)
});

const TestimonalType = new GraphQLObjectType({
    name: 'Testimonial',
    fields: () => (testimonialFeilds)
});

const SkillType = new GraphQLObjectType({
    name: 'Skill',
    fields: () => (skillFeilds)
});


// Exporting Modules
module.exports = {
    projectFeilds,
    certificateFeilds,
    testimonialFeilds,
    skillFeilds,
    ProjectType,
    CertificateType,
    TestimonalType,
    SkillType
}