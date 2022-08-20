import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './components/layoutComponents/Header';
import Navbar from './components/layoutComponents/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './App.css';

// PAGES
import Home from './pages/Home';
import AllBooks from './pages/AllBooks';
import NotFound from './pages/NotFound';

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('https://gutendex.com/books/')
      .then(({data}) => {
        setBooks(data.results)
      }) 
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home books={books} />} />
          <Route path="/books" element={<AllBooks books={books} />} />

          <Route
            path="/"
            element={<Navigate to="/home" replace />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
