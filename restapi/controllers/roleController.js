const Role = require('../models/role');

exports.getAllRoles = (req,res,next) => {
  Role.findAll().then().catch(error => {
    console.log(error);
  });
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
