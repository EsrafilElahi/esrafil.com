const handleErrors = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;
  const errorData = err.data;

  return res.status(status).json({ "error data :": errorData, "error message :": message });
};

module.exports = handleErrors;