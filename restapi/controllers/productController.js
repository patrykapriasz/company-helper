const Product = require('../models/product');
const ProductGroup = require('../models/productGroups');

exports.getProducts = (req,res,next) => {
  Product.findAll({
    include:[
      ProductGroup
    ]
  }).then(result => {
    console.log(result);
    res.status(200).json({
      message: 'success',
      content: result
    })
  }
  ).catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'error',
      content: error
    })
  })
};
