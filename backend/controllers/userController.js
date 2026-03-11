const User = require('../models/User');

// GET /api/users/students/count
// Returns total number of users with role === 'student'
const getStudentCount = async (req, res) => {
  try {
    const count = await User.countDocuments({ role: 'student' });
    return res.status(200).json({
      success: true,
      count,
    });
  } catch (error) {
    console.error('Error fetching student count:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch student count',
    });
  }
};

module.exports = {
  getStudentCount,
};

