import React, { useEffect, useState } from 'react'

const Courses = () => {
  const [course, setCourses] = useState([])

  useEffect(() => {
    loadCourses()
  },[])

  const loadCourses = () => {
    try {
      const savedCourses = JSON.parse(localStorage.getItem('courseDetails')) || [];
      setCourses(Array.isArray(savedCourses) ? savedCourses : []);

    } catch (err) {
      console.log("Error ", err);
      setCourses([]);
    }

  }




  return (
    <>
      <div className='container '>

        <h2 className='text-warning text-center '>COURSES</h2>
        <hr className="border border-warning w-25 mx-auto" />

        {course.length === 0 ? (
          <div>
            <h2 className='text-light '>Courses will be update soon ...</h2>
          </div>
        ) : (
          <div className='d-flex flex-wrap justify-content-center my-5 mx-2 gap-4'>

          {course.map((course, id) => {
            return (
                <div className='card course-card' key={id} style={{ width: '15rem' }}>
                  <div className='card-body'>
                    <h4 className='card-title'>{course.coursename}</h4>
                    <p className='card-text'>{course.description}</p>
                    <a className='btn  btn-warning'>Course Details</a>
                  </div>
                </div>
              
            )
          })}
          </div>
        )}


      </div>

    </>
  )
}

export default Courses