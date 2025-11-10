import { useState, useEffect } from 'react'


const AddCourse = () => {
    const [detail, setDetail] = useState({
        coursename: "",
        description: "",
        fees: "",
        duration: "",

    });
    const [courses, setCourses] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const savedCourses = JSON.parse(localStorage.getItem('courseDetails')) || [];
        setCourses(savedCourses);
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetail(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!detail.coursename.trim() || !detail.description.trim()) {
            alert("Please fill in all fields");
            return;
        }

        setIsSubmitting(true);


        try {


            const newDetails = {
                id: Date.now(),
                ...detail,
            };

            const updatedCourses = [...courses, newDetails];
            setCourses(updatedCourses);
            localStorage.setItem("courseDetails", JSON.stringify(updatedCourses));


            setDetail({ coursename: "", description: "", fees: "", duration: "" });

        } catch (err) {
            console.error("Error:", err);
            alert("Failed to add course");
        } finally {
            setIsSubmitting(false);
        }

    }
    const handleDelete = (id) => {
        const newUpdated = courses.filter(entry => entry.id !== id);
        localStorage.setItem('courseDetails', JSON.stringify(newUpdated));
        setCourses(newUpdated);
    }

    return (
        <>
            <section className=''>
                <div className='pb-3 my-5'>
                <h2 className='text-warning'>List Of Courses</h2>
                </div>
                <div className='table-responsive'>
                    <table className='table table-sm table-striped table-secondary table-bordered'>
                        <thead>
                            <tr>
                                <th>S.NO</th>
                                <th>COURSE NAME</th>
                                <th>COURSE DESCRIPTION</th>
                                <th>COURSE FEES</th>
                                <th>COURSE DURATION</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{course.coursename}</td>
                                    <td>{course.description}</td>
                                    <td>{course.fees}</td>
                                    <td>{course.duration}</td>
                                    <td>
                                        <button className='btn btn-warning' onClick={() => { handleDelete(course.id) }}>DELETE</button>
                                    </td>
                                </tr>
                            ))

                            }
                        </tbody>
                    </table>
                </div>
            </section>
            <div className='my-5'>
                <h2 className='text-warning mb-5'>Add Course</h2>
            </div>
            <div className='container '>
                <div className='d-flex align-items-center justify-content-center mt-5 ' style={{ maxWidth: '1200px' }}>
                    <form className='container align-items-center' onSubmit={handleSubmit}>
                        <div className='d-flex mb-3 gap-4'>
                            <label htmlFor='coursename' className='col-2 text-light' style={{minWidth:"150px"}}>Course Name :</label>
                            <input
                                type="text"
                                name='coursename'
                                id='coursename'
                                className='form-control w-50'
                                placeholder='Enter Course Name'
                                value={detail.coursename}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className='d-flex mb-3 gap-4'>
                            <label htmlFor='description' className='col-2 text-light'style={{minWidth:"150px"}}>Course Description :</label>
                            <input
                                type="text"
                                name='description'
                                id='description'
                                className='form-control w-50'
                                placeholder='Enter Course Description'
                                value={detail.description}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className='d-flex mb-3 gap-4'>
                            <label htmlFor='fees' className='col-2 text-light'style={{minWidth:"150px"}}> Course Fees :</label>
                            <input
                                type='text'
                                name='fees'
                                id='fees'
                                className='form-control w-50'
                                placeholder='Enter the Course Fees'
                                value={detail.fees}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className='d-flex mb-3 gap-4'>
                            <label htmlFor='duration' className='col-2 text-light'style={{minWidth:"150px"}}>Course Duration :</label>
                            <input
                                type='text'
                                name='duration'
                                id='duration'
                                className='form-control w-50'
                                placeholder='Enter the Course duration'
                                value={detail.duration}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </div>

                        <button
                            className='btn btn-primary d-block mx-auto'
                            type='submit'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Adding...' : 'Add Course'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddCourse