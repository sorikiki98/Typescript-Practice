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
    var TimeoutError = /** @class */ (function (_super) {
        __extends(TimeoutError, _super);
        function TimeoutError() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return TimeoutError;
    }(Error));
    var OfflineError_1 = /** @class */ (function (_super) {
        __extends(OfflineError, _super);
        function OfflineError() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return OfflineError;
    }(Error));
    var NetworkClient = /** @class */ (function () {
        function NetworkClient() {
        }
        NetworkClient.prototype.tryConnect = function () {
            throw new OfflineError_1('no network!');
        };
        return NetworkClient;
    }());
    var UserService = /** @class */ (function () {
        function UserService(client) {
            this.client = client;
        }
        UserService.prototype.login = function () {
            this.client.tryConnect();
        };
        return UserService;
    }());
    var App = /** @class */ (function () {
        function App(userService) {
            this.userService = userService;
        }
        App.prototype.run = function () {
            try {
                this.userService.login();
            }
            catch (error) {
                // show dialog to use
                console.log(error); // OfflineError: no network!
            }
        };
        return App;
    }());
    var client = new NetworkClient();
    var service = new UserService(client);
    var app = new App(service);
    app.run();
}
