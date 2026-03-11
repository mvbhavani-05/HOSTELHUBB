const express = require('express');
const { getStudentCount } = require('../controllers/userController');

const router = express.Router();

// GET /api/users/students/count
router.get('/students/count', getStudentCount);

module.exports = router;

