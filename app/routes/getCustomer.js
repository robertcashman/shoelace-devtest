var dbHelper = require('../helper/dbhelper');

module.exports = app => {
  app.get('/customer/:id', (req, res) => {
    const id = req.params.id;
    const customer = dbHelper.get(id);
    if(customer.length === 0) {
      res.status(404).send("Id provided not found");
    } else {
      res.send(customer);
  }
  });
};
