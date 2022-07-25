import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Applynowaddress() {
  return (
    <>
    <Navbar/>
    <div style={{width:"80%", margin:"auto"}}></div>
<section className="row d-flex justify-content-center" style={{marginTop: "8%", width: "100%"}}>

  <div className="tab-content col-md-6 shadow-1-strong mb-4" style={{borderRadius: "10px"}}>


    {/* <!-- Progress Bar --> */}
    <div className="d-flex justify-content-center align-items-center my-4">

      <div className="progresses">
      
      
                          <div className="steps">
                            <span><i className="fa fa-check"></i></span>
                          </div>
                          <p className="position-absolute" style={{margin: "5% 0 0 0.2%", fontWeight: "bold"}}>Info</p>
      
                          <span className="line1 "></span>
                          
                          <div className="steps">
                            <span className="fa fa-check"></span>
                          </div>
                          <p className="position-absolute" style={{margin: "5% 0 0 9.6%", fontWeight: "bold"}}>Address</p>
      
                          <span className="line1"></span>
      
                          <div className="steps">
                            <span className="font-weight-bold">3</span>
                          </div>
                          <p className="position-absolute" style={{margin: "5% 0 0 19.9%", fontWeight: "bold"}}>Contact</p>

                          <span className="line1"></span>
                          
                          <div className="steps">
                            <span className="font-weight-bold">4</span>
                          </div>
                          <p className="position-absolute" style={{margin: "5% 0 0 29.5%", fontWeight: "bold"}}>Documents</p>

                          <span className="line1"></span>
                          
                          <div className="steps">
                            <span className="font-weight-bold">5</span> 
                          </div>
                          <p className="position-absolute" style={{margin: "5% 0 0 42%", fontWeight: "bold"}}>Bank</p>
                        </div>    
          
      </div>
<hr />

  
    <div className="text-center" style={{marginBottom: "4%", marginTop: "3%"}}> 
      <h4>Home Address</h4>
    </div>

<form>
    {/* <!-- Current address --> */}
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1"
          style={{border:"1px solid black"}}  className="form-control" />
          <label className="form-label" htmlFor="form6Example1">Current Address</label>
        </div>
      </div>
    </div>
  
    {/* <!-- Permanent address --> */}
    
    <div className="row mb-4">
      <div className="col">
      <div className="form-outline">
        <input type="text" id="CNIC"
        style={{border:"1px solid black"}}
        className="form-control" />
        <label className="form-label" htmlFor="CNIC">Permanant Address</label>
      </div>
    </div>
    </div>


    {/* <!-- Famous Place --> */}
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
            <input type="text" id="form6Example2" style={{border:"1px solid black"}}
            className="form-control" />
            <label className="form-label" htmlFor="form6Example2">Nearby Famous Place 1</label>
          </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example2" style={{border:"1px solid black"}}
          className="form-control" />
          <label className="form-label" htmlFor="form6Example2">Nearby Famous Place 2</label>
        </div>
      </div>
    </div>
  
    {/* <!-- Province/City --> */}
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1" style={{border:"1px solid black"}}
           className="form-control" />
          <label className="form-label" htmlFor="form6Example1">Province</label>
        </div>
      </div>

      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1" style={{border:"1px solid black"}}
           className="form-control" />
          <label className="form-label" htmlFor="form6Example1">City</label>
        </div>
      </div>
    </div>
  
    {/* <!-- Monthly income --> */}
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example1" style={{border:"1px solid black"}}
          className="form-control" />
          <label className="form-label" htmlFor="form6Example1">Town/Area</label>
        </div>
      </div>
      {/* <!-- Monthly Expenses --> */}
      <div className="col">
        <div className="form-outline">
          <input type="text" id="form6Example2" style={{border:"1px solid black"}}
          className="form-control" />
          <label className="form-label" htmlFor="form6Example2">Postal Code</label>
        </div>
      </div>
    </div>
  
    
  <p>*All fields are required. please provide Authentic data.</p>
    {/* <!-- Submit button --> */}
    <div className="row">
      <div className="col">
        <a href='/appinfo'>
        <button type="button" className="btn btn-primary mb-4">Back</button>
        </a></div>
      <div className="col">
       <a href='/apcont'> <button type="button" className="btn btn-primary mb-4" style={{marginLeft:"75%"}}>Next</button>
       </a>
      </div>
    </div>
    
  </form>
</div>
</section>
<Footer/>
</>
  )
}

export default Applynowaddress