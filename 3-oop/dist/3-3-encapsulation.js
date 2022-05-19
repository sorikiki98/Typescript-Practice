{
    // public
    // private
    // protected
    var CoffeeMaker_1 = /** @class */ (function () {
        function CoffeeMaker(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        // factory method pattern: 1. 오브젝트의 생성 주기 효율적 관리 2. 인스턴스를 만드는 로직 캡슐화
        CoffeeMaker.makeMachine = function (coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
        };
        CoffeeMaker.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        };
        CoffeeMaker.prototype.makeCoffee = function (shots) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false
            };
        };
        CoffeeMaker.BEANS_GRAMM_PER_SHOT = 7; // class level
        return CoffeeMaker;
    }());
    var maker = CoffeeMaker_1.makeMachine(32);
    maker.fillCoffeeBeans(32);
    var User = /** @class */ (function () {
        function User(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.internalAge = 4;
        }
        Object.defineProperty(User.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(User.prototype, "age", {
            get: function () {
                return this.internalAge;
            },
            set: function (num) {
                if (num < 0) {
                }
                this.internalAge = num;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var user = new User('Steve', 'Jobs');
    user.age = 6;
    console.log(user.fullName);
}
