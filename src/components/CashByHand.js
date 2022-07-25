import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function CashByHand() {
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
                                <span className="font-weight-bold">3</span>
                              </div>
                              <p className="position-absolute" style={{margin: "65px 0 0 448px"}}><strong>Confirmation</strong></p> 
    
                             </div>
              
          </div>
    <hr />
  
  <h4 className="text-center">Mobile Account Details</h4>
  <div>
  
      
   
        <div className="form-outline w-50 my-4" style={{marginLeft: "24.4%"}}>
          <input type="" id="mobAcc" placeholder="0344XXXXXXX" maxlength="11" minlength="11" className="form-control" />
          <label className="form-label"   for="MobAcc">Mobile Number*</label>
        </div>
  
        <div className="form-outline w-50 my-4" style={{marginLeft: "24.4%"}}>
          <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="Please Specify Amount to Donate"
            size="7" minlength="1" />
          <label className="form-label" for="typeExp">Amount</label>
        </div>
        <div style={{marginLeft: "24.4%"}}>
         <h6>Our Volunteer Will soon call you and Ask for</h6>
         <ul>
            <li>Your Name</li>
            <li>Street Address</li>
            <li>Confirm Amount</li>
            <li>Meeting time Confirmation</li>
         </ul>
        </div>
        <div style={{marginLeft: "25%"}} className="my-4">
        <Link to='/paymethodoption' class="btn btn-primary btn-lg">
              Back
            </Link>
             
          <Link to='/confirmcard'className="btn btn-primary btn-lg " style={{marginLeft: "28.5%"}}>
              <i className=" fst-normal ">Submit</i>
            </Link>
          
          </div>
  
  </div>
  
    </div>
  </section>
  <Footer/>
  </>
  )
}
