var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var CoffeeMachine_1 = /** @class */ (function () {
        function CoffeeMachine(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        CoffeeMachine.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        };
        CoffeeMachine.prototype.clean = function () {
            console.log('cleaning the machine...🧼');
        };
        CoffeeMachine.prototype.grindBeans = function (shots) {
            console.log("grinding beans for " + shots);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        };
        CoffeeMachine.prototype.preheat = function () {
            console.log('heating up... 🔥');
        };
        CoffeeMachine.prototype.makeCoffee = function (shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7; // class level
        return CoffeeMachine;
    }());
    var CaffeLatteMachine = /** @class */ (function (_super) {
        __extends(CaffeLatteMachine, _super);
        function CaffeLatteMachine(beans, serialNumber) {
            var _this = _super.call(this, beans) || this;
            _this.serialNumber = serialNumber;
            return _this;
        }
        CaffeLatteMachine.prototype.steamMilk = function () {
            console.log('Steaming some milk... 🥛');
        };
        CaffeLatteMachine.prototype.extract = function (shots) {
            this.steamMilk();
            return {
                shots: shots,
                hasMilk: true
            };
        };
        return CaffeLatteMachine;
    }(CoffeeMachine_1));
    var SweetCoffeeMaker = /** @class */ (function (_super) {
        __extends(SweetCoffeeMaker, _super);
        function SweetCoffeeMaker() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SweetCoffeeMaker.prototype.extract = function (shots) {
            return {
                shots: shots,
                hasSugar: true
            };
        };
        return SweetCoffeeMaker;
    }(CoffeeMachine_1));
    var machines = [
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ];
    machines.forEach(function (machine) {
        console.log('-------------------------');
        machine.makeCoffee(1);
    });
}
