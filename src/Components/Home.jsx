import React from 'react'
import '../App.css'
const Home = () => {
    return (
        <>
            <div className="hero-container-fuid home ">
                {/* <img src={pic} className='hero-img'></img> */}
                <div className='hero-content container text-start border-light rounded-4 p-5'>
                    <h1 id='text'>Welcome to Success Academy</h1>
                    <h5 id='text'>Learn. Grow. Succeed.</h5>
                    <button className='btn btn-dark btns' onClick={() => {
                        window.location.href = '#course'
                    }}>Get Started</button>
                </div>

            </div>
        </>
    )
}

export default Home