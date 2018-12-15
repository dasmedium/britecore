var express = require("express");
var router = express.Router();
const { sql, main } = require("../dbconfig/database");

router.get("/", async function(req, res, next) {
  const sqlReq = await main();
  try {
    let customerData = await sqlReq.execute("select * from customers");
    return res.send(customerData);
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
