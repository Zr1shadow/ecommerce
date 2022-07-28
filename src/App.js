import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Nav/Header';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Jewelery" element={<Header />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
