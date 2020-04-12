const Department = require('../models/department');

exports.getAllDepartments = (req,res,next) => {
  Department.findAll()
    .then(result => {
      res.status(200).json({
        message: 'success',
        content: result
      });
    })
    .catch(error => {
      console.log(error)
    });
};
