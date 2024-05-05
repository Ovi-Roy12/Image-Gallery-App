import React from 'react';
import Home from './home';
import About from './about';
import Blog from './blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
