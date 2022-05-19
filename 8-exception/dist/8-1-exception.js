// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);
// Error(Exception) Handling: try -> catch -> finally
// 예상치 못한 에러를 처리할 때 
function readFile(fileName) {
    if (fileName === 'not exist!💩') {
        throw new Error("file not exist! " + fileName);
    }
    return 'file contents🗒';
}
function closeFile(fileName) {
    //
}
function run() {
    var fileName = 'not exist!💩';
    try {
        console.log(readFile(fileName));
    }
    catch (error) {
        console.log("catched!!");
        return;
    }
    finally {
        closeFile(fileName);
        console.log("closed!");
    }
}
run();
// 만일 closeFile 메소드를 try-catch 구문 바깥에 쓰면 catch문에서 return을 만나
// run() 메소드가 종료되므로 호출될 수 없다. 
