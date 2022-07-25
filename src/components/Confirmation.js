import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <>
    <Navbar/>
      <section className="row d-flex justify-content-center" style={{marginTop: "6.5%", width: "100%"}}>
    <div className="tab-content col-md-6 shadow-1-strong" style={{borderRadius: "10px"}}>
    
        <div className="container d-flex justify-content-center align-items-center mb-4">

            <div className="progresses">
            
            
                                <div className="steps  ">
                                  <span><i className="fa fa-check"></i></span>
                                </div>
                                <p className="position-absolute" style={{margin: "65px 0 0 -12px"}}><strong>Methods</strong></p>
            
                                <span className="line "></span>
                                
                                <div className="steps">
                                  <span className="fa fa-check"></span>
                                </div>
                                <p className="position-absolute" style={{margin: "65px 0 0 235px"}}><strong>Details</strong></p>
            
                                <span className="line"></span>
            
                                <div className="steps">
                                  <span className="fa fa-check"></span>
                                </div>
                                <p className="position-absolute" style={{margin: "65px 0 0 448px"}}><strong>Confirmation</strong></p> 
      
                               </div>    
                
            </div>
      <hr />
      
      <div>
        <div>
        <h3 className="text-center">Confirmation</h3>
    </div>
    <div className="d-flex justify-content-center">
        <img  src="https://img.icons8.com/officel/344/approval.png"  width="170px" height="170px" alt="" />
    </div>
<p className="text-center my-2">Thank You for your Donation!!</p>


    </div>
    <div>
<p className="text-center my-2">Navigate to:</p>
</div>
    <div className="text-center mt-2 mb-3">
<Link to="/dashboardapplicant" className="btn btn-primary" >Dashboard</Link>

  </div>
  </div>
  </section>
    <Footer />
    </>
  );
}
