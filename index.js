const express = require('express');
const pool = require('./datadase/db');
const { getAll } = require('./queries');

const app = express();

const PORT = 3000;
app.use(express.json());

app.get('/inventario', async (req, res) => {
  const inventario = await getAll();
  res.json(inventario);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
