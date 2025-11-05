import React from 'react'
import { useEffect, useState } from 'react'
import AddCourse from './AddCourse'

const Admin = () => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    loadEntries()
  }, [])


  const loadEntries = () => {
    try {
      const savedEntries = JSON.parse(localStorage.getItem('EnquiryDetails')) || [];
      setEntries(Array.isArray(savedEntries) ? savedEntries : []);
    } catch (err) {
      console.log("Error ", err);
      alert("failed to load enguiry details")
      setEntries([]);
    }
  }


  const deleteEntries = (id) => {
    const updatedItems = entries.filter(entry => entry.id != id)
    localStorage.setItem("EnquiryDetails", JSON.stringify(updatedItems))
    setEntries(updatedItems)
  }


  const clearAll = () => {
    localStorage.removeItem("EnquiryDetails")
    setEntries([])
  }


  return (
    <>
      <div className='container my-4 adminpage'>
        <h2 className='text-center text-warning'>Admin Page</h2>
        <hr className="border border-warning w-25 mx-auto" />

        <nav className='navbar navbar-expand-lg navbar-dark fixed-top nav'>
          <div className='container borde'>
            <div className='d-flex align-items-center'>
              <img src='/assets/logo.png' className='rounded-circle border border-light p-2' height='60' alt="logo" />
              <h2 className='text-light m-0 fs-3 ms-3'>Success Academy</h2>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className='collapse navbar-collapse ' id="navbarNav">
              <ul className='navbar-nav me-auto mb-1 mb-lg-0 ms-1'>
                <li className='nav-item'><a className='nav-link' href='#enquiry'>Enquiry Details</a></li>
                <li className='nav-item'><a className='nav-link' href='#addcourse'>Add Courses</a></li>
              </ul>
              <div>
                <a href='/'><button id='logout' className='btn btn-warning '>Logout</button></a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <section id='enquiry'>
        <div>
          <h2 className='text-warning'>Enguiry Details</h2>
        </div>
        <div className="mb-3 d-flex justify-content-end gap-2">
          <button className="btn btn-sm btn-secondary" onClick={loadEntries}>Refresh</button>
          <button className="btn btn-sm btn-danger" onClick={clearAll} disabled={entries.length === 0}>Clear All</button>
        </div>
        <div className=''>
          {entries.length === 0 ? (
            <h6>No enquiry received</h6>
          ) : (
            <div className='table-responsive'>
              <table className='table table-sm table-striped table-dark'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>MOBILE</th>
                    <th>EMAIL</th>
                    <th>COURSE</th>
                    <th>SUBMITTED AT</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((e, id) => (
                    <tr key={e.id ?? id}>
                      <td>{[id + 1]}</td>
                      <td>{e.name}</td>
                      <td>{e.mobile}</td>
                      <td>{e.email}</td>
                      <td>{e.course}</td>
                      <td>{e.submittedAt ? new Date(e.submittedAt).toLocaleString() : "-"}</td>
                      <td>
                        <button className='btn btn-sm btn-warning' onClick={() => deleteEntries(e.id)}>DELETE</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
      <section id='addcourse'>
        <AddCourse />
      </section>
    </>
  )
}

export default Admin