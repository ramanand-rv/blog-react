import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create'
import BlogDetails from './BlogDetails';
import ErrorPage from './ErrorPage';

function App() {

  return (
    < Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' Component={BlogDetails} />
            <Route path='*' Component={ErrorPage} />
          </Routes>
        </div>
      </div>
    </Router>




  );
}

export default App
