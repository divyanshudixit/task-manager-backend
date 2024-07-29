// src/controllers/taskController.js
const Task = require('../models/Task');

const createTask = async (req, res) => {
  const { title, description, status, priority } = req.body;
  const userId = req.userId;

  try {
    const newTask = new Task({ title, description, status, priority, userId });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTasks = async (req, res) => {
  const userId = req.userId;
  console.log("userId",userId);

  try {
    const tasks = await Task.find({ userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // Find all tasks
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { createTask, getTasks, updateTask, deleteTask,getAllTasks };
