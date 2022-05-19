import { Request, Response, NextFunction} from 'express';
import * as TweetRepository from '../data/tweets.js'

export async function getTweets(req: Request, res: Response, next: NextFunction): Promise<void> {
    const tweets = await TweetRepository.getTweets();
    res.status(200).json(tweets);
}