import express from 'express';

import * as TweetController from '../controller/tweets.js';

const router = express.Router();

router.get('/', TweetController.getTweets);

export default router;
