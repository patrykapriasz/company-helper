const User = require('../models/user');
const Role = require('../models/role');

exports.addUser = (req,res,next) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const login = firstname+lastname;
  const role = req.body.role;

  User.create({
    firstname: firstname,
    lastname: lastname,
    login: login,
    roleId: role
  })
  .then(result => {
    res.status(201).json({
      message: "Success",
      content: result
    });
  })
  .catch(error=>{
    console.log(error);
  });
};

exports.AddRole = (req,res,next) => {
  console.log("restapi add role method");
  console.log(req.body);
  const name = req.body.name;
  Role.create({
    name: name
  }).then(result => {
    console.log(result);
  }).catch(error => {
    console.log(error);
  });
}

exports.checkStatus = (req,res,next) => {
  console.log("OK");
}
