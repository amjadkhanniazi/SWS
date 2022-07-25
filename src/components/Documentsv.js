import React from 'react'
import Navbar from './Navbar'
function Documentsv() {
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

              src="./img/10.jpg" style={{height:"84%",width:"100%"}}

              alt="Sample photo"

              className="img-fluid"

            />

          </div>

          <div className="col-xl-6">

            <div className="card-body p-md-5 text-black">

              <h3 className="mb-5 text-uppercase">

                Volunteer Application

              </h3>

              <h4>Documents upload</h4>


              <div className="form-outline mb-4">

                <label className="form-label" for="customFile">

                  CNIC Frontend

                </label>

                <input

                  type="file"

                  class="form-control"

                  id="customFile"

                  style={{ border: "1px solid black" }}

                />

              </div>

              <div className="form-outline mb-4">

              <label className="form-label" for="customFile">

                  CNIC Backend

                </label>

                <input

                  type="file"

                  class="form-control"

                  id="customFile"

                  style={{ border: "1px solid black" }}

                />

              </div>

              <div className="form-outline mb-4">

              <label className="form-label" for="customFile">

                  Electricity Bill

                </label>

                <input

                  type="file"

                  class="form-control"

                  id="customFile"

                  style={{ border: "1px solid black" }}

                />

              </div>

              <div className="form-outline mb-4">

              <label className="form-label" for="customFile">

                  Gas Bill

                </label>

                <input

                  type="file"

                  class="form-control"

                  id="customFile"

                  style={{ border: "1px solid black" }}

                />

              </div>

              
               

              
                

              
               

              <div className="d-flex justify-content-end pt-3">

              

                <a href="/ques">

                  {" "}

                  <button

                    type="button"

                    className="btn btn-primary btn-lg ms-2"

                  >

                    Save & Next

                  </button>

                </a>{" "}

              </div>

            </div>

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

export default Documentsv