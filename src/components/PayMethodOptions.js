import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
function PayMethodOptions() {
  return (
    <>
    <Navbar/>
    
<section className="row d-flex justify-content-center" style={{marginTop: "6.5%" , width: "100%"}} >
  <div className="tab-content col-md-6 shadow-1-strong" style={{borderRadius: "10px"}}>
  
    <div className="container d-flex justify-content-center align-items-center mb-4">

      <div className="progresses">
      
      
                          <div className="steps  ">
                            <span><i className="fa fa-check"></i></span>
                          </div>
                          <p className="position-absolute" style={{margin: "65px 0 0 -12px"}}><strong>Methods</strong></p>
      
                          <span className="line "></span>
                          
                          <div className="steps">
                            <span className="font-weight-bold">2</span>
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

<h2 className="text-center mt-4">Please Select your Payment Method</h2>
<div className=" d-flex justify-content-center mb-5" style={{marginTop: "10%"}}>


<div className="d-inline ">
  <a className="btn btn-primary" href="/carddet">
    <img src="https://img.icons8.com/color/344/bank-card-back-side.png" height="96px" width="96px" alt="" />
    <p>Debit/Credit Card</p>
  </a>
</div>

<div className="d-inline mx-5">
  <a className="btn btn-primary" href="/mobpay">
    <img src="https://startuppakistan.com.pk/wp-content/uploads/2022/01/word-image-135.jpeg" height="96px" width="96px" alt="" />
    <p>EasyPaisa/JazzCash</p>
  </a>
</div>

<div className="d-inline ">
  <a className="btn btn-primary" href="/cashbyhand" >
    <img src="https://img.icons8.com/color/344/cash-in-hand.png" height="96px" width="96px" alt="" />
    <p>Cash Handover</p>
  </a>
</div>

</div>

<div className="my-3 ">
  <a href='home'>
  <button type="button" className="btn btn-primary btn-lg  btn-rounded mx-4">
      <i className=" fst-normal ">Back</i>
    </button> 
    </a> 
  </div>

</div>
</section>
<Footer/>
</>

  )
}

export default PayMethodOptions