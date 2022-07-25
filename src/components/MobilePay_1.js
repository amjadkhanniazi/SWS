import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function MobilePay_1() {
  return (
    <>
    <Navbar/>
    <section class="row d-flex justify-content-center" style={{marginTop: "6.5%", width: "100%"}}>
    <div class="tab-content col-md-6 shadow-1-strong" style={{borderRadius: "10px"}}>
      
      <div class="container d-flex justify-content-center align-items-center mb-4">
  
          <div class="progresses">
          
          
                              <div class="steps  ">
                                <span><i class="fa fa-check"></i></span>
                              </div>
                              <p class="position-absolute" style={{margin: "65px 0 0 -12px"}}><strong>Methods</strong></p>
          
                              <span class="line "></span>
                              
                              <div class="steps">
                                <span class="fa fa-check"></span>
                              </div>
                              <p class="position-absolute" style={{margin: "65px 0 0 235px"}}><strong>Details</strong></p>
          
                              <span class="line"></span>
          
                              <div class="steps">
                                <span class="font-weight-bold">3</span>
                              </div>
                              <p class="position-absolute" style={{margin: "65px 0 0 448px"}}><strong>Confirmation</strong></p> 
    
                             </div>    
              
          </div>
    <hr />
  
  <h4 class="text-center">Mobile Account Details</h4>
  <div>
  
      <select class="form-select w-50 mt-4" aria-label="Default select example" style={{marginLeft: "24.4%"}}>
          <option selected>Select an Operater</option>
          <option value="easypaisa">EasyPaisa</option>
          <option value="jazzcash">JazzCash</option>
          <option value="upaisa">UPaisa</option>
        </select>
   
        <div class="form-outline w-50 my-4" style={{marginLeft: "24.4%"}}>
          <input type="" id="mobAcc" placeholder="0344XXXXXXX" maxlength="11" minlength="11" class="form-control" />
          <label class="form-label"   for="MobAcc">Mobile Account Number</label>
        </div>
  
        <div class="form-outline w-50 my-4" style={{marginLeft: "24.4%"}}>
          <input type="" id="mobAccname" placeholder="Account Holder's Name" maxlength="20" minlength="3" class="form-control" />
          <label class="form-label"   for="MobAccname">Account Title</label>
        </div>
  
        <div class="form-outline w-50 my-4" style={{marginLeft: "24.4%"}}>
          <input type="text" id="typeExp" class="form-control form-control-lg" placeholder="Please Specify Amount to Donate"
            size="7"  minlength="1" />
          <label class="form-label" for="typeExp">Amount</label>
        </div>
  
        <div style={{marginLeft: "24.4%"}} class="my-4">
          <Link to='/paymethodoption' class="btn btn-primary btn-lg">
              Back
            </Link>
             
          <Link to ="/confirmcard" class="btn btn-primary btn-lg " style={{marginLeft: "23.5%"}}>
              <i class=" fst-normal ">Confirm</i>
            </Link>
          
          </div>
  
  </div>
  
    </div>
  </section>
  <Footer/>
  </>
  
  )
}
