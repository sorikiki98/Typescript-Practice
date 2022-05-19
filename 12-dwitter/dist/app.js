import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import TweetRouter from './routes/tweets.js';
const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use('/tweets', TweetRouter);
app.use((req, res, next) => {
    res.sendStatus(404);
});
app.listen(8080, () => {
    console.log('STARTED!');
});
//# sourceMappingURL=app.js.map