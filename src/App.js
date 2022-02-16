import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Bantuan from './pages/Bantuan';
import Detail from './pages/DetailWisata/DetailWisata';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

export default function App() {
  return (
    <>
      <Router history={history}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Beranda />} />
          <Route path='/detail-wisata/:id' element={<Detail />} />
          <Route path='/bantuan' element={<Bantuan />} />
        </Routes>
      </Router>
    </>
  );
}