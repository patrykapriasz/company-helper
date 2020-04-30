const Report = require('../models/report');
const ReportItem = require('../models/report-item');
const User = require('../models/user');
const Product = require('../models/product');
const Warehouse = require('../models/warehouse');
const ProductParameter = require('../models/productParameters');


exports.addReport = (req,res,next) => {
  Report.create({
    userId: req.userData.userId,
    warehouseId: req.body.report.source,
    sampleTakerId: req.body.report.sampleTaker.id,
    description: req.body.report.description,
    productId: req.body.report.product.id

  }).then(result => {
    for(let reportItem of req.body.reportItem) {
      ReportItem.create({
        reportId: result.id,
        productParameterId: reportItem.parameter.id,
        value:reportItem.value
      }).then(result => {

      }
      ).catch(error => {
        res.status(500).json({
          message: 'error',
          content: error
        })
      });
    }
    res.status(201).json({
      message: 'success',
      content: result
    })
  }).catch(error => {
    res.status(500).json({
      message: 'error',
      content: error
    })
  })
};

exports.getReport = (req,res,next) => {
  console.log("req.parmas.id")
  Report.findByPk(req.params.id, {
    include: [
      { model: User }
    ]
  }).then(result => {
    res.status(200).json({
      message: 'success',
      content: result
    })
  }).catch(error => {
    res.status(500).json({
      message: 'error',
      content: error
    });
  })
};

exports.getLastReports = (req,res,next) => {
  const param = Number(req.params.count);
  Report.findAll({
    include: [
      { model:User },
      { model: Product },
      { model: Warehouse} ,
      { model: ReportItem, include: {model: ProductParameter} }
    ],
    order: [
      ['createdAt', 'DESC']
    ],
    limit: param
  }).then(result => {

    res.status(200).json({
      message: 'success',
      content: result
    })
  }).catch(error => {
    res.status(500).json({
      message: 'error',
      content: error
    })
  })
}
