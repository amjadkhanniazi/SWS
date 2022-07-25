import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from 'react-router-dom'

export default function ApplyNowSuccess() {
  return (
    <>
    <Navbar/>
    <section class="row d-flex justify-content-center" style={{marginTop: "8%", width: "100%"}}>
  <div class="tab-content col-md-6 shadow-1-strong mb-4" style={{borderRadius: "10px"}}>


    <div class="container d-flex justify-content-center align-items-center my-3">

      <div class="progresses">
      
      
                          <div class="steps">
                            <span><i class="fa fa-check"></i></span>
                          </div>
                          <p class="position-absolute" style={{margin: "5% 0 0 0.2%", fontWeight: "bold"}}>Info</p>
      
                          <span class="line1 "></span>
                          
                          <div class="steps">
                            <span class="fa fa-check"></span>
                          </div>
                          <p class="position-absolute" style={{margin: "5% 0 0 9.6%", fontWeight: "bold"}}>Address</p>
      
                          <span class="line1"></span>
      
                          <div class="steps">
                            <span class="fa fa-check"></span>
                          </div>
                          <p class="position-absolute" style={{margin: "5% 0 0 19.9%", fontWeight: "bold"}}>Contact</p> 

                          <span class="line1"></span>
                          
                          <div class="steps">
                            <span class="fa fa-check"></span>
                          </div>
                          <p class="position-absolute" style={{margin: "5% 0 0 29%", fontWeight: "bold"}}>Documents</p>

                          <span class="line1"></span>
                          
                          <div class="steps">
                            <span class="fa fa-check"></span> 
                          </div>
                          <p class="position-absolute" style={{margin: "5% 0 0 41.5%", fontWeight: "bold"}}>Bank</p>
                        </div>    
          
      </div>
<hr />

  
    <div class="text-center" style={{marginBottom: "4%", marginTop: "3%"}}> 
      <h4>Application Submitted</h4>
    </div>
    <div class="d-flex justify-content-center">
        <img  src="https://img.icons8.com/officel/344/approval.png" width="170px" height="170px" alt="" />
    </div>
    <div class="text-center">
        <p style={{fontSize: "14px", marginLeft: "100px", marginRight: "100px"}}>Your application is in pending state. it will take 3-5 working days to verify your application.
            You can see your application status in your account dashboard</p>
    </div>

    <div>
        <p class="text-center my-2">Navigate to:</p>
        </div>
            <div class="text-center mt-2 mb-3">
        <button class="btn btn-primary" >Dashboard</button>
        
          </div>


</div>
</section>
<Footer/>
</>
  )
}
