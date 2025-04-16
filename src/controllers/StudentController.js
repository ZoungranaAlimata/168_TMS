const Student = require('../models/StudentModel');

// Add a new student
exports.addStudent = async (req, res) => {
    try {
        const student = new User(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all student
exports.getStudent= async (req, res) => {
    try {
        const Student= await Student.find();
        res.status(200).json(Student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a student
exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!Student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(Student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete astudnt
exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!Student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};