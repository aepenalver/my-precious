const pool = require('./datadase/db');
const format = require('pg-format');

const getAll = async ({ limits = 3, page = 1, order_by = 'stock_ASC' }) => {
  try {
    const [campo, direccion] = order_by.split('_');
    const offset = (page - 1) * limits;

    const formattedQuery = format(
      'SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s',
      campo,
      direccion,
      limits,
      offset,
    );

    const { rows: joyas } = await pool.query(formattedQuery);
    return joyas;
  } catch (error) {
    throw {
      code: 500,
      message: 'Error al obtener los datos',
    };
  }
};

const getAllByFilter = async ({ precio_min, precio_max, categoria, metal }) => {
  try {
    let filtros = [];
    const valores = [];

    const agregarFiltros = (campo, comparador, valor) => {
      valores.push(valor);
      const { length } = filtros;

      filtros.push(`${campo} ${comparador} $${length + 1}`);
    };

    if (precio_min) agregarFiltros('precio', '>=', precio_min);
    if (precio_max) agregarFiltros('precio', '<=', precio_max);
    if (categoria) agregarFiltros('categoria', '=', categoria);
    if (metal) agregarFiltros('metal', '=', metal);

    let query = format('SELECT * FROM inventario');

    if (filtros.length > 0) {
      filtros = filtros.join(' AND ');
      query += ` WHERE ${filtros}`;
    }

    const { rows: joyas } = await pool.query(query, valores);
    return joyas;
  } catch (error) {
    throw { code: 500, message: 'Error al filtrar los datos' };
  }
};

module.exports = { getAll, getAllByFilter };
