const Report = require('../models/report');


exports.addReport = (req,res,next) => {
  console.log(req.body);
  Report.create({

  }).then().catch()
};
