const Delivery = require('../../models/warehouse/delivery');

exports.addDelivere = (delivery) => {
    return Delivery.create({
      status: delivery.status,
      productId: delivery.product.id,
      supplierId: delivery.supplier.id
    })
}
