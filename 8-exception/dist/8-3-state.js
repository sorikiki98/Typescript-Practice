// 간혹 개발자 분들이 성공적인 케이스만 (Happy Path 라고 부르지요) 생각해서 프로그램을 작성하고 그 외적인 것들은 다 예외로 간주하는 경우가 많은데요.
// 그렇게 프로그래밍을 하면 프로그램의 안정성과 사용성이 떨어지고 유지보수도 어려워요.
// 발생할 수 있는 예외에 대해 무작정 (Try-Catch) 또는 throw new Error() 예외 처리를 하기 보다는, 예상 가능한 예외 상황이라면 제가 영상에서 보여드린 예제처럼 에러 상태를 정의해서 예외 적인 상황이 아니라, 우리가 예상하고 있는 에러 상황(상태)로 간주해서 각기 다른 처리를 해주는것이 좋다고 생각해요 :)
{
    var NetworkClient = /** @class */ (function () {
        function NetworkClient() {
        }
        NetworkClient.prototype.tryConnect = function () {
            return {
                result: 'fail',
                reason: 'down'
            };
        };
        return NetworkClient;
    }());
    var UserService = /** @class */ (function () {
        function UserService(client) {
            this.client = client;
        }
        UserService.prototype.login = function () {
            return this.client.tryConnect();
        };
        return UserService;
    }());
    var App = /** @class */ (function () {
        function App(userService) {
            this.userService = userService;
        }
        App.prototype.run = function () {
            var returnData = this.userService.login();
            if (returnData.result === "success") {
                console.log("로그인 성공");
            }
            else {
                console.log("\uB85C\uADF8\uC778 \uC2E4\uD328 \uC774\uC720: " + returnData.reason);
            }
        };
        return App;
    }());
    var client = new NetworkClient();
    var service = new UserService(client);
    var app = new App(service);
    app.run();
}
