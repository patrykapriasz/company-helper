const Warehouse = require('../models/warehouse');
const Product = require('../models/product');

exports.getAllWarehouses = (req,res,next) => {
  Warehouse.findAll({
    include: [
      {model: Product, attributes:['name']}
    ]
  })
    .then(result => {
      res.status(200).json({
        message: 'status',
        content: result
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Error',
        content: error
      });
    });
};
