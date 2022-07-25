import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
function Casedoc() {
  return (
    <div>
        <Navbar/>
         <section
        className="h-100 h-custom"
        style={{ backgroundcolor: "#8fc4b7" ,marginTop:"10%"}}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img
                  src="./img/10.jpg"
                  className="w-100"
                  alt="Sample photo"
                />
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    Case Description
                  </h3>

                  <form className="px-md-2">
                    <h5>Personal Information</h5>
                    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1" className="form-control" 
          style={{border:"1px solid black"}}/>
          <label className="form-label" htmlFor="form6Example1">First Name</label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example2" className="form-control" style={{border:"1px solid black"}}/>
          <label className="form-label" htmlFor="form6Example2">Last Name</label>
        </div>
      </div>
      
    </div>
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1" className="form-control"
           style={{border:"1px solid black"}} />
          <label className="form-label" htmlFor="form6Example1">CNIC</label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example2"  style={{border:"1px solid black"}}
           className="form-control" />
          <label className="form-label" htmlFor="form6Example2">Martial Status</label>
        </div>
      </div>
    </div>
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1"
           style={{border:"1px solid black"}}  className="form-control" />
          <label className="form-label" htmlFor="form6Example1">House</label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example2"  style={{border:"1px solid black"}}
          className="form-control" />
          <label className="form-label" htmlFor="form6Example2">House Area</label>
        </div>
      </div>
    </div>
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1"  style={{border:"1px solid black"}}
           className="form-control" />
          <label className="form-label" htmlFor="form6Example1">No.of Children</label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example2"  style={{border:"1px solid black"}}
           className="form-control" />
          <label className="form-label" htmlFor="form6Example2">Category</label>
        </div>
      </div>
    </div>
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1" style={{border:"1px solid black"}}
           className="form-control" />
          <label className="form-label" htmlFor="form6Example1">Monthly Income</label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example2"  style={{border:"1px solid black"}}
           className="form-control" />
          <label className="form-label" htmlFor="form6Example2">Monthly Allowance</label>
        </div>
      </div>
    </div>
    <h4>Home Address</h4>
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1"  style={{border:"1px solid black"}}
           className="form-control" />
          <label className="form-label" htmlFor="form6Example1">Current Address</label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example2"  style={{border:"1px solid black"}}
          className="form-control" />
          <label className="form-label" htmlFor="form6Example2">Permanent Address</label>
        </div>
      </div>
    </div>
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1"  style={{border:"1px solid black"}}
           className="form-control" />
          <label className="form-label" htmlFor="form6Example1">Nearby Famous Place1</label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example2"
           style={{border:"1px solid black"}} className="form-control" />
          <label className="form-label" htmlFor="form6Example2">NearbY Famous Place 2</label>
        </div>
      </div>
    </div>
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1"  style={{border:"1px solid black"}}
          className="form-control" />
          <label className="form-label" htmlFor="form6Example1">Provie</label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example2"  style={{border:"1px solid black"}}
          className="form-control" />
          <label className="form-label" htmlFor="form6Example2">City</label>
        </div>
      </div>
    </div>
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1"  style={{border:"1px solid black"}}
          className="form-control" />
          <label className="form-label" htmlFor="form6Example1">Avg Monthly Gas Bill</label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example2"  style={{border:"1px solid black"}}
          className="form-control" />
          <label className="form-label" htmlFor="form6Example2">Postal code</label>
        </div>
      </div>
    </div>
    <h4>Contact Information</h4>
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1"  style={{border:"1px solid black"}}
          className="form-control" />
          <label className="form-label" htmlFor="form6Example1">Phoe no1</label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example2"  style={{border:"1px solid black"}}
          className="form-control" />
          <label className="form-label" htmlFor="form6Example2">Phone no 2</label>
        </div>
      </div>
    </div>
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1" 
           style={{border:"1px solid black"}} className="form-control" />
          <label className="form-label" htmlFor="form6Example1">Email</label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example2"
           style={{border:"1px solid black"}}
           className="form-control" />
          <label className="form-label" htmlFor="form6Example2">Additional Comment</label>
        </div>
      </div>
    </div>
                                    
                   
                     
                     
                       
                      

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg mb-1"
                    >
                      Download
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
    <div class="card-body p-4 p-md-5">
        <label class="label" for="subject">Remarks</label>
        <input type="text" class="form-control" name="subject" id="subject" 
          style={{border:"1px solid black"}}
        placeholder="Comment"/>
        <button type="submit" class="btn btn-primary btn-lg mb-1 mt-4">Accepted</button>
        <button type="submit" style={{marginLeft:"5%"}} class="btn btn-primary btn-lg mb-1">Rejected</button>
      </div>
    </div>
    </div>
  )
}

export default Casedoc