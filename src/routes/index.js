const express = require('express');
const router = express.Router();

// Basic route
router.get('/', (req, res) => {
  res.send('Hello from the home route!');
});

module.exports = router;
