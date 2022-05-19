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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var CheapMilkSteamer = /** @class */ (function () {
        function CheapMilkSteamer() {
        }
        CheapMilkSteamer.prototype.makeMilk = function (cup) {
            console.log('Steaming some cheap milk... 🥛');
            return __assign(__assign({}, cup), { hasMilk: true });
        };
        return CheapMilkSteamer;
    }());
    var FancyMilkSteamer = /** @class */ (function () {
        function FancyMilkSteamer() {
        }
        FancyMilkSteamer.prototype.makeMilk = function (cup) {
            console.log('Steaming some fancy milk... 🥛');
            return __assign(__assign({}, cup), { hasMilk: true });
        };
        return FancyMilkSteamer;
    }());
    var CandySugarMixer = /** @class */ (function () {
        function CandySugarMixer() {
        }
        CandySugarMixer.prototype.addSugar = function (cup) {
            console.log('Adding some candy sugar 🍭');
            return __assign(__assign({}, cup), { hasSugar: true });
        };
        return CandySugarMixer;
    }());
    var SugarMixer = /** @class */ (function () {
        function SugarMixer() {
        }
        SugarMixer.prototype.addSugar = function (cup) {
            console.log('Adding some jar sugar 🧂');
            return __assign(__assign({}, cup), { hasSugar: true });
        };
        return SugarMixer;
    }());
    var CoffeeMachine_1 = /** @class */ (function () {
        function CoffeeMachine(coffeeBeans) {
            this.coffeeBeans = coffeeBeans;
            this.coffeeBeans = coffeeBeans;
        }
        // factory method pattern: 1. 오브젝트의 생성 주기 효율적 관리 2. 인스턴스를 만드는 로직 캡슐화
        CoffeeMachine.makeMachine = function (coffeeBeans) {
            return new CoffeeMachine(coffeeBeans);
        };
        CoffeeMachine.prototype.fillBeans = function (beans) {
            if (beans < 0) {
                throw Error('value for beans invalid.');
            }
            this.coffeeBeans += beans;
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
        CoffeeMachine.prototype.extract = function (shots) {
            console.log("Pulling " + shots + " shots... \u2615\uFE0F");
            return {
                shots: shots
            };
        };
        CoffeeMachine.prototype.makeCoffees = function (shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        };
        CoffeeMachine.prototype.clean = function () {
            console.log('cleaning the machine...🧼');
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7;
        return CoffeeMachine;
    }());
    var CaffeLatteMachine = /** @class */ (function (_super) {
        __extends(CaffeLatteMachine, _super);
        function CaffeLatteMachine(coffeeBeans, serialNumber, milkSteamer) {
            var _this = _super.call(this, coffeeBeans) || this;
            _this.serialNumber = serialNumber;
            _this.milkSteamer = milkSteamer;
            return _this;
        }
        CaffeLatteMachine.prototype.makeCoffees = function (shots) {
            var coffee = _super.prototype.makeCoffees.call(this, shots);
            return this.milkSteamer.makeMilk(coffee);
        };
        return CaffeLatteMachine;
    }(CoffeeMachine_1));
    var SweetCoffeeMaker = /** @class */ (function (_super) {
        __extends(SweetCoffeeMaker, _super);
        function SweetCoffeeMaker(coffeeBeans, candyMixer) {
            var _this = _super.call(this, coffeeBeans) || this;
            _this.candyMixer = candyMixer;
            return _this;
        }
        SweetCoffeeMaker.prototype.makeCoffees = function (shots) {
            var coffee = _super.prototype.makeCoffees.call(this, shots);
            return this.candyMixer.addSugar(coffee);
        };
        return SweetCoffeeMaker;
    }(CoffeeMachine_1));
    var SweetCaffeLatteMachine = /** @class */ (function (_super) {
        __extends(SweetCaffeLatteMachine, _super);
        function SweetCaffeLatteMachine(coffeeBeans, milkSteamer, candyMixer) {
            var _this = _super.call(this, coffeeBeans) || this;
            _this.milkSteamer = milkSteamer;
            _this.candyMixer = candyMixer;
            return _this;
        }
        SweetCaffeLatteMachine.prototype.makeCoffees = function (shots) {
            var coffee = _super.prototype.makeCoffees.call(this, shots);
            var milkAdded = this.milkSteamer.makeMilk(coffee);
            return this.candyMixer.addSugar(milkAdded);
        };
        return SweetCaffeLatteMachine;
    }(CoffeeMachine_1));
    var machine = new SweetCaffeLatteMachine(32, new FancyMilkSteamer(), new SugarMixer());
    machine.makeCoffees(2);
}
