const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./dbcontext/database');
const User = require('./models/user');
const Role = require('./models/role');

const adminRoute = require('./routes/admin.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

Role.hasMany(User);

app.use(adminRoute);

sequelize.sync().then().catch();

module.exports = app;
