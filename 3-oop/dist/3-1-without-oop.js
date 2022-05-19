{
    var BEANS_GRAMM_PER_SHOT_1 = 7;
    var coffeeBeans_1 = 0;
    function makeCoffee(shots) {
        if (coffeeBeans_1 < shots * BEANS_GRAMM_PER_SHOT_1) {
            throw new Error('Not enough coffee beans!');
        }
        coffeeBeans_1 -= shots * BEANS_GRAMM_PER_SHOT_1;
        return {
            shots: shots,
            hasMilk: false
        };
    }
    coffeeBeans_1 += 3 * BEANS_GRAMM_PER_SHOT_1;
    var coffee = makeCoffee(2);
    console.log(coffee);
}
