import React from "react";
import "./App.css";
import Round from "./components/Round";
import Header from "./components/Header";
import Footer from "./components/Footer";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <div className="section1">
          <div className="section1-user">
            <User img="images/cat.jpg" name="Team-B" job="REACT STUDY" />
          </div>
          <div className="section1-user">
            <User
              img="images/puppy.jpg"
              name="HANA"
              job="FRONTEND"
              align="right"
            />
          </div>
        </div>
        <div className="section2">
          <div className="section2-right">
            <div>
              <Round color="#004225" />
            </div>
            <div>
              <Round />
            </div>
            <div>
              <Round color="#004225" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// 컴포넌트는 일종의 UI 조각, 쉽게 재사용
// JSX란 리액트 컴포넌트에서 xml 형식의 값을 반환해주는 것
