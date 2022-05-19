// 간혹 개발자 분들이 성공적인 케이스만 (Happy Path 라고 부르지요) 생각해서 프로그램을 작성하고 그 외적인 것들은 다 예외로 간주하는 경우가 많은데요.
// 그렇게 프로그래밍을 하면 프로그램의 안정성과 사용성이 떨어지고 유지보수도 어려워요.
// 발생할 수 있는 예외에 대해 무작정 (Try-Catch) 또는 throw new Error() 예외 처리를 하기 보다는, 예상 가능한 예외 상황이라면 제가 영상에서 보여드린 예제처럼 에러 상태를 정의해서 예외 적인 상황이 아니라, 우리가 예상하고 있는 에러 상황(상태)로 간주해서 각기 다른 처리를 해주는것이 좋다고 생각해요 :)

{
	type NetworkErrorState = {
		result: 'fail';
		reason: 'offline' | 'down' | 'timeout';
	};

	type SuccessState = {
		result: 'success';
	};

	type ResultState = SuccessState | NetworkErrorState;

	class NetworkClient {
		tryConnect(): ResultState {
			return {
				result: 'fail',
				reason: 'down',
			};
		}
	}

	class UserService {
		constructor(private client: NetworkClient) {}

		login(): ResultState {
			return this.client.tryConnect();
		}
	}

	class App {
		constructor(private userService: UserService) {}
		run() {
			const returnData: ResultState = this.userService.login();
      if (returnData.result === "success") {
        console.log("로그인 성공");
      } else {
        console.log(`로그인 실패 이유: ${returnData.reason}`);
      }
		}
	}

	const client = new NetworkClient();
	const service = new UserService(client);
	const app = new App(service);
	app.run();
}
