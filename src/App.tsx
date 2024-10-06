import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} /> 
      </Routes>
    </div>
  );
}

export default App;