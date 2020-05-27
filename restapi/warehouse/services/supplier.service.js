const Supplier = require('../../models/warehouse/supplier');

exports.addSupplier = (supplier) => {
  return Supplier.create({
    companyName: supplier.name
  })
}

exports.getSuppliers = () => {
  return Supplier.findAll();
}
