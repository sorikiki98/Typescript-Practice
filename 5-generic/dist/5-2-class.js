var SimpleEither = /** @class */ (function () {
    function SimpleEither(leftValue, rightValue) {
        this.leftValue = leftValue;
        this.rightValue = rightValue;
    }
    SimpleEither.prototype.left = function () {
        return this.leftValue;
    };
    SimpleEither.prototype.right = function () {
        return this.rightValue;
    };
    return SimpleEither;
}());
var either = new SimpleEither(4, 5);
either.left(); // 4
either.right(); //5
var best = new SimpleEither({ name: 'ellie' }, 'hello');
