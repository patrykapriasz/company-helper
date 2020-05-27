const Delivery = require('../models/warehouse/delivery');
const DeliveryService = require('../warehouse/services/delivery.service');

exports.addDelivery = (req,res,next) => {
  const delivery = req.body;
  DeliveryService.addDelivere(delivery).then(result => {
    res.status(200).json({
      message: 'success',
      content: result
    })
  })
}
