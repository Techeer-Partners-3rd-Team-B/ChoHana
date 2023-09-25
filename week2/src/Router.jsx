import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Week1 from "./pages/Week1";
import Week2 from "./pages/Week2";

export default function Router() {
  return (
    <div class="min-h-max">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/week1" element={<Week1 />}></Route>
          <Route path="/week2" element={<Week2 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
