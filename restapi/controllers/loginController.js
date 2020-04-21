const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = (req,res,next) => {
  let fetchedUser;
  User.findAll({
    where: {
      login: req.body.login
    }
  }).then(user=> {
    if(!user) {
      return res.status(401).json({
        message: 'Auth failed 1'
      })
    }
    fetchedUser = user[0];
    return bcrypt.compare(req.body.password, user[0].password)
  }).then(result => {
    if(!result) {
      return res.status(401).json({
        message: 'Auth failed 2'
      })
    }
    const token = jwt.sign({login: fetchedUser.login, userId: fetchedUser.id},process.env.JWT_KEY, {expiresIn:"1h"});
    res.status(200).json(
      {
        token: token,
        expiresIn: 3600
      });
  }).catch(error => {
    return res.status(401).json({
      message: 'Auth failed 3',
      content: error
    })
  })
};
