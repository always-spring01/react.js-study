# #2. The Basics Of React
## 2.0 Introduction
>React JS가 무엇인가
- React JS는 UI를 interactive 하도록 만들어 주는 도구이다. (상호작용의 용의성)
- 예시로, HTML + CSS + JS를 이용해 간단한 버튼을 만들고, 클릭 단계를 거칠 때 마다 화면에 횟수를 업데이트 하는 웹 사이트를 만들려면, HTML - CSS - JS 3가지 언어 모두를 커버 하여 접근이 어려워진다.
- 2.1 강의에서 예제를 통해 React JS의 강점을 알아볼 수 있도록 한다.
---
## 2.1 Before React
- React 없이 HTML을 사용해 웹사이트를 만드는 방법
    1. HTML에 레이아웃을 구성한다.
    2. JavaScript를 <script></script>를 사용해 HTML 요소를 가져온다.
    3. 이후 HTML요소를 편집하여 반영한다.
- React를 import하여 html을 구현하는 방법
    1. 아래 코드를 body태그 아래에 추가한다
    ```HTML
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    ```
    2. 이후 React 변수를 호출할 수 있는지 Console을 통해 알아보고 정상적으로 호출하면 문제 없다.
    3. Apple Silicon 탑제 모델으 경우 HomeBrew를 통해 Node.js를 깔게 되면 정상적으로 React도 불러올 수 있다.
---
## 2.2 Our First React Element
- React JS를 직접 코딩해보자.
- 다행히도, React JS는 HTML 코드를 작성할 필요 없이 JavaScript와 React로 모든 element를 만들 수 있다.
- 이 시간에 다루는 방식은 너무 귀찮아서, 실제에선 쓰진 않으나 원리를 알아야 적용할 수 있기에 알아야 한다.
    - React JS는 하나의 프레임워크인데, 엔진과 같이 React 문법을 사용가능하게 해준다.
    - React-dom은 React Element를 HTML에 자동으로 파싱하는 역할을 수행하는 프레임워크이다.
    - 위 2개의 자바스크립트 프레임워크를 import하는 것은 당연히 필수적이다!
- React-dom을 사용해서 자동적으로 HTML Element를 추가할 수 있다.
    - ReactDOM.createElement("span", {id: "sexy-span"}, content)
    - ReactDOM.render(<넣을 항목 변수>, <위치 변수>)
- React JS는 항상 JavaScript와 동시에 사용된다. **HTML의 업데이트가 필요하다면 React JS를 통해 즉각적으로 HTML을 업데이트 할 수 있다!**
---
## 2.3 Events in React
>React JS를 이용해 버튼을 만들어보고 버튼에서 일어나는 event를 감지하는 방법을 알아볼 예정
- React JS를 사용하면 기존 대비 완벽히 간편하게 ~~심지어 이 방법도 완벽하진 않다~~ 버튼 이벤트를 추가해버릴 수 있다.
    - vanilla(2).html을 참고해보자!
- React JS는 똑똑하기 때문에 상호작용형 웹을 만드는데 강력한 힘을 발휘해준다!
- 당장 코드 예제만 봐도, html 코딩 대비 엄청난 코드량의 감소와 직관적으로 변했다는 것을 알 수 있다.
---
## 2.5 JSX
>creatElement를 대체하는 더 편리한 도구를 사용해 보자! : JSX
- JSX는 Javascript를 확장한 문법 종류이다.
- JSX는 HTML과 흡사하게 사용할 수 있어 개발할 때 간편하다.
- JSX는 브라우저에서 지원하지 않아 임시로 아래 코드를 추가해 브라우저 상에서 import해서 변환하도록 한다.
    ```JavaScript
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
        const root = document.getElementById("root");
        const title = (
            <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
            Hello I'm a title
            </h3>
            );
        const btn = (
            <button style={{
                backgroundColor : "tomato",
            }}
            onClick={() => console.log("im clicked")}>Click me</button>
        );
        const container = React.createElement("div", null, [title, btn]);
        ReactDOM.render(container, root);
    </script>
    ```
    - 이때 script의 type을 text/babel로 설정해야 한다.
---
## 2.6 JSX(2)
- JSX를 통해 createElement 또한 함수형으로 바꿔서 실행 가능하다
- 하지만 이때 함수는 무조건 대문자로 시작해야 한다.
