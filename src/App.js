// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Katalog from './components/katalog';
import Main_page from './components/main_page/main';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main_page />} />
        <Route path="/katalog" element={<Katalog />} />
      </Routes>
    </Router>
  );
}

export default App;
