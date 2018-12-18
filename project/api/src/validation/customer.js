const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateFormInput(data) {
  let errors = {};
  // data.Name = !isEmpty(data.Name) ? data.Name : "";
  data.Description = !isEmpty(data.Description) ? data.Description : "";
  // data.Date = !isEmpty(data.Date) ? data.Date : "";
  // data.Amount = !isEmpty(data.Amount) ? data.Amount : "";

  // Name
  // const nameRegEx = /[a-zA-Z]+('[a-zA-Z])?[a-zA-Z]*/;
  // if (!Validator.isLength(data.Name, { min: 2, max: 50 })) {
  //   errors.Name = "Name must be between 2 and 50 characters";
  // }
  // if (!nameRegEx.test(data.Name)) {
  //   errors.Name = "Invalid characters in Name";
  // }
  // if (Validator.isEmpty(data.Name)) {
  //   errors.Name = "Name is required";
  // }

  // Description
  if (Validator.isEmpty(data.Description)) {
    errors.Description = "Description field is required";
  }

  if (!Validator.isLength(data.Description, { min: 5, max: 75 })) {
    errors.Description = "Invalid number of characters in description";
  }

  // Date
  // if (Validator.isEmpty(data.Date)) {
  //   errors.Date = "Date field is required";
  // }
  // if (!Validator.isISO8601(data.Date)) {
  //   errors.Date = "Invalid date format";
  // }

  // Amount

  // if (Validator.isEmpty(data.Amount)) {
  //   errors.Amount = "Amount field is required";
  // }
  // if (!Validator.isCurrency(data.Amount)) {
  //   errors.Amount = "Invalid number format";
  // }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
