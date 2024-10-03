const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projects');

//Define the CRUD api routes

//GET projects
router.get('/', projectController.getAllProjects);

//GET projects by id
router.get('/:id', projectController.getProjectById);

//POST projects
router.post('/', projectController.createProject);

//PUT project
router.put('/:id', projectController.updateProject);

//Delete Project
router.delete('/:id', projectController.deleteProject);

module.exports = router;