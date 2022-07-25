import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (

    <footer className="text-center text-lg-start  text-muted" style={{backgroundColor: "#4d4d4f", marginTop:"10%"}}>
   
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        style={{color: "white"}}>
    
        <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
        </div>
    
        <div>
            <Link to="/" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
            </Link>

            <Link to="/" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
            </Link>
         
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
                Our vision is to reduce the poverty and built the well organized and powerfull team of vooluteers to help people in Less time .
                </p>
            </div>
        
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
                <h6 className="text-uppercase fw-bold mb-4">
                Navigation
                </h6>
                <p>
                <Link to="home" className="text-reset">Home</Link>
                </p>
                <p>
                <Link to="/about" className="text-reset">AboutUs</Link>
                </p>
                <p>
                <Link to="/contactus" className="text-reset">ContactUs</Link>
                </p>
                <p>
                <Link to="/apprules" className="text-reset">ApplyNow</Link>
                </p>
            </div>
            

            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                Explore
                </h6>
                <p>
                <Link to="/allproj" className="text-reset">Projects</Link>
                </p>
                <p>
                <Link to="/allevent" className="text-reset">Events</Link>
                </p>
                <p>
                <Link to="/reportpage" className="text-reset">Reports</Link>
                </p>
                <p>
                <Link to="/volunteer" className="text-reset">Become Volunteer</Link>
                </p>
            </div>
            

            
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
                <h6 className="text-uppercase fw-bold mb-4">
                Contact
                </h6>
                <p><i className="fas fa-home me-3"></i>Computer Science Department UET Lahore, Pakistan</p>
                <p>
                <i className="fas fa-envelope me-3"></i>
                socialwelfare@gmail.com
                </p>
                <p><i className="fas fa-phone me-3"></i> + 92 318 417 6600</p>
                <p><i className="fas fa-print me-3"></i> + 92 349 511 1397</p>
            </div>
            
            </div>
        
        </div>
        
        </section>

        <section>
        <div class="text-center p-4 border-top" style={{color:"white"}}>
    © 2021 Copyright:
    <Link class="text-reset fw-bold" to="https://mdbootstrap.com/">SocialWelfareSystem.com</Link>
  </div>
        </section>    
  </footer>
  )
}
