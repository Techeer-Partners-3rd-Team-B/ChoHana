import React from "react";
import YellowBox from "../components/YellowBox";
import Quotation from "../components/Quotation";

export default function Week2() {
  return (
    <div className="min-h-screen px-20">
      <p className="h-6"></p>
      <h1 className="text-3xl font-semibold">
        2주차 태스크 - React-Router v6 공부하고 적용해보기
        <p className="h-3"></p>
      </h1>
      <hr className="pb-7" />
      <div className="flex">
        <div className="ml-6">
          <h1 className="text-xl mb-2">공부 내용</h1>
          <p>- React-Router에 대해 알아보기</p>
          <p>- 컴포넌트: 리액트에서 UI 요소를 표현하는 최소한의 단위</p>
          <p>- React-Router를 사용해 화면전환 구현해보기</p>
          <p>- Tailwind 체험</p>
        </div>
      </div>
      <p className="h-10"></p>
      <YellowBox type="text-2xl font-semibold" cont="React-Router란?" />
      <p className="h-4"></p>
      <Quotation cont="클라이언트 측 라우팅을 활성화한다. 앱이 서버에서 다른 문서를 다시 요청하지 않고도 URL을 업데이트할 수 있다. 새로운 UI를 즉시 렌더링 하고 데이터를 요청하여 ‘fetch’ 페이지를 업데이트할 수 있다. 이를 통해 더 빠른 사용자 경험이 가능하다." />
      <p className="h-8"></p>
      <h2 className="text-2xl font-medium">React-Router의 종류</h2>
      <p className="h-5"></p>
      <h3 className="text-xl">1. HashRouter</h3>
      <p className="h-4"></p>
      <Quotation cont="URL의 해쉬(#)값을 이용하는 라우터" />
      <p className="h-5"></p>
      <ul className="list-disc">
        <li>주소에 해쉬(#)가 붙음</li>
        <li>검색 엔진이 읽지 못함</li>
        <li>라우팅하는 사실을 서버가 알지 못한다.</li>
        <li>history API를 사용하지 않아 동적 페이지에서 불리함</li>
      </ul>
      <p className="h-5"></p>
      <h3 className="text-xl">2. BrowserRouter</h3>
      <p className="h-4"></p>
      <Quotation cont="HTML5를 지원하는 브라우저의 주소를 이용하는 라우터" />
      <p className="h-5"></p>
      <ul className="list-disc">
        <li>history API 사용</li>
        <li>큰 프로젝트에 적합</li>
      </ul>
      <p className="h-12"></p>
      <YellowBox type="text-2xl font-semibold" cont="React-Router-DOM이란?" />
      <p className="h-4"></p>
      <Quotation cont="React로 생성된 SPA(Single Page Application) 내부에서 페이지 이동이 가능하도록 만들어주는 라이브러리" />
      <p className="h-12"></p>
      <hr className="pb-7" />
      <YellowBox type="text-2xl font-semibold" cont="React-Router 사용해보기" />
      <p className="h-8"></p>
      <h2 className="text-2xl font-medium">태그 종류</h2>
      <p className="h-5"></p>
      <h3 className="text-xl">
        1. {"<"}BrowserRouter{">"}
      </h3>
      <p className="h-4"></p>
      <Quotation cont="Routes를 감싼다" />
      <p className="h-5"></p>
      <h3 className="text-xl">
        2. {"<"}Routes{">"}
      </h3>
      <p className="h-4"></p>
      <Quotation cont="여러 Route를 감싸서 그 중 규칙이 일치하는 라우트를 렌더링 시켜주는 역할" />
      <p className="h-5"></p>
      <h3 className="text-xl">
        3. {"<"}Route{">"}
      </h3>
      <p className="h-4"></p>
      <Quotation cont="path 속성에 경로, element 속성에는 컴포넌트를 넣어준다. 여러 라우팅을 매칭하고 싶은 경우에는 URL 뒤에 * 사용" />
      <p className="h-5"></p>
      <h3 className="text-xl">
        4. {"<"}Link{">"}
      </h3>
      <p className="h-4"></p>
      <Quotation cont="History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어 있다." />
      <p className="h-5"></p>
      <ul className="pl-5 list-disc">
        <li>
          import {"{"}link{"}"} from 'react-router-dom';
        </li>
        <li>
          {"<"}Link to="경로"{">"}링크명{"<"}/Link{">"}
        </li>
      </ul>
      <p className="h-12"></p>
    </div>
  );
}
