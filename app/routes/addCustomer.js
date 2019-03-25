var dbHelper = require('../helper/dbhelper');

module.exports = app => {
  app.post('/customer/add', (req, res) => {
    const customerId = req.body.customerId;
    const name = req.body.name;
    const templatedId = req.body.templatedId;
    const startDate = req.body.startDate;
    const repeat = req.body.repeat;

    const customer = dbHelper.add(customerId,name,templatedId,startDate,repeat);
    if(customer == false) {
      res.status(404).send("Customer failed to add...");
    } else {
      res.send("Customer added successfully!");
  }
  });
};
