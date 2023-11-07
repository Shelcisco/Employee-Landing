import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import WA from './pages/WA';
import "./index.css";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wa" element={<WA />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
