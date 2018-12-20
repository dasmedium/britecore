var express = require("express");
var router = express.Router();
const { sql, main, pool } = require("../dbconfig/database");
const validateFormInput = require("../validation/customer");

//Get All
router.get("/", async function(req, res, next) {
  const sqlReq = await pool();
  try {
    let customerData = await sqlReq.execute("select * from customers");
    let transactionCount = customerData[0].length;
    let transactions = customerData[0];
    let response = {
      transactions,
      transactionCount
    };
    return res.status(200).send(response);
  } catch (err) {
    return res.status(400).json(err);
  }
});
// Get with Filters
router.get("/:offset/:limit", async function(req, res, next) {
  const { offset, limit } = req.params;
  const sqlReq = await pool();
  try {
    let customerData = await sqlReq.execute(
      `SELECT * from customers LIMIT ${offset}, ${limit}`
    );
    let totalCounts = await sqlReq.execute(`SELECT COUNT(*) FROM customers`);

    let countArr = totalCounts[0];
    let countObj = countArr[Object.keys(countArr)[0]];
    let transactionCount = countObj[Object.keys(countObj)[0]];

    let transactions = customerData[0];
    let response = {
      transactions,
      transactionCount
    };
    return res.status(200).send(response);
  } catch (err) {
    return res.status(400).json(err);
  }
});
// Update Description by Id
router.post("/:id", async (req, res, next) => {
  const { Description } = req.body;
  const { id } = req.params;
  const { errors, isValid } = validateFormInput(req.body);
  const addDescription = `UPDATE customers SET Description = '${Description}' WHERE id = '${id}';`;
  const getRecord = `SELECT * from customers WHERE id = '${id}';`;
  const sqlReq = await pool();
  let addedDesc = await sqlReq.query(addDescription);
  const gotRec = await sqlReq.query(getRecord);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    return res.send(gotRec);
  } catch (err) {
    return res.status(400).json(err);
  }
});
module.exports = router;
