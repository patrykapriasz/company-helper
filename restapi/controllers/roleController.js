const Role = require('../models/role');

exports.getAllRoles = (req,res,next) => {
  Role.findAll().then(result => {
    res.status(200).json(
      {
        message: 'success',
        roles: result
      });
  }).catch(error => {
    console.log(error);
  });
};

exports.getRoleById = (req,res,next) => {
  Role.findByPk(req.params.id).then(result =>{
    res.status(200).json({
      message: "success",
      content: result
    })
  }
  )
};

exports.addRole = (req,res,next) => {
  console.log("method add role");
  console.log(req.body);
  Role.create({
    name: req.body.name
  })
    .then(result=>{
      console.log(result);
    })
    .catch(error=>{console.log(error)});
};
