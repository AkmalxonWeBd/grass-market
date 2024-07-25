// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main_page/main_black_menu';
import Katalog from './components/katalog';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/katalog" element={<Katalog />} />
      </Routes>
    </Router>
  );
}

export default App;
