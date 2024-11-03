// App.js
import React from 'react';
import './App.css';
import './var.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero-section/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify'; // Import ToastContainer

function App() {
  return (
    <>
      <div className='app'>
        <div className="Container">
          <Navbar />
          <Hero id="about" />
          <Skills id="skills" />
          <Projects id="projects" />
          <Contact id="contact" />
         
        </div>
        <Footer/>
      </div>
      {/* Add ToastContainer here */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}

export default App;
