var Dog = /** @class */ (function () {
    function Dog() {
        this.isDog = true;
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
        this.isCat = false;
    }
    return Cat;
}());
var animals = [new Dog(), new Dog(), new Dog()];
// 🤔 type predicates
// Type predicates are a special return type that signals to the Typescript compiler what type a particular value is.
// Type predicates are always attached to a function that takes a single argument and returns a boolean. 
// Type predicates are expressed as argumentName is Type .
var isDog = function (animal) {
    return animal.isDog !== undefined;
};
// 이전에 Javascript에서 배운 배열의 every api 참고. (오버로딩)
var result = animals.every(isDog);
console.log(result);
