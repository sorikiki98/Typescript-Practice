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
    var SortedListImpl = /** @class */ (function () {
        function SortedListImpl() {
            this.INDEX_OUT_OF_RANGE = {
                state: 'fail',
                reason: 'index out of range'
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
        Object.defineProperty(SortedListImpl.prototype, "result", {
            get: function () {
                var curr = this.head;
                var result = '';
                while (curr != undefined) {
                    result += curr.item + ' ';
                    curr = curr.next;
                }
                return result;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SortedListImpl.prototype, "RESULT_STRING", {
            get: function () {
                return {
                    state: 'success',
                    result: this.result
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SortedListImpl.prototype, "size", {
            get: function () {
                var curr = this.head;
                var count = 0;
                while (curr != undefined) {
                    curr = curr.next;
                    count += 1;
                }
                return count;
            },
            enumerable: false,
            configurable: true
        });
        SortedListImpl.prototype.isEmpty = function () {
            if (this.size === 0)
                return true;
            return false;
        };
        SortedListImpl.prototype.add = function (item) {
            var prev;
            var curr = this.head;
            if (curr == undefined) {
                this.head = { item: item };
            }
            else {
                while (curr != undefined && this.compareTo(curr.item, item) < 0) {
                    prev = curr;
                    curr = curr.next;
                }
                if (prev == undefined) {
                    var node = { item: item, next: this.head };
                    this.head = node;
                }
                else {
                    var node = { item: item, next: curr };
                    prev.next = node;
                }
            }
            return this.RESULT_STRING;
        };
        SortedListImpl.prototype.remove = function (index) {
            var _a;
            if (this.size === 0)
                return this.EMPTY_LIST;
            if (index < 0 || index >= this.size)
                return this.INDEX_OUT_OF_RANGE;
            var curr = this.head;
            for (var i = 0; i < index - 1; i++) {
                curr = curr === null || curr === void 0 ? void 0 : curr.next;
            }
            curr.next = (_a = curr === null || curr === void 0 ? void 0 : curr.next) === null || _a === void 0 ? void 0 : _a.next;
            return this.RESULT_STRING;
        };
        SortedListImpl.prototype.removeAll = function () {
            this.head = undefined;
        };
        SortedListImpl.prototype.get = function (index) {
            if (this.size === 0)
                return this.EMPTY_LIST;
            if (index < 0 || index >= this.size)
                return this.INDEX_OUT_OF_RANGE;
            var curr = this.head;
            for (var i = 0; i < index; i++) {
                curr = curr === null || curr === void 0 ? void 0 : curr.next;
            }
            return __assign(__assign({}, this.RESULT_STRING), { element: curr === null || curr === void 0 ? void 0 : curr.item });
        };
        SortedListImpl.prototype.find = function (item) {
            if (this.size === 0)
                return this.EMPTY_LIST;
            var curr = this.head;
            var count = 0;
            while (curr != undefined) {
                if (curr.item === item) {
                    return __assign(__assign({}, this.RESULT_STRING), { index: count });
                }
                count++;
                curr = curr.next;
            }
            return this.INVALID_VALUE;
        };
        SortedListImpl.prototype.compareTo = function (node1, node2) {
            if (node1 < node2)
                return -1;
            else if (node1 == node2)
                return 0;
            else
                return 1;
        };
        return SortedListImpl;
    }());
    var list = new SortedListImpl();
    var add_result = [
        list.add(3),
        list.add(4),
        list.add(5),
        list.add(1),
    ];
    add_result.forEach(function (result) {
        if (result.state === 'success') {
            console.log(result.result);
        }
        else
            console.log(result.reason);
    });
    var remove_result = list.remove(1);
    if (remove_result.state === 'success')
        console.log(remove_result.result);
    else
        console.log(remove_result.reason);
}
