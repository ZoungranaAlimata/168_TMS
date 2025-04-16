const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');
const Auth = require('../utils/Auth');

const { getStudent, addStudent, updateAStudent, deleteStudent } = require('../controllers/userController');

// Route to get all users
router.get('/Student', getStudent); // Correct
router.post('/Student', addStudent); // Correct
router.put('/Student/:id', StudentController.updateStudent); // Correct
router.delete('/Student/:id', deleteStudnet); // Correct

module.exports = router;





