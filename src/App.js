import React from 'react';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import { Signup } from './Component/Signup';
import { Route, Routes } from 'react-router-dom';
import Contacts from '../src/Component/Contacts/Contacts';
import Srijan from './Component/Srijan';


const App = () => {
  return (
    <div className="dark:bg-slate-800 dark:text-white bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts/>} />
        <Route path="/srijan" element={<Srijan/>} />



      </Routes>
    </div>
  );
};

export default App;
