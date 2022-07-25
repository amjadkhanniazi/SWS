import React from 'react';
export default function AddnewEvent(){
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">

          <a className="navbar-brand" target="_blank" href="dhttps://mdbootstrap.com/docs/stanard/">
            Social Welfare
          </a>
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01" style={{marginLeft: "40%"}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link mx-2" aria-current="page" href="#intro">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                  target="_blank">Volunteer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="https://mdbootstrap.com/docs/standard/" target="_blank">Cases</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="https://mdbootstrap.com/docs/standard/" target="_blank">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="https://mdbootstrap.com/docs/standard/" target="_blank">Apply Now</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="https://mdbootstrap.com/docs/standard/" target="_blank">Login</a>
              </li>

            </ul>
            <button type="button" className="btn btn-primary">Donate</button>
          </div>
        </div></nav>
    <section className="row d-flex justify-content-center" style={{marginTop: "8%", width: "100%"}}>
        <div className="tab-content col-md-6 shadow-1-strong" style={{borderRadius: "10px"}}>
        
          <div className="container d-flex justify-content-center align-items-center mb-4">

            <div className="progresses">
              <div className="container mt-3">
                <h2>Add new Project</h2>
                <div className="mb-3 mt-3">
                  <label htmlFor="Title of Project" className="form-label">Project:</label>
                  <input type="Title of Project" className="form-control" id="Project" placeholder="Enter title of Project" name="Project"/>
                  </div>
                <div className="mb-3">
                  <label htmlFor="Description" className="form-label">Description:</label>
                  <input type="Description" className="form-control" id="Description" placeholder="Add Description " name="Description"/>
                  </div>
                <div className="mb-3">
                  <label htmlFor="Details" className="form-label">Detail:</label>
                  <input type="Detail" className="form-control" id="Detail" placeholder="Add Details" name="Detail"/>

                  </div>
                <div className="form-check mb-3">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="Add"/> Want to add
                    </label>
                </div>
                <div className="d-grid">
                  <button type="button" className="btn btn-primary btn-block">Add Project</button>
         
              </div>
              </div>
              </div>
          </div>
          </div>
          </section>
          </>
        )
        }