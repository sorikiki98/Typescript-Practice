var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const tweets = [
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
export function getTweets() {
    return __awaiter(this, void 0, void 0, function* () {
        return tweets;
    });
}
//# sourceMappingURL=tweets.js.map