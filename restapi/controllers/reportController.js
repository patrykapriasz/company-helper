const Report = require('../models/report');
const ReportItem = require('../models/report-item');
const User = require('../models/user');
const Product = require('../models/product');
const Warehouse = require('../models/warehouse');
const ProductParameter = require('../models/productParameters');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;


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
        productParameterId: reportItem.productParameter.id,
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

  let existingReport;

  Report.findByPk(req.params.id, {
    include: [
      { model: User },
      { model: Product },
      { model: Warehouse} ,
      { model: ReportItem, include: {model: ProductParameter} },
    ]
  }).then(result => {
    existingReport = result;
    samplerTakerId = result.sampleTakerId;

    User.findByPk(samplerTakerId).then(result=> {
      existingReport.SamplerTaker = result;
      res.status(200).json({
      message: 'success',
      content: existingReport
    })
    })
  }).catch(error => {
    res.status(500).json({
      message: 'error',
      content: existingReport
    });
  })
};

exports.getPaginatedReports = (req,res,next) => {
  const limitPerSite = Number(req.params.limitPerSite);
  const siteNumber = Number(req.params.siteIndex);
  Report.findAll({
    include: [
      { model:User },
      { model: Product },
      { model: Warehouse} ,
      { model: ReportItem, include: {model: ProductParameter} },
    ],
    order: [
      ['createdAt', 'DESC']
    ],
    limit: limitPerSite,
    offset: limitPerSite * (siteNumber - 1)
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

exports.getFilteredReports = (req,res,next) => {
  console.log(req.body);
  const limitPerSite = Number(req.params.limitPerSite);
  const siteNumber = Number(req.params.siteIndex);
  const crit = decodeURIComponent(req.query.criteria);
  const decoded = JSON.parse(crit);
  const dateFrom = req.body.dateFrom;
  const dateTo = req.body.dateTo;
  const products = req.body.products;
  let reports;
  Report.findAll({
    include: [
      { model:User },
      { model: Product },
      { model: Warehouse} ,
      { model: ReportItem, include: {model: ProductParameter} },
    ],
    where: {
      createdAt: {
        [Op.between]:[dateFrom, dateTo]
      },
      productId: products
    },
    order: [
      ['createdAt', 'DESC']
    ],
    limit: limitPerSite,
    offset: limitPerSite * (siteNumber - 1)
  }).then(result => {
    reports = result;
    Report.count({
      where: {
        createdAt: {
          [Op.between]:[dateFrom, dateTo]
        },
        productId: products
      },
    }).then(result=>{
      res.status(200).json({
        message: 'success',
        content: {
          reports: reports,
          count: result
        }
      })
    }).catch()
  }).catch(error => {
    res.status(500).json({
      message: 'error',
      content: error
    })
  })
}

exports.editReport = (req,res,next) => {
  const report = req.body.report;
  const reportItems = req.body.reportItems;
  console.log(req.userData);

  Report.update({
    userId: req.userData.userId,
    warehouseId: req.body.report.source,
    sampleTakerId: req.body.report.sampleTaker.id,
    description: req.body.report.description,
    productId: req.body.report.product.id
  }, {
    where: { id: report.id}
  }).then(result => {
    for(let reportItem of reportItems) {
      ReportItem.update({
        value: reportItem.value
      }, {
        where: {id:reportItem.id}
      }).then()
    }

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
