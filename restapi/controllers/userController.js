const User = require('../models/user');
const Role = require('../models/role');

exports.getAllUsers = (req,res,next) => {
  User.findAll({
    include:[
      { model: Role, attributes:['name']}
    ]
  })
    .then(result => {
      res.status(200).json({
        message: 'success',
        content: result
      });
    })
    .catch(error => console.log(error));
};


