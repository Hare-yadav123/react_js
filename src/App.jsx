
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './index.css'
import './App.css'
import {Index} from './components/Index.jsx';
import {Home} from './components/Home.jsx'
import {About} from './components/About.jsx'
import { Contact } from './components/Contact.jsx';
import { Service } from './components/Service.jsx';
import { Team } from './components/Team.jsx';
import { Blog } from './components/Blog.jsx';
import { Pages } from './components/Pages.jsx';
import { Signup } from './components/Signup.jsx';
import { Login } from './components/Login.jsx';
function App() {
  return (
    <>
        <Router>
          <Index />
          <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/Pages" element={<Pages />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
      </Router>
    </>
  );
};

export default App;