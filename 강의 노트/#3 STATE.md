# #3. State
## 3.0 Understanding State
- State : Data가 저장되는 공간
- let counter와 같이 변수를 선언하고 React Element에서 {변수명}만 사용하면 값을 불러올 수 있다.
- 좋은 방법은 아니지만 반드시 변수 값이 변경되면 ReactDOM.render(<App />, root); 를 써줘서 리프래시를 해줘야 한다.
---
## 3.1 setState I
- React.setState(초기값)을 활용하면, 리프래시 필요 없이 효율적으로 사용할 수 있다!
- React.setState()는 [값, 명령어함수] 형태의 배열을 return해준다. 우리는 값을 통해 해당 변수의 값을 조회할 수 있고, 명령어 함수를 통해 이 값을 변경할 수 있다.
- [data, modifier]을 사용하면 data에 변수 값을 저장할 수 있고, modifier을 통해 값을 업데이트 할 수 있다.
- const(상수) 형태로 선언하여 modifier(변경할 값)으로 변경하면 처음부터 리랜더링 할 필요 없이 바로 값을 새로고침 할 수 있다.
- #3의 3.3.html 파일을 참고하여 업데이트하는 방법을 알아보자
---
## 3.4 State Function
- modifier(current + 1) 을 하는 방법은 현재 값을 저장하는 기능이 없으므로 해당 코드를 여러번 입력해도 다시 함수가 실행되기 전에는 반영이 안된다.
- 따라서 modifer((current) => data + 1)과 같은 방식으로 현재 값에 대한 보증이 되는 방식을 쓰는 것이 좋다.
--- 
## 3.5 Inputs and State
- JSX는 HTML과 유사하지만, for / class ... 등 근소한 차이가 있다.
- <input>의 HTML 태그를(JSX) 사용하려면 onChange 값을 함수로 지정해서 이벤트 처리를 해야 한다.