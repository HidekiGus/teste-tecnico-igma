export default function errorHandler(error, req, res, next) {
  if (error.type === 'unprocessableEntity') {
    return res.status(422).send(error.message);
  } else if (error.type === 'notFound') {
    return res.status(404).send(error.message);
  }
  return res
    .status(500)
    .send('Ocorreu um erro! Não se preocupe, não é culpa sua.');
}
