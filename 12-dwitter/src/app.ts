import express, { Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import TweetRouter from './routes/tweets.js';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use('/tweets', TweetRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
	res.sendStatus(404);
});

app.listen(8080, () => {
	console.log('STARTED!');
});
