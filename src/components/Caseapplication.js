import React from 'react'

function Caseapplication() {
  return (
    <div>
        <div className="d-flex" id="wrapper">
            {/* Sidebar */}
            <div className="bg-white" id="sidebar-wrapper">
              <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i className />Social Welfare</div>
              <div className="list-group list-group-flush my-3">
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text active"><i className="fas fa-tachometer-alt me-2" />Dashboard</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />New Cases</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Spam Cases</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Approved Cases</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />New volunteers</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Spam Volunteers</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Approved Volunteer</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Volunteer Reference</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Projects</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Categories</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i className="fas fa-power-off me-2" />Logout</a>
              </div>
            </div>
            {/* Application form */}
            <section className="h-100 ">
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col">
                    <div className="card card-registration my-4" style={{width: '55rem'}} id="card-application">
                      <div className="row g-0">
                      </div>
                      <div className="col-xl-6">
                        <div className="card-body p-md-5 text-black">
                          <h3 className="mb-5 text-uppercase">Application form</h3>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="form3Example1m">First name</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="form3Example1n">Last name</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="form3Example1m1">Username</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="form3Example1m1">Video URL</label>
                              </div>
                            </div>
                          </div>
                          <div className="form-outline mb-4">
                            <input type="text" id="form3Example8" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Example8">Address</label>
                          </div>
                          <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                            <h6 className="mb-0 me-4">Gender: </h6>
                            <div className="form-check form-check-inline mb-0 me-4">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" defaultValue="option1" />
                              <label className="form-check-label" htmlFor="femaleGender">Female</label>
                            </div>
                            <div className="form-check form-check-inline mb-0 me-4">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" defaultValue="option2" />
                              <label className="form-check-label" htmlFor="maleGender">Male</label>
                            </div>
                            <div className="form-check form-check-inline mb-0">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" defaultValue="option3" />
                              <label className="form-check-label" htmlFor="otherGender">Other</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <select className="select">
                                <option value={1}>State</option>
                                <option value={2}>Punjab</option>
                                <option value={3}>Sindh</option>
                                <option value={4}>kpk</option>
                              </select>
                            </div>
                            <div className="col-md-6 mb-4">
                              <select className="select">
                                <option value={1}>City</option>
                                <option value={2}>Option 1</option>
                                <option value={3}>Option 2</option>
                                <option value={4}>Option 3</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-outline mb-4">
                            <input type="text" id="form3Example9" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Example9">CNIC No</label>
                          </div>
                          <div className="form-outline mb-4">
                            <input type="text" id="form3Example90" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Example90">code</label>
                          </div>
                          <div className="form-outline mb-4">
                            <input type="text" id="form3Example99" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Example99">Password</label>
                          </div>
                          <div className="form-outline mb-4">
                            <input type="text" id="form3Example97" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Example97">Email ID</label>
                          </div>
                          <label htmlFor="formFileMultiple" className="form-label"> Documents</label>
                          <div className="d-flex justify-content-end pt-3">
                            <button type="button" className="btn btn-light btn-lg">Add to approved list</button>
                            <button type="button" className="btn btn-warning btn-lg ms-2">Add to Spam list</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section></div>
        </div>
  
  )
}

export default Caseapplication