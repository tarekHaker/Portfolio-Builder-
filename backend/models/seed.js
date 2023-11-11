const mongoose = require('mongoose');
const User = require('./User');
const Portfolio = require('./Portfolio');
const Project = require('./Project');

mongoose.connect('mongodb://127.0.0.1:27017/Portfolio-Builder-', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const users = [
  {
    userId:'Mark',
    email: 'mark@example.com',
    password: 'password1',
    firstName: 'Mark',
    lastName: 'Zuckerberg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0JGHQQh4kBP8brJPpuioyd3D1SvwNZ1MeiObIInxdk8kkugBuHXeKsREPxNfJu_SNBA&usqp=CAU',
    aboutMe: 'Co-founder and CEO of Meta Platforms, Inc. (formerly Facebook, Inc.)',
    dateEducation1: '2002 - 2004', 
    titleEducation1: 'Harvard University',
    descriptionEducation1: 'Dropped out to focus on Facebook.',
  },
  
  
  {
    userId:'admin1',
    email: 'admin',
    password: 'admin',
    firstName: 'Admin',
    lastName: 'Admin',
    image: 'admin.jpg', 
    aboutMe: 'Admin user',
    dateEducation1: 'N/A',
    titleEducation1: 'N/A',
    descriptionEducation1: 'N/A',
  },
];

const portfolios = [
  {
    bibliography: 'Portfolio 1 description',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    userId: 'Mark',
  },
  {
    bibliography: 'Portfolio 2 description',
    skills: ['Skill A', 'Skill B', 'Skill C'],
    userId:'Mark',
  },
  // Add more Portfolio objects
];

const projects = [
  {
    title: 'Project 1',
    date: new Date(),
    description: 'Project 1 description',
    url: 'https://project1.com',
    image: 'project1.jpg',
    portfolioId: new mongoose.Types.ObjectId(), // Generate a new Portfolio's ObjectID
  },
  {
    title: 'Project 2',
    date: new Date(),
    description: 'Project 2 description',
    url: 'https://project2.com',
    image: 'project2.jpg',
    portfolioId: new mongoose.Types.ObjectId(), // Generate a new Portfolio's ObjectID
  },
  // Add more Project objects
];

// Insert data into the database
async function seed() {
  try {
    await User.insertMany(users);
    await Portfolio.insertMany(portfolios);
    await Project.insertMany(projects);
    console.log('Data successfully seeded.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.disconnect();
  }
}

// Run the seeding function
seed();
