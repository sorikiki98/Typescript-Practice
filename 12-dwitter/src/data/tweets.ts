type Tweet = {
	id: string;
	createdAt: Date;
	text: string;
	userId: string;
	username: string;
	name: string;
	url: string;
};

const tweets: Tweet[] = [
	{
		id: '1',
		createdAt: new Date(),
		text: 'hello world!',
		userId: 'sorikiki98',
		username: 'dasol',
		name: 'Dasol Kim',
		url: '',
	},
	{
		id: '2',
		createdAt: new Date(),
		text: 'hi~',
		userId: 'yekim0626',
		username: 'pendong',
		name: 'Yesol Kim',
		url: '',
	},
];

export async function getTweets(): Promise<Tweet[]> {
	return tweets;
}
