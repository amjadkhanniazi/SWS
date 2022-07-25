import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
export default function ApplyNowDocs() {
  return (
    <>
    <Navbar/>
    <section class="row d-flex justify-content-center" style={{ marginTop: "8%", width: "100%"}}>
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
                            <span class="font-weight-bold">5</span> 
                          </div>
                          <p class="position-absolute" style={{margin: "5% 0 0 41.5%", fontWeight: "bold"}}>Bank</p>
                        </div>    
          
      </div>
< hr />

  
    <div class="text-center" style={{marginBottom: "4%", marginTop: "3%"}}> 
      <h4>Upload Documents</h4>
    </div>

<form>
    <div style={{marginLeft: "20%"}}>
  
    <div class="mb-4 w-75">
        
            <label for="formFileLg" class="form-label">CNIC Front Side</label>
            <input class="form-control form-control-lg" id="formFileLg" type="file" />
        
    </div>

    <div class="mb-4 w-75">
            
            <label for="formFileLg" class="form-label">CNIC Back Side</label>
            <input class="form-control form-control-lg" id="formFileLg" type="file" />
        
    </div>

    <div class="mb-4 w-75">
            
        <label for="formFileLg" class="form-label">Electricity Bill</label>
        <input class="form-control form-control-lg" id="formFileLg" type="file" />
    
    </div>


    <div class="mb-4 w-75">
            
        <label for="formFileLg" class="form-label">Gas Bill</label>
        <input class="form-control form-control-lg" id="formFileLg" type="file" />
    
    </div>


    <div class="mb-4 w-75">
            
        <label for="formFileLg" class="form-label">Recent Untility Bill</label>
        <input class="form-control form-control-lg" id="formFileLg" type="file" />
    
    </div>
</div>

  
      <p>This Information will be used during varification and and other contact purposes</p>
    
    <div class="row">
      <div class="col">
        <Link to="/apcont">
        <button type="button" class="btn btn-primary mb-4">Back</button>
        </Link>
      </div>
      <div class="col">
        <Link to='/apbank'>
        <button type="button" class="btn btn-primary mb-4" style={{marginLeft: "75%"}}>Next</button>
        </Link>
      </div>
    </div>

  </form>

</div>
</section>
<Footer/>
</>
  )
}
