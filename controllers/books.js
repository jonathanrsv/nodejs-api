import HttpStatus from 'http-status';

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);


class BooksController {
  constructor(Books) {
    this.Books = Books;
  }
  getAll() {
    return this.Books.findAll({})
    .then(result => defaultResponse(result))
    .catch(error => errorResponse(error.message));
  }
}
export default BooksController;
