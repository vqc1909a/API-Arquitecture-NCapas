module.exports = (err, req, res, next) => {
  const httpStatus = err.status || 500;

  return res.status(httpStatus).send({
    status: httpStatus,
    message: err.message || 'Internal Server Error'
  })
};
//Este error lo atrapas, con el .catch(err => next(err)) ejecutado en algún middleware anterior