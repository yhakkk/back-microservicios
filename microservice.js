// generador-numeros.js
const express = require('express');

const app = express();
const PORT = 6001;

app.get('/random', (req, res) => {
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;

  res.json({ num1, num2 });
});

app.listen(PORT, () => {
  console.log(`Servidor de números aleatorios corriendo en http://localhost:${PORT}`);
});
