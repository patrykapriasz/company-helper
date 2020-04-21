const ProductParameter = require('../models/productParameters');

exports.getParametersByProductId = (req,res,next) => {
  ProductParameter.findAll({
    where: {
      productId: req.params.productId
    }
  }).then(result => {
    res.status(200).json({
      message: 'success',
      content: result
    });
  }).catch(error => {
    res.status(500).json({
      message: 'error',
      content: error
    })
  });
}
