Portfolio Builder
Description
Portfolio Builder is a web application that empowers users to create and exhibit their professional portfolios. It allows users to enter personal information, project details, skills, and upload project images. The platform generates a personalized web page for each user to showcase their work.

MongoDB Data Model
To design the MongoDB data model for the Portfolio Builder web application.
A User can have many Portfolios.
A User can have multiple educational details.
A Portfolio belongs to one User.
A Portfolio can have multiple Projects.
Project
A Project belongs to one Portfolio.
How to Use the Application
As a user, you can sign up and create your professional profile.
Add educational details, skills, and personal information.
Create a portfolio, add a bibliography, and list your skills.
For each portfolio, add multiple projects with their details and images.
The application will generate a unique web page for each user to showcase their work.
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
Use MongoDB:
Install dependencies for  the backend:
Run npm install 
npm install cors
npm install multer
npm install axios

To display the image in the CardMedia component, you can use the sharp library to convert the image buffer to a base64-encoded string. 
install the sharp library in frontend and backend : npm install sharp

npm run db:setup
the appropriate database configuration is in the index.js file.
Start the application with two separate commands:
Run npm start from inside the front-end directory.
Run npm start from inside the backEnd directory.
Access the application in your web browser. 
The front-end client will open automatically, and the server will be listening on port 5000.