const prepareHateoas = (data) => {
  const results = data.map((item) => {
    return {
      name: item.nombre,
      href: `/joyas/joya/${item.id}`,
    };
  });

  const totalStock = data.reduce((acc, item) => {
    return acc + item.stock;
  }, 0);

  const HATEOAS = {
    totalJoyas: data.length,
    totalStock,
    results,
  };

  return HATEOAS;
};

module.exports = prepareHateoas;
