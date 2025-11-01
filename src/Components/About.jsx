import React from 'react'

const About = () => {
  return (
    <>
    <section className="about container text-light py-5">
      <div className="text-center mb-4">
        <h2 className="heading">ABOUT US</h2>
        <hr className="border border-warning w-25 mx-auto" />
      </div>

      <div className="row align-items-center">
        <div className="col-6">
          <img
            src="/assets/about.png"
            alt="Success Academy"
            className="img-fluid rounded-4 shadow-lg"
            width='50%'
          />
        </div>

        <div className="col-6">
          <h3 className="text-warning">Success Academy — Where Learning Leads to Success</h3>
          <p>
            At <strong>Success Academy</strong>, we believe education is not just about grades —
            it’s about <em>growth, confidence, and discovering potential</em>. Founded in
            <strong> Coimbatore, Kinathukadavu</strong>, our mission is to empower every learner
            with the skills and mindset needed to excel in both academics and life.
          </p>
          <p>
            We offer a range of courses — from <strong>Spoken English</strong> and
            <strong> Handwriting Improvement</strong> to <strong>Programming Languages</strong> like
            Python, C/C++, and Java. Each course combines theory with practical application,
            ensuring students gain hands-on experience and real-world knowledge.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card bg-dark text-light border-warning shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title text-warning">Our Vision</h5>
              <p className="card-text">
                To become a center of excellence in education — nurturing young minds to be
                confident communicators, creative thinkers, and capable leaders.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-dark text-light border-warning shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title text-warning">Our Mission</h5>
              <ul className="card-text">
                <li>Provide quality education through innovative methods.</li>
                <li>Help students discover and develop their unique strengths.</li>
                <li>Create a supportive and inspiring learning environment.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-dark text-light border-warning shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title text-warning">Why Choose Us?</h5>
              <ul className="card-text">
                <li>Qualified and passionate faculty</li>
                <li>Student-centered teaching</li>
                <li>Well-structured, updated curriculum</li>
                <li>Focus on both academic and personal development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4 className="text-warning">Join Us</h4>
        <p>
          At Success Academy, we don’t just teach — we <strong>transform learners into achievers</strong>.
          Join our growing family and take your first step toward success!
        </p>
      </div>
    </section>
    </>
  )
}

export default About