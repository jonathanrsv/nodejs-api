import express from  'express';
import config from './config/config';
import datasource from './config/datasource'

import booksRouter from './routes/books';

const app = express();

app.set('port', 4000);
app.config = config;
app.datasource = datasource(app);

booksRouter(app);

export default app;
