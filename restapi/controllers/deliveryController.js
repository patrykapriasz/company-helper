const Delivery = require('../models/warehouse/delivery');
const DeliveryService = require('../warehouse/services/delivery.service');
const socket = require('./../../socket');

exports.addDelivery = (req,res,next) => {
  const delivery = req.body;

  DeliveryService.addDelivere(delivery).then(result => {
    socket.getIO().emit('deliveries', {
      action: 'getDelivery',
      delivery: result
    })

    res.status(200).json({
      message: 'success',
      content: result
    })
  }).catch(error => {
    res.status(500).json({
      message: 'error',
      content: error
    })
  });
}
