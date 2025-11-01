import React from 'react'
import '../App.css'
const Home = () => {
    return (
        <>
            <div className="hero-container-fuid home ">
                {/* <img src={pic} className='hero-img'></img> */}
                <div className='hero-content container text-start '>
                    <h1 id='text'>Welcome to Success Academy</h1>
                    <h5 id='text'>Learn. Grow. Succeed.</h5>
                    <button className='btn btn-dark btns' onClick={() => {
                    alert('heiio');
                }}>Get Started</button>
                </div>
                
            </div>
        </>
    )
}

export default Home