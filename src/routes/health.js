const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const healthcheck = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.version
  };

  res.status(200).json(healthcheck);
});

module.exports = router;