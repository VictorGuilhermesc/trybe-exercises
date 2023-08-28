import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/CoffeeList';
import Coffee from './pages/Coffee';
import NavBar from './components/nav-bar/NavBar';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/coffees" element={ <CoffeeList /> } />
        <Route path="/coffees/:coffee" element={ <Coffee /> } />
      </Routes>
    </>

  );
}

export default App;
