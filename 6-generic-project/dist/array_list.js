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
    var ListImpl = /** @class */ (function () {
        function ListImpl() {
            this._size = 0;
            this.MAX_LENGTH = 5;
            this.array = new Array();
            this.INDEX_OUT_OF_RANGE = {
                state: 'fail',
                reason: 'index out of range'
            };
            this.FULL_LIST = {
                state: 'fail',
                reason: 'already full list'
            };
            this.EMPTY_LIST = {
                state: 'fail',
                reason: 'empty list'
            };
            this.INVALID_VALUE = {
                state: 'fail',
                reason: 'invalid value'
            };
        }
        Object.defineProperty(ListImpl.prototype, "RESULT_ARRAY", {
            get: function () {
                return {
                    state: 'success',
                    array: this.array
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListImpl.prototype, "size", {
            get: function () {
                return this._size;
            },
            enumerable: false,
            configurable: true
        });
        ListImpl.prototype.isEmpty = function () {
            if (this._size === 0)
                return true;
            else
                return false;
        };
        ListImpl.prototype.isFull = function () {
            if (this._size === this.MAX_LENGTH)
                return true;
            return false;
        };
        ListImpl.prototype.add = function (item, index) {
            if (this.isFull()) {
                return this.FULL_LIST;
            }
            if (index < 0 || index > this.size) {
                return this.INDEX_OUT_OF_RANGE;
            }
            for (var j = this.size; j > index; j--) {
                this.array[j] = this.array[j - 1];
            }
            this.array[index] = item;
            this._size++;
            return this.RESULT_ARRAY;
        };
        ListImpl.prototype.remove = function (index) {
            if (this.isEmpty()) {
                return this.EMPTY_LIST;
            }
            if (index < 0 || index >= this.size) {
                return this.INDEX_OUT_OF_RANGE;
            }
            for (var j = index; j < this.size; j++) {
                this.array[j] = this.array[j + 1];
            }
            this._size--;
            return this.RESULT_ARRAY;
        };
        ListImpl.prototype.removeAll = function () {
            this.array = new Array();
            this._size = 0;
        };
        ListImpl.prototype.get = function (index) {
            if (this.isEmpty()) {
                return this.EMPTY_LIST;
            }
            if (index < 0 || index >= this.size) {
                return this.INDEX_OUT_OF_RANGE;
            }
            return __assign(__assign({}, this.RESULT_ARRAY), { element: this.array[index] });
        };
        ListImpl.prototype.find = function (item) {
            if (this.isEmpty()) {
                return this.EMPTY_LIST;
            }
            for (var j = 0; j < this._size; j++) {
                if (this.array[j] === item) {
                    return __assign(__assign({}, this.RESULT_ARRAY), { index: j });
                }
            }
            return this.INVALID_VALUE;
        };
        return ListImpl;
    }());
    var list = new ListImpl();
    var fruits = [['Apple', 0], ['Banana', 1], ['Orange', 2], ['Peach', 1]];
    for (var i = 0; i < fruits.length; i++) {
        var _a = fruits[i], name = _a[0], index = _a[1];
        var result = list.add(name, index);
        if (result.state == "success") {
            console.log(result.array);
        }
        else {
            console.log(result.reason);
        }
    }
    var result2 = list.remove(4);
    if (result2.state == "success") {
        console.log(result2.array);
    }
    else {
        console.log(result2.reason);
    }
    var result3 = list.get(3);
    if (result3.state == "success") {
        console.log(result3.element);
    }
    else {
        console.log(result3.reason);
    }
    var result4 = list.find('Peach');
    if (result4.state == "success") {
        console.log(result4.index);
    }
    else {
        console.log(result4.reason);
    }
}
