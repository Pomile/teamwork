import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { cloudinaryConfig } from './backend/config/cloudinaryConfig';
import userRouter from './backend/routes/user';
import gifRouter from './backend/routes/gif';
import articleRouter from './backend/routes/article';
import feedRouter from './backend/routes/feed';
import imgRouter from './backend/routes/upload';

const app = express();
const port = parseInt(process.env.PORT, 10) || 2020;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use('*', cloudinaryConfig);

app.use('/api/v1', userRouter);
app.use('/api/v1', gifRouter);
app.use('/api/v1', articleRouter);
app.use('/api/v1', feedRouter);
app.use('/api/v1', imgRouter);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to teamwork-app, a place where beautiful things can be achieved through collaboration',
}));


app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
