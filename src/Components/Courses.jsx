import React, { useEffect, useState } from 'react'

const Courses = () => {
  const [course, setCourses] = useState([])
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    loadCourses()
  }, [])

  const loadCourses = () => {
    try {
      const savedCourses = JSON.parse(localStorage.getItem('courseDetails')) || [];
      setCourses(Array.isArray(savedCourses) ? savedCourses : []);

    } catch (err) {
      console.log("Error ", err);
      setCourses([]);
    }

  }
  const openCourse = (course) =>
    setSelectedCourse(course);


  const closeCourse = () => setSelectedCourse(null)





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
                    <a className='btn  btn-warning' onClick={() => { openCourse(course) }}>Course Details</a>
                  </div>
                </div>

              )
            })}{selectedCourse && (
              <div className='modal  show d-block' style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1500 }}>
                <div className='modal-dialog modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h2 className='text-dark'>{selectedCourse.coursename}</h2>
                      <button type='button' className='btn-close' onClick={closeCourse}></button>
                    </div>
                    <div className='modal-body'>
                      <p>{selectedCourse.description}</p>
                      <p>Fees :   {selectedCourse.fees}</p>
                      <p>Course Duration  :  {selectedCourse.duration}</p>
                    </div>
                    <div className='ms-auto p-2'>
                      <button type='button' className='btn btn-warning ' onClick={closeCourse}>Close</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}


      </div>

    </>
  )
}

export default Courses