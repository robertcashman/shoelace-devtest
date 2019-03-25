var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var getCustomer = require('./app/routes/getCustomer');
var addCustomer = require('./app/routes/addCustomer');
var deleteCustomer = require('./app/routes/deleteCustomer');

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app port
var port = 8080;

//connect all routes
getCustomer(app);
addCustomer(app);
deleteCustomer(app);

//start app
app.listen(port);
console.log('App has started on port ' + port);
