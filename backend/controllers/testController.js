// backend/controllers/testController.js
exports.testMessage = (req, res) => {
  res.json({ message: 'Test route working!' });
};