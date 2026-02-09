const express = require('express');
const cors = require('cors');
const pool = require('./datadase/db');
const prepareHateoas = require('./utils/hateoas');
const logsMiddleware = require('./middlewares/logs');
const { getAll, getAllByFilter } = require('./queries');

const app = express();

const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(logsMiddleware);

app.get('/joyas', async (req, res) => {
  try {
    const inventario = await getAll(req.query);
    const HATEOAS = prepareHateoas(inventario);
    res.status(200).json(HATEOAS);
  } catch (error) {
    const status = error.code || 500;
    res.status(status).json({ error: error.message });
  }
});

app.get('/joyas/filtros', async (req, res) => {
  try {
    const inventario = await getAllByFilter(req.query);
    res.status(200).json(inventario);
  } catch (error) {
    const status = error.code || 500;
    res.status(status).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
