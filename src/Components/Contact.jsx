import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    course: ''
  })
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('EnquiryDetails')) || [];
    console.log("Saved Entries:", savedEntries);
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ExistingDetails = JSON.parse(localStorage.getItem("Old Enquiry Details",)) || [];

    const newEntries = {
      ...form,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    }

  }

  return (
    <>
      <div className="container contact my-4">
        <h2 className="heading text-light text-center">CONTACT US</h2>
        <hr className=" w-25 mx-auto" />
        <div className="row">
          <div className="col-12 col-md-6  border-light p-3">
            <br></br>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435.95480976481616!2d77.02371607768399!3d10.826907734425351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84f6725f184d5%3A0xe40716d0161f487a!2sKinathukadavu%2C%20Tamil%20Nadu%20642109!5e0!3m2!1sen!2sin!4v1761141391798!5m2!1sen!2sin"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <br></br>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill text-warning fs-4 me-2" />
              <span className="text-light">Old Bus Stand, Kinathukadavu, Coimbatore - 642109</span>
            </p>            <br></br>
            <h2 className="text-warning">Get In Touch</h2>

            <p className="mb-1">
              <i className="bi bi-envelope-at-fill text-warning fs-4 me-2" />
              <span className="text-light">abcdef@email.com</span>
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill text-warning fs-4 me-2" />
              <span className="text-light">+91 1234567890</span>
            </p>
          </div>

          <div className="col-12 col-md-6 p-3">
            <h3 className="text-warning text-center">FOR ENQUIRY</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-light">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={20}
                  required
                />
                <div className="form-text text-warning">(Must be 0–20 characters)</div>
              </div>

              <div className="mb-3">
                <label htmlFor="mobile" className="form-label text-light">Mobile No</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  className="form-control"
                  placeholder="Enter Mobile-No"
                  value={form.mobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
                <div className="form-text text-warning">(Must be 10 digits)</div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter Your E-mail"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="course" className="form-label text-light">Course Required</label>
                <select
                  id="course"
                  name="course"
                  className="form-select"
                  value={form.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a course</option>
                  <option value="Spoken">Spoken English</option>
                  <option value="handwriting">Hand Writing</option>
                  <option value="drawing">Drawing</option>
                  <option value="python">Python</option>
                  <option value="cpp">C / C++</option>
                  <option value="java">Java</option>
                </select>
              </div>

              <button type="submit" className="btn btn-warning">Submit Enquiry</button>
            </form>
          </div>


        </div>
      </div>
    </>
  )
}

export default Contact