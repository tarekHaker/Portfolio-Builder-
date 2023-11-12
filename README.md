Portfolio Builder
Description
Portfolio Builder is a web application that empowers users to create and exhibit their professional portfolios. It allows users to enter personal information, project details, skills, and upload project images. The platform generates a personalized web page for each user to showcase their work.

MongoDB Data Model
To design the MongoDB data model for the Portfolio Builder web application, we consider the following data entities and their relationships:
User
Attributes:

id: Unique identifier for the user.
email: User's email address.
password: User's password.
firstName: User's first name.
lastName: User's last name.
aboutMe: A brief about the user.
photo: User's profile photo.
dateEducation1: Education date 1.
titleEducation1: Education title 1.
descriptionEducation1: Education description 1.
dateEducation2: Education date 2.
titleEducation2: Education title 2.
descriptionEducation2: Education description 2.
Relationships:

A User can have many Portfolios.
A User can have multiple educational details.
Portfolio
Attributes:

id: Unique identifier for the portfolio.
bibliography: Textual description of the portfolio.
skills: An array of skills associated with the portfolio.
Relationships:

A Portfolio belongs to one User.
A Portfolio can have multiple Projects.
Project
Attributes:

id: Unique identifier for the project.
title: Title of the project.
date: Project completion date.
description: Detailed project description.
URL: Project URL.
Image: Project image.
Relationships:

A Project belongs to one Portfolio.
How to Use the Application
As a user, you can sign up and create your professional profile.
Add educational details, skills, and personal information.
Create a portfolio, add a bibliography, and list your skills.
For each portfolio, add multiple projects with their details and images.
The application will generate a unique web page for each user to showcase their work.
As an administrator, you can update, add, or delete products.
Users can browse products, filter by categories, search for specific products, and add products to their cart.
Cart functionality allows users to add products, remove them, and complete the purchase.
Tech Stack
Frontend:
React
Server:
NodeJS
Express
Databases:

MongoDB with Mongoose ODM
Additional Libraries and Tools:

Axios (Optional, as an alternative to jQuery's $.ajax)
Getting Started
Clone the repository.
Install dependencies for both the front-end:
npm install
npm install @mui/material @mui/icons-material @emotion/styled @emotion/react
npm install react-router-dom
If you're using MongoDB:
Install dependencies for  the backend:
Run npm install 
npm install cors
npm install multer

npm run db:setup

the appropriate database configuration is in the index.js file.
Start the application with two separate commands:
Run npm start from inside the front-end directory.
Run npm start from inside the backEnd directory.
Access the application in your web browser. 
The front-end client will open automatically, and the server will be listening on port 5000.