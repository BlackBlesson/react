import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './Components/Home';

import Courses from './Components/Courses';
import About from './Components/About';
import Contact from './Components/Contact';
import Admin from './Components/Admin';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const showFooter = location.pathname === '/'

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top nav'>
        <div className='container  borde'>
          <div className='d-flex align-items-center col-4'>
            <Link to="/"><img src='/assets/logo.png' className='rounded-circle border border-light p-2' height='60' alt="logo" /></Link>
            <h2 className='text-light m-0 fs-3 ms-3'>Success Academy</h2>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className='collapse navbar-collapse col-4 mx-5 ' id="navbarNav">
            <ul className='navbar-nav me-auto mb-1 mb-lg-0 ms-1'>
              <li className='nav-item'><a className='nav-link' href='#home'>Home</a></li>
              <li className='nav-item'><a className='nav-link' href='#course'>Courses</a></li>
              <li className='nav-item'><a className='nav-link' href='#about'>About</a></li>
              <li className='nav-item'><a className='nav-link' href='#contact'>Contact Us</a></li>
            </ul>

            <div className='col-4 text-end'>
              <Link to="/login"><button id='login' className='btn btn-warning '>Admin</button></Link>
            </div>
          </div>
        </div>

      </nav>

      <main >
        <Outlet />
      </main>

      {showFooter && (
        <footer>
          <div className="container ">
            <div className="row">
              <div className="col-12 col-md-6">
                <h5 className='text-light text-center mt-4'>© 2024 Success Academy. All rights reserved.</h5>
              </div>
              <div className="col-12 col-md-6 text-end">
                <a href=''><i className="bi bi-whatsapp text-warning fs-2 "></i></a>
                <a href=''><i className="bi bi-instagram text-warning fs-2 mx-3"></i></a>
                <a href=''><i className="bi bi-facebook text-warning fs-2"></i></a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  )
}

function HomePage() {
  return (
    <>
      <section id='home'><Home /></section>
      <section id='course'><Courses /></section>
      <section id='about'><About /></section>
      <section id='contact'><Contact /></section>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
