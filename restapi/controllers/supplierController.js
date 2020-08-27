const supplierService = require('../warehouse/services/supplier/supplier.service');

exports.getSupplierByProduct = (req,res,next) => {
  supplierService.getSuppliersByProduct(req.params.productId).then(result => {
    res.status(200).json({
      message: 'success',
      content: result,
    })
  }).catch(error => {
    res.status(500).json({
      message: 'error',
      content: error
    })
  })
}
