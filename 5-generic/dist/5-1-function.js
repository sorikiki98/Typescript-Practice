{
    function checkNotNullBad(arg) {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    function checkNotNullAnyBad(arg) {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    var result = checkNotNullAnyBad("123");
    // result.length에 접근할 수 없음
    function checkNotNull(arg) {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    var number = checkNotNull(123);
    var boal = checkNotNull(true);
}
