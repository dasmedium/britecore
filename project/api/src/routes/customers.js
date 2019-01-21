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
    transactions.sort((a, b) => {
      return b.Date - a.Date;
    });
    // transactions.map(transaction => {
    //   moment(transaction.Date, moment.ISO_8601).format('MMM Do YYYY');
    // })
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
router.get("/filtered", async function(req, res, next) {
  const { offset, limit } = req.query;
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
    transactions.sort((a, b) => {
      return b.Date - a.Date;
    });

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
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const addDescription = `UPDATE customers SET Description = '${Description}' WHERE id = '${id}';`;
  const getRecord = `SELECT * from customers WHERE id = '${id}';`;
  const sqlReq = await pool();
  await sqlReq.query(addDescription);
  const gotRec = await sqlReq.query(getRecord);

  try {
    let recArr = gotRec[0];
    let transaction = recArr[Object.keys(recArr)[0]];
    return res.send(transaction);
  } catch (err) {
    return res.status(400).json(err);
  }
});

// Get By Id
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const getRecord = `SELECT * from customers WHERE id = '${id}';`;
  const sqlReq = await pool();
  const gotRec = await sqlReq.query(getRecord);
  try {
    let recArr = gotRec[0];
    let transaction = recArr[Object.keys(recArr)[0]];

    return res.send(transaction);
  } catch (err) {
    return res.status(400).json(err);
  }
});
module.exports = router;
