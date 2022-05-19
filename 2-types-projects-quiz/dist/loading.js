{
    function printLoginState(resourceLoadState) {
        switch (resourceLoadState.state) {
            case 'loading':
                console.log('👀 loading...');
                break;
            case 'success':
                console.log("\uD83D\uDE03 " + resourceLoadState.response.body);
                break;
            case 'fail':
                console.log("\uD83D\uDE31 " + resourceLoadState.reason);
                break;
            default:
                throw Error("unknown state");
        }
    }
    printLoginState({ state: 'loading' }); // 👀 loading...
    printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
    printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
