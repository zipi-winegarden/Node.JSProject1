import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import UsersRouter from './Routers/UsersRouter.js';
import LinksRouter from './Routers/LinksRouter.js';
import RedirectRouter from './Routers/RedirectRouter.js';
import StatsRouter from './Routers/StatsRouter.js';
import connectDB from './database.js';

connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

console.log('Hi, app is running😏!!');


app.use('/users', UsersRouter);
app.use('/links', LinksRouter);
app.use('/stats', StatsRouter);
app.use('/', RedirectRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}`);
});
