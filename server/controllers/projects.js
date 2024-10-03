const Project = require('../models/projects');

//GET /api/projects
exports.getAllProjects = async (req, res) => {
    try{
        const projects = await Project.find();
        res.json(projects);
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.getProjectById = async (req, res) => {
    try{
        const project = await Project.findById(req.params.id);

        if(project === null){
            return res.status(404).json({message: 'Project not found'});
        }
        
        res.json(project);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

exports.createProject = async (req, res) => {
    const project = new Project({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    });

    try{
        const newProject = await project.save();
        res.status(201).json(newProject);
    }catch(errors){
        res.status(400).json({message: error.message});
    }
}

exports.updateProject = async(req, res) => {
    try{
        const project = await Project.findById(req.params.id);

        if(project === null){
            return res.status(404).json({message: 'Project not found'});
        }

        if(req.body.name != null){
            project.name = req.body.name;
        }
        
        if(req.body.description != null){
            project.description = req.body.description;
        }

        if(req.startDate != null){
            project.startDate = req.body.startDate;
        }

        if(req.endDate != null){
            project.endDate = req.body.endDate;
        }

        const updateProject = await project.save();
        res.json(updateProject);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

exports.deleteProject = async(req, res) => {
    try{
        const project = await Project.findById(req.params.id);

        if(project === null){
            return res.status(404).json({message: 'Project not found'});
        }

        await project.remove();
        res.json({message: 'Project deleted successfully'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}