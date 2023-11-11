const Project = require('../models/Project');

const ProjectController = {
    createProject: async (req, res) => {
        try {
            const { portfolio, title, date, description, URL, image } = req.body;

            const project = new Project({
                portfolio,
                title,
                date,
                description,
                URL,
                image,
            });

            await project.save();

            res.status(201).json(project);
        } catch (error) {
            console.error('Error creating project:', error);
            res.status(500).send('Error creating project');
        }
    },

    getProjectById: async (req, res) => {
        try {
            const projectId = req.params.id;
            const project = await Project.findById(projectId);

            if (!project) {
                return res.status(404).send('Project not found');
            }

            res.json(project);
        } catch (error) {
            console.error('Error getting project:', error);
            res.status(500).send('Error getting project');
        }
    },

    updateProject: async (req, res) => {
        try {
            const projectId = req.params.id;
            const { portfolio, title, date, description, URL, image } = req.body;

            const project = await Project.findByIdAndUpdate(
                projectId,
                {
                    portfolio,
                    title,
                    date,
                    description,
                    URL,
                    image,
                },
                { new: true }
            );

            if (!project) {
                return res.status(404).send('Project not found');
            }

            res.json(project);
        } catch (error) {
            console.error('Error updating project:', error);
            res.status(500).send('Error updating project');
        }
    },

    deleteProject: async (req, res) => {
        try {
            const projectId = req.params.id;
            const project = await Project.findByIdAndRemove(projectId);

            if (!project) {
                return res.status(404).send('Project not found');
            }

            res.json(project);
        } catch (error) {
            console.error('Error deleting project:', error);
            res.status(500).send('Error deleting project');
        }
    },
    getAllProjects: async (req, res) => {
        try {
            const projects = await Project.find();
            res.json(projects);
        } catch (error) {
            console.error('Error getting all projects:', error);
            res.status(500).send('Error getting all projects');
        }
    },
};

module.exports = ProjectController;
