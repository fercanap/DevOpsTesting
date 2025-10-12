const express = require('express');
const { add, subtract, multiply, divide } = require('../utils/calculator');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: '¡Bienvenido a la API del Curso de GitHub Actions!',
    version: '1.0.0',
    endpoints: [
      'GET / - Esta página',
      'GET /health - Estado del servidor',
      'POST /calculate - Realizar operaciones matemáticas'
    ]
  });
});

router.post('/calculate', (req, res) => {
  const { operation, a, b } = req.body;

  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({
      error: 'Los valores "a" y "b" deben ser números'
    });
  }

  let result;
  try {
    switch (operation) {
      case 'add':
        result = add(a, b);
        break;
      case 'subtract':
        result = subtract(a, b);
        break;
      case 'multiply':
        result = multiply(a, b);
        break;
      case 'divide':
        result = divide(a, b);
        break;
      default:
        return res.status(400).json({
          error: 'Operación no válida',
          validOperations: ['add', 'subtract', 'multiply', 'divide']
        });
    }

    res.json({
      operation,
      a,
      b,
      result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

module.exports = router;