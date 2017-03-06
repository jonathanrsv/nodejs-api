import BooksController from '../controllers/books';

const books = (app) => {
  const booksController = new BooksController(app.datasource.models.Books);

  app.route('/books')
    .get((req, res) => {
      booksController.getAll()
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        })
    })
}

export default books;
