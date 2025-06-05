###  next js 14 세팅하기

```bash
npm init -y
```

<br>

- react-dom 은 리액트 구성요소 들을 DOM(Document Object Model)에 렌더하는 역학을 수행
```bash
npm install react@latest next@latest react-dom@latest
```


- NextJS 가 시작될 때 웹사이트를 빌드한다.
- 빌드할 때 app 경로의 page 파일을 찾게된다. (경로, 파일 이름 규칙 중요) 
- tsx 로 파일 생성후 npm run dev 실행
    - ts 에 필요한 의존성들이 자동으로 설치된다.
- localhost:3000 접속하면 콘솔에 아래와 같이 출력되고, 필요에 의해 layout.tst 가 자동으로 생성된다.
    - ⚠ Your page app/page.tsx did not have a root layout. We created app\layout.tsx for you.



### 라우팅
- 파일 시스템을 활용한 라우팅
    - 폴더는 경로를 url 경로를 나타내는데 사용
    - 해당 폴더 안에 page.tsx 가 있어야함.



### not-found
- layout.tsx, page.tsx 와 같이 특별히 정해진 파일 이름
- app 하위에 not-found.tsx 정의로 구현
