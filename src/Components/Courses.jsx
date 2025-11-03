import React from 'react'

const Courses = () => {
  return (
    <>
      <div className='container '>
      
        <h2 className='text-light text-center heading'>COURSES</h2>
        <hr className="border border-warning w-25 mx-auto" />


        <div className=' d-flex gap-5 flex-wrap course justify-content-center '>
          <div className="card classes cards" style={{ width: '15rem' }}>
            <img src="./assets/spoken.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Spoken English</h5>
              <p className="card-text">"Let thy speech be better than silence, or be silent." </p>
              <a href="#" className="link"><button className="buttons">Course Details</button></a>
            </div>
          </div>
          <div className="card cards" style={{ width: '15rem' }}>
            <img src="./assets/hand.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Hand Writing</h5>
              <p className="card-text">You can tell a lot about a person by their handwriting.</p>
              <a href="#" className="link"><button className="buttons">Course Details</button></a>
            </div>
          </div>
          <div className="card card-items cards" style={{ width: '15rem' }}>
            <img src="./assets/drawing.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Drawing</h5>
              <p className="card-text">The true work of art is but a shadow of the divine perfection. </p>
              <a href="#" className="link"><button className="buttons">Course Details</button></a>
            </div>
          </div>
          <div className="card cards" style={{ width: '15rem' }}>
            <img src="./assets/python.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Python</h5>
              <p className="card-text">Python is an interpreted, object-oriented, high-level programming language.</p>
              <a href="#" className="link"><button className="buttons">Course Details</button></a>
            </div>
          </div>
          <div className="card cards" style={{ width: '15rem' }}>
            <img src="./assets/c.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">C / C++</h5>
              <p className="card-text">C and C++ quotes often highlight the languages' power and complexity.</p>
              <a href="#" className="link"><button className="buttons">Course Details</button></a>
            </div>
          </div>
          <div className="card cards" style={{ width: '15rem' }}>
            <img src="./assets/java.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <p className="card-text">Java is a widely used object-oriented programming language</p>
              <a href="#" className="link"><button className="buttons">Course Details</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Courses