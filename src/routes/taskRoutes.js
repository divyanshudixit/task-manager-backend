// src/routes/taskRoutes.js
const express = require('express');
const { createTask, getTasks, updateTask, deleteTask, getAllTasks } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createTask);
router.get('/', authMiddleware, getTasks);
router.put('/:id', authMiddleware, updateTask);
router.delete('/:id', authMiddleware, deleteTask);
router.get('/all-tasks', authMiddleware, getAllTasks);

module.exports = router;
