import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Err from "./component/error";
import Footer from "./component/footer";
import Nav from "./component/nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Err/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
