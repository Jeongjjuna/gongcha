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


### usePathname hook 사용
- userPathname 단순히 가져와서 사용할 수 없다. 
    - client component 에서만 사용가능하다고 경구문구가 뜬다.
- 파일 상단에 아래 구문을 추가해서 경고(에러)를 해결한다.
    - "use client";


### server componets(서버 컴포넌트) vs client components(클라이언트 컴포넌트)
- client side rendering (CSR) : 모든 렌더링 과정이 UI(브라우저) 에서 일어난다.
    - client 가 javascript 를 로드하고, 그 후에 javascript 가 UI 를 빌드한다.
- server side rendering (SSR)
    - NextJS 는 기본적으로 서버에서 렌더링 후 완성된 html을 응답해준다.
        - "use client"; 를 하더라도 SSR 방식으로 동작한다.


### hydration
- 렌더링된 곳에서 javascript 를 비활성화 하면, <a> 태그를 눌렀을 때 새로고침(reload) 된다.
- 그러나 javascript 를 활성화하면, React 가 끼어들어서 새로고침(reload) 하지 않고 navigate 해준다.
    - 즉, <a> 태그를 누르더라도 실제로는 <Link> 컴포넌트가 동작하게됨으로써 새로고침(reload)가 일어나지 않는다.
- 위와 같이 렌더링 이후에 일어나는 과정을 hydration 이라고 한다.



### "use client"
- client 에서 hydrate 되는 components 는 "use client" 지시어를 맨 위에 가지고 있는 component 들 뿐이다.
- 즉, use clinet 는 client 가 interractive 해야돼! hydration 가능해야해! 라고 말하는 것 과 같다.
- backend 에서 redner 되고, frontend 에서 hydrate 및 interactive 됨 을 의미
- 사용자는 use client 가 붙은 컴포넌트들에 대해서만 javascript 코드를 다운 받는다.(최적화가 된다)
    - 서버 컴포넌트(server componet) 에 대한 javascript 코드를 다운로드할 필요가 없다.

### layout
- NextJS 는 URL을 통해 폴터를 찾고, 만약 레이아웃이 있다면 그 레이아웃을 그 밖에있는 레이아웃 안에 렌더링해준다.
    - 즉, nesting 형식으로 중첩 레이아웃이 형성된다.


### metadata
- (home) 처럼 폴터 이름에 괄호를 지정하여 URL에 영향받지 않도록 한다.