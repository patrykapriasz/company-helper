const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./dbcontext/database');
const User = require('./models/user');
const Role = require('./models/role');
const Status = require('./models/status');
const Department = require('./models/department');
const Task = require('./models/task');

const adminRoute = require('./routes/admin.route');
const roleRoute = require('./routes/role.route');
const userRoute = require('./routes/user.route');
const loginRoute = require('./routes/login.route');
const departmentRoute = require('./routes/department.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

User.belongsTo(Role);
Role.hasMany(User);
Department.hasMany(Task);
Status.hasMany(Task);
User.belongs

app.use(adminRoute);
app.use(roleRoute);
app.use(userRoute);
app.use(loginRoute);

sequelize.sync().then().catch(error => {
  console.log(error);
});

module.exports = app;
