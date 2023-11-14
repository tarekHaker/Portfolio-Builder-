const bcrypt = require('bcrypt'); 
const saltRounds = 10; 

const User = require('../models/User');

const UserController = {
    createUser: async (req, res) => {
        try {
            const {
                email,
                password,
                firstName,
                lastName,
               
               
            } = req.body;

            const user = new User({
                email,
                password,
                firstName,
                lastName,
            
            });

            await user.save();

            res.status(201).json(user);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).send('Error creating user');
        }
    },
    getUserByEmail: async (req, res) => {
        try {
            const email = req.query.email;
            const password = req.query.password;
        
            const user = await User.findOne({ email });
        
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
        
           
            console.log("password", password);
            console.log("user.password", user.password);
            
            if (password!==user.password) {
              return res.status(401).json({ message: 'Incorrect password' });
            }
            else{
                console.log("matches")
            }
          res.json({ message: 'User exists', user: { firstName: user.firstName, lastName: user.lastName, _id:user._id        } });
          } catch (error) {
            console.error('Error getting user by email:', error);
            res.status(500).json({ message: 'Error getting user by email' });
          }
      },

      updateUser: async (req, res) => {
        try {
            const userId = req.params._id;
            const {
                address,
                phone,
                image,
                aboutMe,
                location,
                linkedin,
                facebook,
                skills,
                job,
                jobdescription,
            } = req.body;
    
            const user = await User.findByIdAndUpdate(
                userId,
                {
                    address,
                    phone,
                    image,
                    aboutMe,
                    location,
                    linkedin,
                    facebook,
                    skills,
                    job,
                    jobdescription,
                },
                { new: true }
            );
    
            if (!user) {
                return res.status(404).send('User not found');
            }
    
            res.json(user);
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).send('Error updating user');
        }
    },
    

    deleteUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findByIdAndRemove(userId);

            if (!user) {
                return res.status(404).send('User not found');
            }

            res.json(user);
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).send('Error deleting user');
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            console.error('Error getting all users:', error);
            res.status(500).send('Error getting all users');
        }
    },
};

module.exports = UserController;
