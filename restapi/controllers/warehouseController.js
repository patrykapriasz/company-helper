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

exports.getWarehouseByProduct = (req,res,next) => {
  Warehouse.findAll({
    where: {
      productId: req.params.productId
    }
  })
    .then(response => {
      res.status(200).json({
        message: 'success',
        content: response
      })
    }).catch(error => {
      res.status(500).json({
        message: 'error',
        content: error
      })
    })
};
