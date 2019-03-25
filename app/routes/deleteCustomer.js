var dbHelper = require('../helper/dbhelper');

module.exports = app => {
  app.delete('/customer/delete/:id', (req, res) => {
    const id = req.params.id;
    const customer = dbHelper.get(id);
    if(customer.length === 0) {
      res.status(404).send("ID provided not found");
    } else {
      dbHelper.delete(id);
      res.send("Customer deleted successfully!");
  }
  });
};
