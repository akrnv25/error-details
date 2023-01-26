const BaseError = require('../models/BaseError');

const errorHandler = (err, req, res, next) => {
  const error = new BaseError({ origin: err });
  const { message, code, name, detailsStack } = error;
  console.log(message);
  console.log(code);
  console.log(name);
  console.log(detailsStack);
  res.status(400).json({ success: false, error: { code, message } });
};

module.exports = errorHandler;
