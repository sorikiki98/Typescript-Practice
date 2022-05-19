import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import helmet from '../node_modules/helmet/dist/types/index';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());



app.use((req, res, next) => {
	res.sendStatus(404);
});

app.listen(8080, () => {
    console.log('STARTED!');
})
