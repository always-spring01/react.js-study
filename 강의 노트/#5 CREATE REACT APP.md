# #5 Create React App
## 5.0 Introduction
- Create-React-App 은 자동적으로 react Native를 빌드해주는 툴이다.
- 반드시 맥, 윈도우 모두 node가 선행 깔려 있어야 하고 맥 기준 프로젝트 생성을 원하는 폴더에서 아래 명령어를 입력해야 한다.
    ```
    npx create-react-app <이름>
    ```
- 이후 프로젝트 폴더를 code 명령어로 Visual Code로 연 다음, 해당 파일을 수정하고 터미널이서 아래 명령어를 치면 로컬 서버가 빌드된다.
    ```
    npm start
    ```
- 서버는 변경사항이 있을 때마다 자동 업데이트 되어 편하게 바로 볼 수 있다.
- **npm start 명령어는 반드시 react 프로젝트 안에서 터미널을 열어서 실행해야 오류가 발생하지 않는다**
- 하나의 컴포넌트들을 하나의 js파일로 만들어 index.js파일에서 **import**해서 사용하는 방식으로 컴포넌트를 관리할 수 있다.
---
## 5.1 Tour of Create React App
