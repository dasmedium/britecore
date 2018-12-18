var express = require("express");
var router = express.Router();
const { sql, main, pool } = require("../dbconfig/database");
const validateFormInput = require("../validation/customer");

//Get All
router.get("/", async function(req, res, next) {
  const sqlReq = await pool();
  try {
    let customerData = await sqlReq.execute("select * from customers");
    return res.send(customerData);
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
