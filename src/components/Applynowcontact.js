import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from 'react-router-dom'
function Applynowcontact() {
  return (
    <>
    <Navbar/>
    
<section class="row d-flex justify-content-center" style={{marginTop: "8%", width: "100%"}}>
  <div class="tab-content col-md-6 shadow-1-strong mb-4" style={{borderRadius: "10px"}}>


    {/* <!-- Progress Bar --> */}
    <div class="d-flex justify-content-center align-items-center my-3">

      <div class="progresses" style={{marginBottom:"2%"}}>
      
      
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
                            <span class="font-weight-bold">4</span>
                          </div>
                          <p class="position-absolute" style={{margin: "5% 0 0 29%", fontWeight: "bold"}}>Documents</p>

                          <span class="line1"></span>
                          
                          <div class="steps">
                            <span class="font-weight-bold">5</span> 
                          </div>
                          <p class="position-absolute"  style={{margin: "5% 0 0 41.5%", fontWeight: "bold"}}>Bank</p>
                        </div>    
          
      </div>
<hr />

  
    <div class="text-center" style={{marginBottom: "4%", marginTop: "5%"}}> 
      <h4>Contact Info</h4>
    </div>

<form>
    {/* <!-- Current address --> */}
    <div class="row mb-4">
      <div class="col">
        <div class="form-outline">
          <input type="text" id="form6Example1"
           style={{border:"1px solid black"}} class="form-control" />
          <label class="form-label" for="form6Example1">Phone No.1*</label>
        </div>
      </div>
      <div class="col">
        <div class="form-outline">
          <input type="text" id="form6Example1"
          style={{border:"1px solid black"}}  class="form-control" />
          <label class="form-label" for="form6Example1">Phone No.2*</label>
        </div>
      </div>
    </div>
  
    {/* <!-- Email address -->
     */}
    <div class="row mb-4">
      <div class="col">
      <div class="form-outline">
        <input type="email" id="CNIC" 
        style={{border:"1px solid black"}}  class="form-control" />
        <label class="form-label" for="email">Email Address*</label>
      </div>
    </div>
    </div>

    {/* <!-- Additional Email --> */}
    <div class="row mb-4">
        <div class="col">
        <div class="form-outline">
          <input type="email" id="CNIC" 
          style={{border:"1px solid black"}} class="form-control" />
          <label class="form-label" for="email">Additional Email Address</label>
        </div>
      </div>
      </div>

    
      <p>This Information will be used during varification and and other contact purposes</p>
    {/* <!-- Submit button --> */}
    <div class="row">
      <div class="col">
        <Link to='/Linkpadr'>
        <button type="button" class="btn btn-primary mb-4">Back</button>
        </Link>
      </div>
      <div class="col">
        <Link to='/apdoc'>
        <button type="button" class="btn btn-primary mb-4" style={{marginLeft:"75%"}}>Next</button>
        </Link> </div>
    </div>
  </form>
</div>
</section>

<Footer/>
</>
  )
}

export default Applynowcontact