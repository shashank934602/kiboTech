import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import Successpage from './components/Successpage';
import Header from  './components/Header'
import Footer from './components/Footer'

function App() {
  return (
   
      <div className="flex flex-col min-h-screen">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/success" element={<Successpage />} />
        </Routes>
        <Footer/>
      </div>
  
  );
}

export default App;

