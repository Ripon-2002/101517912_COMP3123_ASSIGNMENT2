const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const { createEmployee, getEmployees } = require('../controllers/employeeController');

router.post('/', auth, createEmployee);
router.get('/', auth, getEmployees);

module.exports = router;
