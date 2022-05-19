var FullTimeEmployee = /** @class */ (function () {
    function FullTimeEmployee() {
    }
    FullTimeEmployee.prototype.pay = function () {
        console.log("full time!!");
    };
    FullTimeEmployee.prototype.workFullTime = function () { };
    return FullTimeEmployee;
}());
var PartTimeEmployee = /** @class */ (function () {
    function PartTimeEmployee() {
    }
    PartTimeEmployee.prototype.pay = function () {
        console.log("part time!!");
    };
    PartTimeEmployee.prototype.workPartTime = function () { };
    return PartTimeEmployee;
}());
// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee) {
    employee.pay();
    return employee;
}
function pay(employee) {
    employee.pay();
    return employee;
}
var ellie = new FullTimeEmployee();
var bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();
var ellieAfterPay = pay(ellie);
var bobAfterPay = pay(bob);
// 예제 2
var obj = {
    name: 'ellie',
    age: 20
};
var obj2 = {
    animal: '🐕'
};
console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐕
function getValue(obj, key) {
    return obj[key];
}
console.log("========");
var key = "name";
var key2 = "age";
// const key3: Key = "dasol" => error
