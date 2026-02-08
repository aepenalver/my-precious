const pool = require('./datadase/db');

const getAll = async () => {
  const query = 'SELECT * FROM inventario';
  const { rows } = await pool.query(query);
  return rows;
};

module.exports = { getAll };
