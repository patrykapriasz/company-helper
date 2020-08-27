const Delivery = require('../../models/warehouse/delivery');
const socket = require('../../../socket');

exports.addDelivere = (delivery) => {

    return Delivery.create({
      status: delivery.status,
      productId: delivery.product.id,
      supplierId: delivery.supplier.id,
      amount: delivery.amount
    })

}
