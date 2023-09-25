import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div class="min-h-screen px-10">
      <p class="h-6"></p>
      <div class="h-60 px-8 flex items-center border-solid border-2">
        <h1 class="text-5xl">Techeer Partners 3rd - Team B</h1>
      </div>
      <p class="h-8"></p>
      <h1 class="text-2xl">[React Study]</h1>
      <p class="h-4"></p>
      <div className="h-16 flex items-center">
        <Link to="/week1">
          <h1 class="text-xl font-medium">
            1주차 태스크 - React 컴포넌트를 이해하고 정적 페이지 만들기
          </h1>
        </Link>
      </div>
      <div className="h-16 flex items-center">
        <Link to="/week2">
          <h1 class="text-xl font-medium">
            2주차 태스크 - React-Router v6 공부하고 적용해보기
          </h1>
        </Link>
      </div>
    </div>
  );
}
