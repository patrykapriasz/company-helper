const User = require('../models/user');
const Role = require('../models/role');
const authChecker = require('../auth-checker');
const bcrypt = require('bcrypt');

exports.addUser = (req,res,next) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const login = firstname+lastname;
  const role = req.body.role;

  bcrypt.hash(req.body.password,10)
    .then(hash => {
      User.create({
        firstname: firstname,
        lastname: lastname,
        login: login,
        roleId: role,
        password: hash,
      }).then(result => {
        res.status(201).json({
          message: "Success",
          content: result
        })
      }).catch(error=>{
        res.status(500).json({
          message: 'error',
          content: error
        })
      });
    })

  // User.create({
  //   firstname: firstname,
  //   lastname: lastname,
  //   login: login,
  //   roleId: role,
  //   password: password,
  // })
  // .then(result => {
  //   res.status(201).json({
  //     message: "Success",
  //     content: result
  //   });
  // })
  // .catch(error=>{
  //   console.log(error);
  // });
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
