export default function errorHandler(error, req, res, next) {
  if (error.type === 'unprocessableEntity') {
    return res.status(422).send(error.message);
  }
  console.log(error);
  return res
    .status(500)
    .send('Ocorreu um erro! Não se preocupe, não é culpa sua.');
}
