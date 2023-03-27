import bodyParser from 'body-parser';
import express from 'express';

import todoRoutes from './routes/todo';

const app = express();

app.use(bodyParser.json());

app.use(todoRoutes);

app.listen(3000);

