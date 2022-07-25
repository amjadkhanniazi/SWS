import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
function ApplynowBank() {
  return (
    <>
    <Navbar/>
    <div style={{Width:"80%", margin:"auto"}}>
<section className="row d-flex justify-content-center" style={{marginTop: "8%", width: "100%"}}>
  <div className="tab-content col-md-6 shadow-1-strong mb-4" style={{borderRadius: "10px"}}>


    {/* <!-- Progress Bar --> */}
    <div className="container d-flex justify-content-center align-items-center my-3">

      <div className="progresses">
      
      
                          <div className="steps">
                            <span><i className="fa fa-check"></i></span>
                          </div>
                          <p className="position-absolute"  style={{margin: "5% 0 0 0.2%", fontWeight: "bold"}}>Info</p>
      
                          <span className="line1 "></span>
                          
                          <div className="steps">
                            <span className="fa fa-check"></span>
                          </div>
                          <p className="position-absolute"  style={{margin: "5% 0 0 9.6%", fontWeight: "bold"}}>Address</p>
      
                          <span className="line1"></span>
      
                          <div className="steps">
                            <span className="fa fa-check"></span>
                          </div>
                          <p className="position-absolute"  style={{margin: "5% 0 0 19.9%", fontWeight: "bold"}}>Contact</p> 

                          <span className="line1"></span>
                          
                          <div className="steps">
                            <span className="fa fa-check"></span>
                          </div>
                          <p className="position-absolute"  style={{margin: "5% 0 0 29%", fontWeight: "bold"}}>Documents</p>

                          <span className="line1"></span>
                          
                          <div className="steps">
                            <span className="fa fa-check"></span> 
                          </div>
                          <p className="position-absolute" style={{margin: "5% 0 0 41.5%", fontWeight: "bold"}}>Bank</p>
                        </div>    
          
      </div>
<hr />

  
    <div className="text-center" style={{marginBottom: "4%", marginTop: "3%"}}> 
      <h4>Bank/Mobile Account Info</h4>
      <p className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Similique veniam id autem quas sint architecto.</p>
    </div>

<form >
    {/* <!-- Current address --> */}
    <div className="row mb-4">
      <div className="col">
        <div className="form-check" style={{marginLeft: "0.8%"}}>
            <input className="form-check-input"
            style={{border:"1px solid black"}} type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">Mobile Account</label>
          </div>
      </div>
    </div>
  
    {/* <!-- Mobile Account Number --> */}
    
    <div className="row mb-4">
      <div className="col">
      <div className="form-outline">
        <input type="email" id="CNIC" 
        style={{border:"1px solid black"}}  className="form-control" />
        <label className="form-label" htmlFor="">Mobile Account Number</label>
      </div>
    </div>
    {/* <!-- Mobile Account Title --> */}
    <div className="col">
        <div className="form-outline">
          <input type="email" id="CNIC" 
          style={{border:"1px solid black"}} className="form-control" />
          <label className="form-label" htmlFor="email">Account Title</label>
        </div>
      </div>
    </div>

    {/* <!-- Mobile account Operater --> */}
    <div className="row mb-4">
        <div className="col">
        
            <select className="form-select" style={{width: "48%"}} aria-label="Default select example">
                <option selected>Select an Operater</option>
                <option value="easypaisa">EasyPaisa</option>
                <option value="jazzcash">JazzCash</option>
                <option value="upaisa">UPaisa</option>
              </select>

      </div>
      </div>

      <hr style={{height: "2px", border: "1px solid black"}} />

      {/* <!-- Bank account check box --> */}
      <div className="row mb-4">
        <div className="col mt-3">
          <div className="form-check" style={{marginLeft: "0.8%"}}>
              <input className="form-check-input"
              style={{border:"1px solid black"}}  type="checkbox" value="" id="flexCheckDefault1" />
              <label className="form-check-label" htmlFor="flexCheckDefault1">Bank Account</label>
            </div>
        </div>
      </div>

      {/* <!-- IBAN Number --> */}
      <div className="row mb-4">
        <div className="col">
        <div className="form-outline">
          <input type="email" id="CNIC"
          style={{border:"1px solid black"}} className="form-control" />
          <label className="form-label" htmlFor="">IBAN</label>
        </div>
      </div>
      </div>

      {/* <!-- Bank Account Title --> */}
      <div className="row mb-4">
        <div className="col">
        <div className="form-outline">
          <input type="email" id="CNIC" style={{border:"1px solid black"}}
          className="form-control" />
          <label className="form-label" htmlFor="">Account Title</label>
        </div>
      </div>

      {/* <!-- Bank Select --> */}
      <div className="col">
        <select className="form-select"  aria-label="Default select example">
            <option selected>Select Bank</option>
            <option value="easypaisa">HBL</option>
            <option value="jazzcash">UBL</option>
            <option value="upaisa">Meezan</option>
            <option value="upaisa">Alfalah</option>
            <option value="upaisa">Soneri</option>
            <option value="upaisa">Allied</option>
          </select>
      </div>
    
    </div>
    

      <p className="text-muted text-center"><i>The provided account must be registered to your CNIC</i></p>
    {/* <!-- Submit button --> */}
    <div className="row">
      <div className="col">
        <button type="submit" className="btn btn-primary mb-4">Back</button>
      </div>
      <div className="col">
       
        <Link to="/confirmcard"  className="btn btn-primary mb-4"
         style={{marginLeft:"71%"}}>Submit</Link>
        
        </div>
    </div>
  </form>
</div>
</section>
</div>
<Footer/>
</>
  )
}

export default ApplynowBank