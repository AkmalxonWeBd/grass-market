// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Katalog from './components/katalog';
import Main_page from './components/main_page/main';
import Avtokimyo from './components/pages/avtokimyo';
import Kosmetika from './components/pages/kosmetika';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main_page />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/avtokimyo" element={<Avtokimyo />} />
        <Route path="/kosmetika" element={<Kosmetika />} />
      </Routes>
    </Router>
  );
}

export default App;
