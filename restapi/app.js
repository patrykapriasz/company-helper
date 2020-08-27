const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./dbcontext/database');
const User = require('./models/user');
const Role = require('./models/role');
const Status = require('./models/status');
const Department = require('./models/department');
const Task = require('./models/task');
const Report = require('./models/report');
const ReportItem = require('./models/report-item');
const Warehouse = require('./models/warehouse');
const Product = require('./models/product');
const ProductGroup = require('./models/productGroups');
const ProductParameter = require('./models/productParameters');
const Supplier = require('./models/warehouse/supplier');
const Delivery = require('./models/warehouse/delivery');
const SupplierHasProduct = require('./models/warehouse/supplier_has_product');
const DeliveryHasReport = require('./models/warehouse/delivery_has_report');

const adminRoute = require('./routes/admin.route');
const roleRoute = require('./routes/role.route');
const userRoute = require('./routes/user.route');
const loginRoute = require('./routes/login.route');
const departmentRoute = require('./routes/department.route');
const productRoute = require('./routes/product.route');
const warehouseRoute = require('./routes/warehouse.route');
const productParameterRoute = require('./routes/productParameter.route');
const reportRoute = require('./routes/report.route');
const supplierRoute = require('./routes/supplier.route');
const deliveryRoute = require('./routes/delivery.route');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use(cors());

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*")
  //res.setHeader("Access-Control-Allow-Origin",req.headers.origin);
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

User.belongsTo(Role);
Role.hasMany(User);

Department.hasMany(Task);
Status.hasMany(Task);

Report.hasMany(ReportItem);
ReportItem.belongsTo(Report);

User.hasMany(Report);
Warehouse.hasMany(Report);
Report.belongsTo(Warehouse);
Product.belongsTo(ProductGroup);
ProductGroup.hasOne(Product, {
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE'
});
Report.belongsTo(User);
User.hasOne(Report);
Report.belongsTo(User, {as: 'sampleTaker'});
Warehouse.belongsTo(Product);
Product.hasOne(Warehouse);
Product.hasOne(ProductParameter);
ReportItem.belongsTo(ProductParameter);
Product.hasOne(Report);
Report.belongsTo(Product);

Delivery.belongsTo(Product);
Product.hasMany(Delivery);
Delivery.belongsTo(Report);
Report.hasOne(Delivery);
Delivery.belongsTo(Supplier);
Supplier.hasMany(Delivery);

SupplierHasProduct.belongsTo(Supplier);
Supplier.hasMany(SupplierHasProduct);
SupplierHasProduct.belongsTo(Product);
Product.hasMany(SupplierHasProduct);

app.use(adminRoute);
app.use(roleRoute);
app.use(userRoute);
app.use(loginRoute);
app.use(productRoute);
app.use(warehouseRoute);
app.use(productParameterRoute);
app.use(reportRoute);
app.use(supplierRoute);
app.use(deliveryRoute);

sequelize.sync().then(result => {

}).catch(error => {
  console.log(error);
});

module.exports = app;
