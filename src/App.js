import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from './pages/FavoritesContext';
import Home from './pages/Home';
import WA from './pages/WA';
import Bs from './pages/Bs';
import Fav from './pages/Favorite';
import Faq from './pages/Faq';
import "./index.css";
import "./App.css";

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/WA" element={<WA />} />
          <Route path="/Bs" element={<Bs />} /> 
          <Route path="/Fav" element = {<Fav />} />
          <Route path="/Faq" element = {<Faq />} />
        </Routes>
      </BrowserRouter>
      </FavoritesProvider>
   
  );
}

export default App;
