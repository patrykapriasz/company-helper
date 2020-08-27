const Supplier = require('../../../models/warehouse/supplier');
const SupplierHasProducts = require('../../../models/warehouse/supplier_has_product');

exports.addSupplier = (supplier) => {
  return Supplier.create({
    companyName: supplier.name
  })
}

exports.getSuppliers = () => {
  return Supplier.findAll();
}

exports.getSuppliersByProduct = (productId) => {

  const supplier =  SupplierHasProducts.findAll({
    include: [
      {model: Supplier}
    ],
    where: {
      productId: productId
    }
  })

  return supplier;
}
