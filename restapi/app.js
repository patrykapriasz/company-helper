const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./dbcontext/database');
const User = require('./models/user');
const Role = require('./models/role');
const Status = require('./models/status');
const Department = require('./models/department');
const Task = require('./models/task');
const Report = require('./models/report');
const ReportItem = require('./models/report-item');
const SampleSource = require('./models/sampleSource');
const Product = require('./models/product');
const ProductGroup = require('./models/productGroups');

const adminRoute = require('./routes/admin.route');
const roleRoute = require('./routes/role.route');
const userRoute = require('./routes/user.route');
const loginRoute = require('./routes/login.route');
const departmentRoute = require('./routes/department.route');
const productRoute = require('./routes/product.route');


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
//Role.hasMany(User);
Department.hasMany(Task);
Status.hasMany(Task);
Report.hasMany(ReportItem);
User.hasMany(Report);
SampleSource.hasMany(Report);
Product.belongsTo(ProductGroup);
Report.belongsTo(User);
Report.belongsTo(User, {as: 'deliver'})

app.use(adminRoute);
app.use(roleRoute);
app.use(userRoute);
app.use(loginRoute);
app.use(productRoute);

sequelize.sync({force: true}).then().catch(error => {
  console.log(error);
});

module.exports = app;
