import React from 'react'
import { Link } from 'react-router-dom'
export default function CardDetails() {
  return (
    <section class="row d-flex justify-content-center" style={{marginTop: "6.5%", width: "100%",  height: "505px"}}>
<div class=" col-md-6 shadow-1-strong" style={{borderRadius: "10px"}}>

  <div class="container d-flex justify-content-center align-items-center mb-4">

    <div class="progresses" >
    
    
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



          <div class="card-body p-4" >
              <h3 class="text-center mb-3 " style={{marginTop: "-3%"}} >Card Details</h3>
              
            <form >
              <div style={{position: "relative"}}>
              <div class="form-outline w-50 " style={{ position: "absolute", marginLeft: "26%"}}>
                <div class="form-outline w-100" >
                  <input type="text" id="typeText" class="form-control 
                  form-control-lg" siez="17"
                  style={{border:"1px solid black"}}
                    placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                  <label class="form-label" for="typeText">Card Number</label>
                
              </div>
                
              </div>

              <div class="form-outline w-50 " style={{ position: "absolute", marginTop: "10%", marginLeft: "26%"}}>
                  <div class="form-outline w-100">
                    <input type="text" id="typeName" 
                    style={{border:"1px solid black"}}class="form-control form-control-lg" size="17"
                      placeholder="Cardholder's Name" />
                    <label class="form-label" for="typeName">Cardholder's Name</label>
                  </div>
                </div>

              
                <div class="form-outline" style={{ position: "absolute", marginTop: "20%", marginLeft: "26%"}}>
                  <input type="text" id="typeExp"
                  style={{border:"1px solid black"}} class="form-control form-control-lg" placeholder="MM/YYYY"
                    size="7"  minlength="7" maxlength="7" />
                  <label class="form-label" for="typeExp">Expiration</label>
                </div>
                <div class="form-outline" style={{ position: "absolute", marginTop: "20%", marginLeft: "61%"}}>
                  <input type="password" id="typeText2" 
                  style={{border:"1px solid black"}} class="form-control form-control-lg"
                    placeholder="&#9679;&#9679;&#9679;" size="3" minlength="3" maxlength="3" />
                  <label class="form-label" for="typeText2">CVV</label>
                </div>
              

              <div class="form-outline w-50 " style={{ position: "absolute", marginTop: "30%", marginLeft: "26%"}} >
                  <input type="text" id="typeExp" 
                  style={{border:"1px solid black"}} class="form-control form-control-lg" placeholder="Please Specify Amount to Donate"
                    size="7"  minlength="1" />
                  <label class="form-label" for="typeExp">Amount</label>
                </div>

                <div class="form-check " style={{ position: "absolute", marginTop: "40%", marginLeft: "27%"}}>
                  <input class="form-check-input" 
                  style={{border:"1px solid black"}}type="checkbox" value="" id="flexCheckDefault"  />
                  <label class="form-check-label" for="flexCheckDefault"  >Save Card?</label>
                </div>
              </div>
              <div style={{ position: "absolute", marginTop: "20.5%", marginLeft: "12%", borderRadius: "100%"}}>
                <Link to='home'>
                <button type="button" class="btn btn-primary btn-lg" >
                    Back
                  </button>
                  </Link>
              </div> 
              
              <div style={{ position: "absolute", marginTop: "20.5%", marginLeft: "25.5%"}}>
             
                <Link to ="/confirmcard" class="btn btn-primary btn-lg">
                    <i class=" fst-normal ">Confirm</i>
                  </Link>
                  
                </div>
             </form>
              </div>
              
          
</div>
</section>
  )
}
