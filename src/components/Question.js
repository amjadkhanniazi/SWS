import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
function Question() {
  return (
    <div>
      <Navbar/>
      <section className="h-100 ">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="./img/10.jpg"
                      style={{ height: "84%", width: "100%" }}
                      alt="Sample photo"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        Volunteer Application
                      </h3>

                      <h4>Interview Questions</h4>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="customFile">
                          Why you want to become a Volunteer?
                        </label>

                        <div className="form-outline">
                          <input
                            type="text"
                            id="formControlLg"
                            style={{ border: "1px solid black" }}
                            class="form-control form-control-lg"
                          />
                          <label className="form-label" for="formControlLg">
                            Answer
                          </label>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="customFile">
                          What is your motivation to become a volunteer?
                        </label>

                        <div className="form-outline">
                          <input
                            type="text"
                            id="formControlLg"
                            style={{ border: "1px solid black" }}
                            class="form-control form-control-lg"
                          />
                          <label className="form-label" for="formControlLg">
                            Answer
                          </label>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="customFile">
                          What skills do you have to become a volunteer?
                        </label>

                        <div className="form-outline">
                          <input
                            type="text"
                            id="formControlLg"
                            style={{ border: "1px solid black" }}
                            class="form-control form-control-lg"
                          />
                          <label className="form-label" for="formControlLg">
                            Answer
                          </label>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="customFile">
                          Do u have experience of doing volunteer work?
                        </label>

                        <div className="form-outline">
                          <input
                            type="text"
                            id="formControlLg"
                            style={{ border: "1px solid black" }}
                            class="form-control form-control-lg"
                          />
                          <label className="form-label" for="formControlLg">
                            Answer
                          </label>
                        </div>
                        
               
                      </div>
                    </div>
                    <div className="d-flex justify-content-end pt-3 ">
                 
                 <Link to="/dashboard"> <button style={{position:"absolute",top:"90%",left:"85%"}}  type="button" 
                 className="btn btn-primary btn-lg ms-2">Submit </button>
                 </Link> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Question