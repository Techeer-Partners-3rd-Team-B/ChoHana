import React from "react";
import week1 from "../images/week1.png";
import YellowBox from "../components/YellowBox";

export default function Week1() {
  return (
    <div class="h-screen px-20">
      <p class="h-6"></p>
      <div className="h-16 flex items-center">
        <h1 class="text-3xl font-semibold">
          1주차 태스크 - React 컴포넌트를 이해하고 정적 페이지 만들기
        </h1>
      </div>
      <hr class="pb-10" />
      <div class="flex">
        <img src={week1} class="w-64"></img>
        <div class="ml-10 w-full">
          <YellowBox type="text-2xl mb-2 font-medium" cont="공부 내용" />
          <p class="h-4"></p>
          <p>- CSS Flex 연습</p>
          <p>- 컴포넌트: 리액트에서 UI 요소를 표현하는 최소한의 단위</p>
          <p>- props(매개변수) 사용해보기</p>
          <p class="h-14"></p>
          <YellowBox type="text-2xl mb-2 font-medium" cont="정기미팅 피드백" />
          <p class="h-4"></p>
          <p>- CSS 파일들은 components 폴더에 넣지 않고 따로 관리</p>
          <p>- Tailwind CSS도 따로 그룹화 가능</p>
        </div>
      </div>
      <p class="h-8"></p>
    </div>
  );
}
