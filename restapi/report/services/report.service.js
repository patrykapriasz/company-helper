const Report = require('../../models/report');
const { getFilteredReports } = require('../../controllers/reportController');

exports.addReport = (report)=> {
  return Report.create({
    userId: report.userId ?? null,
    productId: report.productId ?? null,
    description: report.description ?? null,
  })
}
