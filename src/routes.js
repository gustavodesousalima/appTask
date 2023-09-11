const express = require('express');
const router = express.Router();

const taskController = require('./controllers/taskController');

router.get('/tasks', taskController.getAllTasks);
router.post('/task', taskController.create);
router.delete('/task/:codigo', taskController.delete);

module.exports = router;