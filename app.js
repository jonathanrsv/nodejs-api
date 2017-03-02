import express from  'express';
import config from './config/config';
import datasource from './config/datasource'

const app = express();

app.set('port', 4000);
app.config = config;
app.datasource = datasource(app);

export default app;