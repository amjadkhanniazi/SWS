import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
    <div>
<Navbar/>
    <section className="row d-flex justify-content-center mb-4" style={{marginTop: "8%", width: "100%"}}>
    <div className="tab-content col-10 shadow-2-strong" style={{borderRadius: "10px"}}>
      <div className="row mx-2 my-5" >
          <div className="col-3 shadow-1-strong" style={{height: "780px", borderRadius: "30px"}}>
          
            <div className="mt-4 text-center">
              <h4>Dashboard</h4>
            </div>
          
          <div className="text-center mt-4 mb-3" >
              
              <img src="./img/8.jpg" className="rounded-circle shadow-2-strong" width="150px" height="150px" alt="avatar" />    
              
              </div>
         
          <div className="text-center" style={{marginBottom: "25%"}}>
              
              <h6>Ali Butt</h6>   
              
              </div>
          
            <div
              className="nav flex-column nav-pills text-center"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical" >
              <a href="#v-pills-home"
                className="nav-link active"
                id="v-pills-home-tab"
                data-mdb-toggle="pill"
             
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
                >Personal Info</a
              >
              <a href="#v-pills-newcases"
                className="nav-link"
                id="v-pills-profile-tab"
                data-mdb-toggle="pill"
              
             
                aria-controls="v-pills-profile"
                aria-selected="false"
                >New Cases</a>
              <a href="#v-pills-spam"
                className="nav-link"
                id="v-pills-messages-tab"
                data-mdb-toggle="pill"
                
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
                >Spam cases</a
              >
              <a href="#v-pills-accept"
                className="nav-link"
                id="v-pills-setting-tab"
                data-mdb-toggle="pill"

             
                role="tab"
                aria-controls="v-pills-setting"
                aria-selected="false"
                >Accepted Cases</a
              >
              <a href="#v-pills-setting"
                className="nav-link"
                id="v-pills-setting-tab"
                data-mdb-toggle="pill"
              
              
                role="tab"
                aria-controls="v-pills-setting"
                aria-selected="false"
                >Settings</a
              >
              
            </div>
            <div className="text-center mb-3" style={{marginTop: "40%"}}>
              <Link to="home" className="btn btn-primary" style={{width: "120px"}}>
                  Logout
              </Link>
          </div>
           
          </div>
        
          <div className="col-9">
  
  
       {/* personal information section */}
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                  <div className="text-center mb-3" style={{marginTop: "3%",marginLeft:"70%"}}>
                <button type="submit" className="btn btn-primary mb-4 ">Edit</button>
              </div>
              <div className="mt-4 mx-4">
                <h4>Personal Information</h4>
              </div>
            
              <form className="my-4" style={{margin:'3% 0 0 2%'}}>   
            
                
                <div className="row mb-4 my-3">
                  <div className="col">
                <div className="form-outline">
                  <input type="text" style={{border:"1px solid black"}} id="form6Example3" className="form-control" />
                  <label className="form-label" htmlFor="form6Example3">First Name</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input style={{border:"1px solid black"}} type="text" id="form6Example3" className="form-control" />
                  <label className="form-label" htmlFor="form6Example3">Last Name</label>
                </div>
              </div>
              </div>
              
              <div className="row mb-4 my-3">
                  <div className="col">
                <div className="form-outline">
                  <input type="text" style={{border:"1px solid black"}} id="form6Example3" className="form-control" />
                  <label className="form-label" htmlFor="form6Example3">CNIC</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input style={{border:"1px solid black"}} type="text" id="form6Example3" className="form-control" />
                  <label className="form-label" htmlFor="form6Example3">Email</label>
                </div>
              </div>
              </div>
               
             
                <div className="row mb-4 my-3">
                  <div className="col">
                <div className="form-outline">
                  <input style={{border:"1px solid black"}} type="email" id="form6Example5" className="form-control" />
                  <label className="form-label" htmlFor="form6Example5">Primary PhoneNo</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input style={{border:"1px solid black"}} type="email" id="form6Example5" className="form-control" />
                  <label className="form-label" htmlFor="form6Example5">Secondary PhoneNo</label>
                </div>
              </div>
              </div>
              
               
                
                <div className="form-outline mb-4 my-3">
                  <input style={{border:"1px solid black"}} type="number" id="form6Example6" className="form-control" />
                  <label className="form-label" htmlFor="form6Example6">Current Address</label>
                </div>
                <div className="form-outline mb-4 my-3">
                  <input style={{border:"1px solid black"}} type="number" id="form6Example6" className="form-control" />
                  <label className="form-label" htmlFor="form6Example6">Permanent Address</label>
                </div>
              
              
                
                <div className="row mb-4 my-3">
                  <div className="col">
                <div className="form-outline mb-4">
                  <input style={{border:"1px solid black"}} type="text" id="form6Example6" className="form-control" />
                  <label className="form-label" htmlFor="form6Example6">Province</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <input style={{border:"1px solid black"}} type="text" id="form6Example6" className="form-control" />
                  <label className="form-label" htmlFor="form6Example6">City</label>
                </div>
              </div>
            </div>
              
              
                <div className="text-center mb-3 " style={{marginLeft:"85%"}}>
                <button type="submit" className="btn btn-primary mb-4 ">Update</button>
              </div>
              </form>
  
              </div>
  
            {/* New Cases */}
              <div
                className="tab-pane fade"
                id="v-pills-newcases"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>New Case</h4>
              </div>
                
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"35%"}}>
                  <table class="table align-middle mb-0 bg-white"
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black", textAlign:"right"}}>Case Id</th>
      <th style={{color:"black"}}>CaseTitle</th>
      <th style={{color:"black",textAlign:"center"}}>Approval</th>
      <th style={{color:"black",textAlign:"center"}}>Denied</th>
      <th style={{color:"black",textAlign:"center"}}>View</th>
    
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">1</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Deny
        </button>
        
      </td>
   
      <td>
        <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">2</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Marriage Grant Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
       
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Deny
        </button>
       
      </td>
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          View
        </button>
       
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">3</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Food Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
       
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Deny
        </button>
       
      </td>
   
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">5</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Blood Donor Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
       
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Deny
        </button>
       
      </td>
   
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">6</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Medical Allowance Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Deny
        </button>
        
      </td>
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          View
        </button>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">7</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
       
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Deny
        </button>
       
      </td>
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          View
        </button>
       
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">1</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
       
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Deny
        </button>
       
      </td>
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          View
        </button>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">8</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Orphan Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
      
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Deny
        </button>
      
      </td>
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          View
        </button>
       
      </td>
    </tr>
   
    
   
    
     
       
  </tbody>
</table>

    
    
                    
                  </div>
                
              </form>
              </div>
  
             {/* spam cases */}
              <div
                className="tab-pane fade"
                id="v-pills-spam"
                role="tabpanel"
                aria-labelledby="v-pills-setting-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>Spam Case</h4>
              </div>
                
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"35%"}}>
                  <table class="table align-middle mb-0 bg-white"
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Case Id</th>
      <th style={{color:"black"}}>CaseTitle</th>
      <th style={{color:"black"}}>Case Status</th>
  
      <th style={{color:"black",textAlign:"center"}}>View</th>
    
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">1</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
     
     
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Spam case
        </button>
        
      </td>
   
      <td>
        <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">2</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Marriage Grant Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Pending Status
        </button>
       
      </td>
     
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          View
        </button>
       
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">3</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Medical Allowance Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Spam case
        </button>
       
      </td>
     
   
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">3</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Blood donor Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Spam case
        </button>
       
      </td>
     
   
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">5</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1"> Food Package Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Spam case
        </button>
        
      </td>
     
   
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">5</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Spam case
        </button>
       
      </td>
     
   
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">6</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Spam Case
        </button>
       
      </td>
     
   
      <td>
        
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">7</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Medical Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Spam Case
        </button>
      
      </td>
     
   
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
      </td>
    </tr>
   
    
   
    
     
       
  </tbody>
</table>

    
    
                    
                  </div>
                
              </form>
                
              
              </div>
              {/* accept case */}
              <div
                className="tab-pane fade"
                id="v-pills-accept"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>Accept Case</h4>
              </div>
                
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"35%"}}>
                  <table class="table align-middle mb-0 bg-white"
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Case Id</th>
      <th style={{color:"black"}}>CaseTitle</th>
      <th style={{color:"black"}}>Case status</th>
     
      <th style={{color:"black"}}>View</th>
    
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">1</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Approved
        </button>
        
      </td>
    
   
      <td>
        <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">2</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Marriage Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Approved
        </button>
       
      </td>
    
     
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          View
        </button>
       
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">3</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Blood donor Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Approved
        </button>
       
      </td>
     
   
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">4</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          pending case
        </button>
       
      </td>
     
   
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">5</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Approved
        </button>
        
      </td>
    
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          View
        </button>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">6</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Approved
        </button>
       
      </td>
     
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          View
        </button>
       
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">1</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Medical Allowance Case</p>
        
      </td>
     
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
       
      </td>
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          View
        </button>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">7</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Approved
        </button>
      
      </td>
     
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          View
        </button>
       
      </td>
    </tr>
   
    
   
    
     
       
  </tbody>
</table>

    
    
                    
                  </div>
                
              </form>
              </div>
              
              
 {/* setting */}
           
 <div
                className="tab-pane fade"
                id="v-pills-setting"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>Setting & privacy</h4>
              </div>
                
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"35%"}}>
                  


                  <div

classNameName="shadow-sm p-3  bg-white rounded"

style={{ width: "200%" }}

>

<h5>Language </h5>

<div

  className="dropdown"

  style={{

    position: "absolute",

    top: "0%",

    left: "75%",

  }}

>

  <a

    className="btn btn-primary dropdown-toggle"

    href="#"

    role="button"

    id="dropdownMenuLink"

    data-mdb-toggle="dropdown"

    aria-expanded="false"

  >

    Change

  </a>


  <ul

    className="dropdown-menu"

    aria-labelledby="dropdownMenuLink"

  >

    <li>

      <a className="dropdown-item" href="#">

        English

      </a>

    </li>

    <li>

      <a className="dropdown-item" href="#">

        Urdu

      </a>

    </li>

  </ul>

</div>

<hr style={{width:"55%"}}/>

<h5>Color Mode </h5>


<div

  className="dropdown"

  style={{

    position: "absolute",

    top: "20%",

    left: "75%",

  }}

>

  <a

    className="btn btn-primary dropdown-toggle"

    href="#"

    role="button"

    id="dropdownMenuLink"

    data-mdb-toggle="dropdown"

    aria-expanded="false"

  >

    Change

  </a>


  <ul

    className="dropdown-menu"

    aria-labelledby="dropdownMenuLink"

  >

    <li>

      <a className="dropdown-item" href="#">

        Dark

      </a>

    </li>

    <li>

      <a className="dropdown-item" href="#">

        White

      </a>

    </li>

  </ul>

</div>

<hr style={{width:"55%"}}/>

<h5>Account Status </h5>


<div

  className="dropdown"

  style={{

    position: "absolute",

    top: "40%",

    left: "75%",

  }}

>

  <a

    className="btn btn-primary dropdown-toggle"

    href="#"

    role="button"

    id="dropdownMenuLink"

    data-mdb-toggle="dropdown"

    aria-expanded="false"

  >

    Change

  </a>


  <ul

    className="dropdown-menu"

    aria-labelledby="dropdownMenuLink"

  >

    <li>

      <a className="dropdown-item" href="#">

        Activate

      </a>

    </li>

    <li>

      <a className="dropdown-item" href="#">

        Deactivate

      </a>

    </li>

  </ul>

</div>

<hr style={{width:"55%"}}/>

<h5>Profile Setting </h5>


<div

  className="dropdown"

  style={{

    position: "absolute",

    top: "64%",

    left: "75%",

  }}

>

  <a

    className="btn btn-primary dropdown-toggle"

    href="#"

    role="button"

    id="dropdownMenuLink"

    data-mdb-toggle="dropdown"

    aria-expanded="false"

  >

    Change

  </a>


  <ul

    className="dropdown-menu"

    aria-labelledby="dropdownMenuLink"

  >

    <li>

      <a className="dropdown-item" href="#">

        Hide/Private

      </a>

    </li>

    <li>

      <a className="dropdown-item" href="#">

        Show/Public

      </a>

    </li>

  </ul>

</div>

<hr style={{width:"55%"}}/>



<h5>Change Password </h5>

<Link to="/changepass">
   <button type="button" className="btn btn-primary btn-lg ms-2" style={{height:"39px",position:"absolute",left:"74%",top:"87%"}}>Change</button>
 </Link>

</div>     
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</section>







               
             
              
          
  <Footer/>

    </div>
  )
}

export default Dashboard