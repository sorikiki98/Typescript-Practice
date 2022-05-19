{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // todo.title = 'jaja';
  }

  // readonly의 경우 클래스, 타입 alias, 인터페이스 내부에서 프로퍼티 앞에서 사용되거나
  // 혹은 클래스의 생성자에서만 사용될 수 있다.

  // 위와 같이 ReadOnly<타입>처럼 쓸 때, 타입 자리에는 primitive나 object 타입이 들어갈 수 있다.
  // 이렇게 하는 이유는 함수 내부에서 데이터가 변경되지 못핟로ㅗㄱ 하기 위함이다. 
}
