import React from "react";
import Navbar from "./Navbar";
// import imge1 from "./images/img1.jpg";
import "./styles.css";
export default function Application() {
  return (
    <>
   <Navbar/>
      <section className="h-100 ">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="./img/10.jpg" style={{height:"84%",width:"100%"}}
                alt="" className="img-fluid"
                 />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Volunteer Application</h3>
                <h4>Personal Information</h4>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline" >
                      <input  style={{border:"1px solid black"}} type="text" id="form3Example1m" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input style={{border:"1px solid black"}} type="text" id="form3Example1n" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input style={{border:"1px solid black"}} type="text" id="form3Example1m1" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1m1">Martial Status</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input style={{border:"1px solid black"}} type="text" id="form3Example1n1" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1n1">Email</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input  style={{border:"1px solid black"}} type="text" id="form3Example8" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example8">Current Address</label>
                </div>
                <div className="form-outline mb-4">
                  <input  style={{border:"1px solid black"}} type="text" id="form3Example8" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example8">Permanent Address</label>
                </div>
                <div className="form-outline mb-4">
                  <input  style={{border:"1px solid black"}} type="text" id="form3Example8" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example8">Near Famous Location</label>
                </div>
                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input  style={{border:"1px solid black"}} className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label className="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">City</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input style={{border:"1px solid black"}} type="text" id="form3Example9" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example9">DOB</label>
                </div>

                

               
              
                <div className="d-flex justify-content-end pt-3">
                 <a href="#!"> <button type="button" className="btn btn-light btn-lg">Save</button>
                 </a>
                 <a href="/coninfo"> <button type="button" className="btn btn-primary btn-lg ms-2">Next</button>
                 </a> </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<footer className="text-center text-lg-start  text-muted" style={{backgroundColor: "#4d4d4f"}}>
   
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        style={{marginTop: "10%", color: "white"}}>
    
        <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
        </div>
    
        <div>
            <a href="/" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 text-reset">
            <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 text-reset">
            <i className="fab fa-github"></i>
            </a>
        </div>
    
        </section>

        <section style={{ height:"240px" }}>
        <div className="container text-center text-md-start mt-5" style={{backgroundColor: "#4d4d4f", color: "white"}}>
        
            <div className="row mt-3">
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
                <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Social Welfare
                </h6>
                <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
        
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
                <h6 className="text-uppercase fw-bold mb-4">
                Navigation
                </h6>
                <p>
                <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                <a href="#!" className="text-reset">Laravel</a>
                </p>
            </div>
            

            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                Explore
                </h6>
                <p>
                <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                <a href="#!" className="text-reset">Help</a>
                </p>
            </div>
            

            
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
                <h6 className="text-uppercase fw-bold mb-4">
                Contact
                </h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
                </p>
                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            
            </div>
        
        </div>
        
        </section>

        <section>
        <div class="text-center p-4 bg-dark" style={{backgrounColor: "#4d4d4f", color:"white"}}>
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
        </section>    
  </footer>
    </>
  );
}
