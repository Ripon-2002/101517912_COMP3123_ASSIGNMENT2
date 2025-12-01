const Employee = require('../models/Employee');

exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create({ ...req.body, createdBy: req.user.userId });
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create employee', error: err.message });
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({ createdBy: req.user.userId });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch employees', error: err.message });
  }
};
