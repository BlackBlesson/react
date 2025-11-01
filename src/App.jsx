import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './Components/Home';
import Courses from './Components/Courses';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {

  return (
    <>
      <section>
        <hr className='border border-white m-0' />

        <nav className='navbar navbar-expand-lg navbar-dark fixed-top nav'>
          <div className='container borde '>
            <div className='d-flex align-items-center'>
              <a href='#home'>
                <img src='/assets/logo.png' className='rounded-circle border border-light p-2' height='60px' />
              </a>
              <h2 className='text-light m-0 fs-3'>Success Academy</h2>
            </div>
            <div className='text-end '>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className='collapse navbar-collapse ' id="navbarNav">
                <ul className='navbar-nav '>
                  <li className='nav-item'>
                    <a className='nav-link' href='#home'>Home</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#course'>Courses</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#about'>About</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#contact'>Contact Us</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section id='home'>
        <Home />
      </section>

      <section id='course'>
        <Courses />
      </section >

      <section id='about'>
        <About />
      </section>

      <section id='contact'>
        <Contact />
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h5 className='text-light text-center mt-4'>© 2024 Success Academy. All rights reserved.</h5>
              
            </div>
            <div className="col-12 col-md-6 text-end">
              <a href=''>
              <i className="bi bi-whatsapp text-warning fs-2 "></i>
              </a>
              <a href=''>
              <i className="bi bi-instagram text-warning fs-2 mx-3"></i>
              </a>
              <a href=''>
              <i className="bi bi-facebook text-warning fs-2"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>



    </>
  )
}

export default App
