const Report = require('../models/report');

exports.addReport = (req,res,next) => {
  console.log(req.body.report);
  Report.create({
    userId: req.userData.userId,
    warehouseId: req.body.report.source,
    sampleTakerId: req.body.report.sampleTaker.id,
    description: req.body.report.description
  }).then(result => {
  }).catch(error => {
    res.status(500).json({
      message: 'error',
      content: error
    })
  })
};
