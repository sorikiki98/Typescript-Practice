// type vs interface
// 결론: 규격을 정의하고 이에 대해 구현을 해야한다면 interface를 사용하고
// 여러 타입의 데이터를 하나의 타입으로 정의해야 한다면 type 
{
    // object ★
    var obj1 = {
        x: 1,
        y: 1
    };
    var obj2 = {
        x: 1,
        y: 1,
        z: 1
    };
    // class ★
    var Pos1 = /** @class */ (function () {
        function Pos1() {
        }
        return Pos1;
    }());
    var Pos2 = /** @class */ (function () {
        function Pos2() {
        }
        return Pos2;
    }());
}
