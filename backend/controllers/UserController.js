const User = require('../models/User');

const UserController = {
    createUser: async (req, res) => {
        try {
            const {
                email,
                password,
                firstName,
                lastName,
                image,
                dateEducation1,
                titleEducation1,
                descriptionEducation1,
                dateEducation2,
                titleEducation2,
                descriptionEducation2,
            } = req.body;

            const user = new User({
                email,
                password,
                firstName,
                lastName,
                image,
                dateEducation1,
                titleEducation1,
                descriptionEducation1,
                dateEducation2,
                titleEducation2,
                descriptionEducation2,
            });

            await user.save();

            res.status(201).json(user);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).send('Error creating user');
        }
    },

    getUserById: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).send('User not found');
            }

            res.json(user);
        } catch (error) {
            console.error('Error getting user:', error);
            res.status(500).send('Error getting user');
        }
    },

    updateUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const {
                email,
                password,
                firstName,
                lastName,
                image,
                dateEducation1,
                titleEducation1,
                descriptionEducation1,
                dateEducation2,
                titleEducation2,
                descriptionEducation2,
            } = req.body;

            const user = await User.findByIdAndUpdate(
                userId,
                {
                    email,
                    password,
                    firstName,
                    lastName,
                    image,
                    dateEducation1,
                    titleEducation1,
                    descriptionEducation1,
                    dateEducation2,
                    titleEducation2,
                    descriptionEducation2,
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
