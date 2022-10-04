import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
function Dashboard1() {
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
              
              <h6>Zafar Ali</h6>   
              
              </div>
          
            <div
              className="nav flex-column nav-pills text-center"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical" >
              <a href="#v-pills-home"
                className="nav-link active "
                style={{color:"black"}}
                id="v-pills-home-tab"
                data-mdb-toggle="pill"
              
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
                >Personal Info</a
              >
              <a href="#v-pills-recentasse"
                className="nav-link "
                id="v-pills-profile-tab"
                data-mdb-toggle="pill"
                style={{color:"black"}}
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
                >Donations</a>
                
              
              
            
              
              <a href="#v-pills-setting"
                className="nav-link"
                id="v-pills-setting-tab"
                data-mdb-toggle="pill"
                style={{color:"black"}}
              
                role="tab"
                aria-controls="v-pills-setting"
                aria-selected="false"
                >Settings</a
              >
              <div class="dropdown" id="downdop">
                    <a href="#"
                      class="btn dropdown-toggle "
                      style={{ width: "237px",height:"45px",position:"absolute",left:"3%",marginTop:"-50px" }}
                      role="button"
                      id="dropdownMenuLink"
                      data-mdb-toggle="dropdown"
                   
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >  
                      Total Projects
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                      <a
                className="nav-link bg=white"
                id="v-pills-profile-tab"
                data-mdb-toggle="pill"
                href="#v-pills-posteditor"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
                >Projects</a>
                      </li>
                      <li>
                      <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-mdb-toggle="pill"
                href="#v-pills-eventseditor"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
      
                >Events</a>
                      </li>
            
                    </ul>
                  </div>

               {/* drop */}
               <div class="dropdown bg-light" id="downdop">
                    <a href="#"
                      class="btn btn-muted dropdown-toggle"
                      style={{ width: "240px",height:"45px",position:"absolute",left:"3%",marginTop:"80px" }}
                      role="button"
                      id="dropdownMenuLink"
                      data-mdb-toggle="dropdown"
                     
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      Total Cases
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                      <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-mdb-toggle="pill"
                href="#v-pills-newcasse"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
                >New Cases</a>
                      </li>
                      <li>
                      <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-mdb-toggle="pill"
                href="#v-pills-spamcasse"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
                >Spam Cases</a>
                      </li>
                      <li>
                      <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-mdb-toggle="pill"
                href="#v-pills-approvedcasses"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
                >Approved Cases</a>
                      </li>
                    </ul>
                  </div>

               {/* drop */}
               <div class="dropdown">
                    <a
                      class="btn  bg-light dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-mdb-toggle="dropdown"
                      style={{ width: "240px",height:"45px",position:"absolute",left:"3%",marginTop:"75px" }}
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      Total Volunteers
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                      <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-mdb-toggle="pill"
                href="#v-pills-newvol"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
                >New Volunteer</a>
                      </li>
                      <li>
                      <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-mdb-toggle="pill"
              href="#v-pills-spamvol"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
                >Spam Volunteer</a>
                      </li>
                      <li>
                      <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-mdb-toggle="pill"
                href="#v-pills-accvol"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
                >Approved Volunteer </a>
                      </li>
                    </ul>
                  </div>

              
              
            </div>
            <div className="text-center mb-3" style={{marginTop: "50%"}}>
              <Link to="home" className="btn btn-primary" style={{width: "120px" ,position:"absolute",top:"130%",left:"15%"}}>
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
            
                
                <div className="row mb-4">
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
              
              <div className="row mb-4">
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
               
             
                <div className="row mb-4">
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
              
               
                
                <div className="form-outline mb-4">
                  <input style={{border:"1px solid black"}} type="number" id="form6Example6" className="form-control" />
                  <label className="form-label" htmlFor="form6Example6">Current Address</label>
                </div>
                <div className="form-outline mb-4">
                  <input style={{border:"1px solid black"}} type="number" id="form6Example6" className="form-control" />
                  <label className="form-label" htmlFor="form6Example6">Permanent Address</label>
                </div>
              
              
                
                <div className="row mb-4">
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
              
              
                <div className="text-center mb-3" style={{marginTop: "24%"}}>
                <button type="submit" className="btn btn-primary mb-4 ">Save</button>
              </div>
              </form>
  
              </div>
  
  
            {/* Recent Case */}
              <div
                className="tab-pane fade"
                id="v-pills-recentasse"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>Donations For case</h4>
              </div>
                
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"35%"}}>
                  <table class="table align-middle mb-0 bg-white"
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Donor Id</th>
      <th style={{color:"black"}}>Donor Name</th>
      <th style={{color:"black"}}>Case Title</th>
      <th style={{color:"black"}}>Total Donation</th>
      <th style={{color:"black"}}>Modilfy</th>
    
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
        <p className="fw-normal mb-1">Zafar Butt</p>
        
      </td>
      <td>
      Educase Case
        
      </td>
      <td>
    50,000
        
      </td>
   
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
<i class="fas fa-trash"></i>
</button>
        </Link>
        <Link to="#" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
      <i class="fas fa-pen-square"></i>
</button>
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
        <p className="fw-normal mb-1">Ali Ahsan</p>
        
      </td>
      <td>
      Foode Case
       
      </td>
      <td>
      
     60,000 
      </td>
   
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
<i class="fas fa-trash"></i>
</button>
        </Link>
        <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
      <i class="fas fa-pen-square"></i>
</button>
        </Link>
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
        <p className="fw-normal mb-1">Sana Khan</p>
        
      </td>
      <td>
      Marriage Case
       
      </td>
      <td>
    50,000
       
      </td>
   
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
<i class="fas fa-trash"></i>
</button>
        </Link>
        <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
      <i class="fas fa-pen-square"></i>
</button>
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
        <p className="fw-normal mb-1">Sumbal Malik</p>
        
      </td>
      <td>
     Yask Khan
       
      </td>
      <td>
      
     57,000
      </td>
   
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
<i class="fas fa-trash"></i>
</button>
        </Link>
        <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
      <i class="fas fa-pen-square"></i>
</button>
        </Link>
       
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
        <p className="fw-normal mb-1">Sarfarz</p>
        
      </td>
      <td>
      Education case
        
      </td>
      <td>
      
   70,0000        
      </td>
   
      <td>
        
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
<i class="fas fa-trash"></i>
</button>
        </Link>
        <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
      <i class="fas fa-pen-square"></i>
</button>
        </Link>
       
      </td>
    </tr>
   
  
  </tbody>
</table>

    
    
                    
                  </div>
                
              </form>
              </div>
               {/* Accepted cases*/}
               <div
                className="tab-pane fade"
                id="v-pills-acccasse"
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
      <th style={{color:"black"}}>Case Id</th>
      <th style={{color:"black"}}>CaseTitle</th>
      <th style={{color:"black"}}>Approval</th>
      <th style={{color:"black"}}>Denied</th>
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
      
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Denny
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
          Denny
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
   
    
   
    
     
       
  </tbody>
</table>

    
    
                    
                  </div>
                
              </form>
              </div>






               {/* Project Editor*/}
               <div
                className="tab-pane fade"
                id="v-pills-posteditor"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>Post a project</h4>
              </div>
              <div  style={{marginLeft:"70%",marginTop:"1%"}}>
              <button type="button" class="btn btn-primary" style={{marginLeft:"5%"}}>Create</button>
<button type="button"style={{marginLeft:"7%"}} class="btn btn-primary" >Publish</button>
             </div>
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"35%"}}>
                 

  
      <div className="container" >
 

  <div id="editparent">
    <div id="editControls">
      <div className="btn-group">
        <a className="btn btn-xs btn-default" data-role="undo" href="#" title="Undo"><i className="fa fa-undo"></i></a>
        <a className="btn btn-xs btn-default" data-role="redo" href="#" title="Redo"><i className="fa fa-repeat"></i></a>
      </div>
      <div className="btn-group">
        <a className="btn btn-xs btn-default" data-role="bold" href="#" title="Bold"><i className="fa fa-bold"></i></a>
        <a className="btn btn-xs btn-default" data-role="italic" href="#" title="Italic"><i className="fa fa-italic"></i></a>
        <a className="btn btn-xs btn-default" data-role="underline" href="#" title="Underline"><i className="fa fa-underline"></i></a>
        <a className="btn btn-xs btn-default" data-role="strikeThrough" href="#" title="Strikethrough"><i className="fa fa-strikethrough"></i></a>
      </div>
      <div className="btn-group">
        <a className="btn btn-xs btn-default" data-role="indent" href="#" title="Blockquote"><i className="fa fa-indent"></i></a>
        <a className="btn btn-xs btn-default" data-role="insertUnorderedList" href="#" title="Unordered List"><i className="fa fa-list-ul"></i></a>
        <a className="btn btn-xs btn-default" data-role="insertOrderedList" href="#" title="Ordered List"><i className="fa fa-list-ol"></i></a>
      </div>
      <div className="btn-group">
        <a className="btn btn-xs btn-default" data-role="h1" href="#" title="Heading 1"><i className="fa fa-header"></i><sup>1</sup></a>
        <a className="btn btn-xs btn-default" data-role="h2" href="#" title="Heading 2"><i className="fa fa-header"></i><sup>2</sup></a>
        <a className="btn btn-xs btn-default" data-role="h3" href="#" title="Heading 3"><i className="fa fa-header"></i><sup>3</sup></a>
        <a className="btn btn-xs btn-default" data-role="p" href="#" title="Paragraph"><i className="fa fa-paragraph"></i></a>
      </div>
    </div>
  </div>
</div>
<div className="form-outline">
  <textarea style={{border:"1px solid black",width:"80%",marginTop:"10%",marginLeft:"3%"}} className="form-control" id="textAreaExample1" rows="4"></textarea>
  <hr style={{width:"100%"}}/>
  {/* scroll tabel */}
  <table style={{marginTop:"10%"}}
  class="table align-middle mb-0 bg-white table-wrapper-scroll-y my-custom-scrollbar "
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Id</th>
      <th style={{color:"black"}}>Poject Title</th>
      <th style={{color:"black"}}>Post Date</th>
      <th style={{color:"black"}}>Modilfy</th>
    
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
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">Education Case</p>
           
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">10-2-22</p>
           
          </div>
        </div>
      </td>
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
<i class="fas fa-trash"></i>
</button>
        </Link>
        <Link to="#" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
      <i class="fas fa-pen-square"></i>
</button>
        </Link>

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
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">Education Case</p>
           
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">10-2-22</p>
           
          </div>
        </div>
      </td>
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
<i class="fas fa-trash"></i>
</button>
        </Link>
        <Link to="#" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
      <i class="fas fa-pen-square"></i>
</button>
        </Link>

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
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">Education Case</p>
           
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">10-2-22</p>
           
          </div>
        </div>
      </td>
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
<i class="fas fa-trash"></i>
</button>
        </Link>
        <Link to="#" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
      <i class="fas fa-pen-square"></i>
</button>
        </Link>

      </td>
      </tr>
      
      
      </tbody></table>
      
</div>
                    
                  </div>
                 
              </form>
                      </div>
                      
  
    {/* Event Editor*/}
    <div
                className="tab-pane fade"
                id="v-pills-eventseditor"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>Event a project</h4>
              </div>
              <div  style={{marginLeft:"70%",marginTop:"1%"}}>
              <button type="button" class="btn btn-primary" style={{marginLeft:"5%"}}>Create</button>
<button type="button"style={{marginLeft:"7%"}} class="btn btn-primary" >Publish</button>
             </div>
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"35%"}}>
                 

  
      <div className="container" >
 

  <div id="editparent">
    <div id="editControls">
      <div className="btn-group">
        <a className="btn btn-xs btn-default" data-role="undo" href="#" title="Undo"><i className="fa fa-undo"></i></a>
        <a className="btn btn-xs btn-default" data-role="redo" href="#" title="Redo"><i className="fa fa-repeat"></i></a>
      </div>
      <div className="btn-group">
        <a className="btn btn-xs btn-default" data-role="bold" href="#" title="Bold"><i className="fa fa-bold"></i></a>
        <a className="btn btn-xs btn-default" data-role="italic" href="#" title="Italic"><i className="fa fa-italic"></i></a>
        <a className="btn btn-xs btn-default" data-role="underline" href="#" title="Underline"><i className="fa fa-underline"></i></a>
        <a className="btn btn-xs btn-default" data-role="strikeThrough" href="#" title="Strikethrough"><i className="fa fa-strikethrough"></i></a>
      </div>
      <div className="btn-group">
        <a className="btn btn-xs btn-default" data-role="indent" href="#" title="Blockquote"><i className="fa fa-indent"></i></a>
        <a className="btn btn-xs btn-default" data-role="insertUnorderedList" href="#" title="Unordered List"><i className="fa fa-list-ul"></i></a>
        <a className="btn btn-xs btn-default" data-role="insertOrderedList" href="#" title="Ordered List"><i className="fa fa-list-ol"></i></a>
      </div>
      <div className="btn-group">
        <a className="btn btn-xs btn-default" data-role="h1" href="#" title="Heading 1"><i className="fa fa-header"></i><sup>1</sup></a>
        <a className="btn btn-xs btn-default" data-role="h2" href="#" title="Heading 2"><i className="fa fa-header"></i><sup>2</sup></a>
        <a className="btn btn-xs btn-default" data-role="h3" href="#" title="Heading 3"><i className="fa fa-header"></i><sup>3</sup></a>
        <a className="btn btn-xs btn-default" data-role="p" href="#" title="Paragraph"><i className="fa fa-paragraph"></i></a>
      </div>
    </div>
  </div>
</div>
<div className="form-outline">
  <textarea style={{border:"1px solid black",width:"80%",marginTop:"10%",marginLeft:"3%"}} className="form-control" id="textAreaExample1" rows="4"></textarea>
  <hr style={{width:"100%"}}/>
  {/* scroll tabel */}
  <table style={{marginTop:"10%"}}
  class="table align-middle mb-0 bg-white table-wrapper-scroll-y my-custom-scrollbar "
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Id</th>
      <th style={{color:"black"}}>Poject Title</th>
      <th style={{color:"black"}}>Post Date</th>
      <th style={{color:"black"}}>Modilfy</th>
    
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
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">Education Case</p>
           
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">10-2-22</p>
           
          </div>
        </div>
      </td>
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
<i class="fas fa-trash"></i>
</button>
        </Link>
        <Link to="#" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
      <i class="fas fa-pen-square"></i>
</button>
        </Link>

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
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">Education Case</p>
           
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">10-2-22</p>
           
          </div>
        </div>
      </td>
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
<i class="fas fa-trash"></i>
</button>
        </Link>
        <Link to="#" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
      <i class="fas fa-pen-square"></i>
</button>
        </Link>

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
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">Education Case</p>
           
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">10-2-22</p>
           
          </div>
        </div>
      </td>
      <td>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
<i class="fas fa-trash"></i>
</button>
        </Link>
        <Link to="#" className="btn btn-link btn-sm btn-rounded">
      <button type="button" className="btn btn-link btn-sm btn-rounded">
      <i class="fas fa-pen-square"></i>
</button>
        </Link>

      </td>
      </tr>
      
      
      </tbody></table>
      
</div>
                    
                  </div>
                 
              </form>
                      </div>
                      
  
   {/* my application section */}
   <div
                className="tab-pane fade"
                id="v-pills-newcasse"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>New Cases</h4>
              </div>
                
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"35%"}}>
                  <table class="table align-middle mb-0 bg-white"
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Case Id</th>
      <th style={{color:"black"}}>CaseTitle</th>
      <th style={{color:"black"}}>Approval</th>
      <th style={{color:"black"}}>Denied</th>
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
          Accept
        </button>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Denny
        </button>
        
      </td>
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
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
      <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
       
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
      <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
       
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
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
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
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
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
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
       
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
  
              <div
                className="tab-pane fade"
                id="v-pills-spamcasse"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>Spam Cases</h4>
              </div>
                
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"35%"}}>
                  <table class="table align-middle mb-0 bg-white"
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Case Id</th>
      <th style={{color:"black"}}>CaseTitle</th>
      <th style={{color:"black"}}>Assign To</th>
    
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
          Spam
        </button>
        
      </td>

      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
          Spam
        </button>
        
      </td>

      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
          Spam
        </button>
        
      </td>

      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
      </td>
    </tr>
      
  </tbody>
</table>

    
    
                    
                  </div>
                
              </form>
              </div> 
              {/* accepted casess */}
              <div
                className="tab-pane fade"
                id="v-pills-approvedcasses"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>Acepted Cases</h4>
              </div>
                
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"35%"}}>
                  <table class="table align-middle mb-0 bg-white"
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Case Id</th>
      <th style={{color:"black"}}>CaseTitle</th>
      <th style={{color:"black"}}>Assign To</th>
    
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
      <td >
      <div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
    Assign
  </button>
  <ul class="dropdown-menu" >
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

        
      </td>

      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
      <div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
    Assign
  </button>
  <ul class="dropdown-menu" >
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
      </td>

      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
      <div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
    Assign
  </button>
  <ul class="dropdown-menu" >
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
      </td>

      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
      </td>
    </tr>
      
  </tbody>
</table>

    
    
                    
                  </div>
                
              </form>
              </div>
               {/* Accepted Volunteer */}
                <div
                className="tab-pane fade"
                id="v-pills-newvol"
                role="tabpanel"
                aria-labelledby="v-pills-setting-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>New Volunteer</h4>
              </div>
                
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"31%"}}>
                  <table class="table align-middle mb-0 bg-white"
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Volunteer Id</th>
      <th style={{color:"black"}}>Volunteer userid</th>
      <th style={{color:"black"}}>Email</th>
      <th style={{color:"black"}}>Status</th>
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
        <p className="fw-normal mb-1"> Sana Khan</p>
        
      </td>
      <td>
      asmabuttdeb@gmail.com
     
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          Denied
        </button>
        
      </td>
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
        <p className="fw-normal mb-1"> Sana Khan</p>
        
      </td>
      <td>
      asmabuttdeb@gmail.com
     
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          Denied
        </button>
        
      </td>
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
        <p className="fw-normal mb-1"> Sana Khan</p>
        
      </td>
      <td>
      asmabuttdeb@gmail.com
     
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          Denied
        </button>
        
      </td>
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
        <p className="fw-normal mb-1"> Sana Khan</p>
        
      </td>
      <td>
      asmabuttdeb@gmail.com
     
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          Denied
        </button>
        
      </td>
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
      </td>
    </tr>
    
       
  </tbody>
</table>

    
    
                    
                  </div>
                
              </form>
                
              
              </div>
               {/* Spam Volunteer */}
               <div
                className="tab-pane fade"
                id="v-pills-spamvol"
                role="tabpanel"
                aria-labelledby="v-pills-setting-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>Spam Volunteer</h4>
              </div>
                
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"31%"}}>
                  <table class="table align-middle mb-0 bg-white"
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Volunteer Id</th>
      <th style={{color:"black"}}>Volunteer userid</th>
      <th style={{color:"black"}}>Email</th>
      <th style={{color:"black"}}>Status</th>
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
        <p className="fw-normal mb-1"> Sana Khan</p>
        
      </td>
      <td>
      asmabuttdeb@gmail.com
     
      </td>
      <td>
      Spam
        
        
      </td>
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
        <p className="fw-normal mb-1"> Sana Khan</p>
        
      </td>
      <td>
      asmabuttdeb@gmail.com
     
      </td>
      <td>
      Spam
        
        
      </td>
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
        <p className="fw-normal mb-1"> Sana Khan</p>
        
      </td>
      <td>
      asmabuttdeb@gmail.com
     
      </td>
      <td>
      Spam
        
        
      </td>
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
        <p className="fw-normal mb-1"> Sana Khan</p>
        
      </td>
      <td>
      asmabuttdeb@gmail.com
     
      </td>
      <td>
      Spam
        
        
      </td>
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
      </td>
    </tr>
    
  </tbody>
</table>

    
    
                    
                  </div>
                
              </form>
                
              
              </div>
               {/* Accepted Volunteer */}
               <div
                className="tab-pane fade"
                id="v-pills-accvol"
                role="tabpanel"
                aria-labelledby="v-pills-setting-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>Accepted Volunteer</h4>
              </div>
                
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"31%"}}>
                  <table class="table align-middle mb-0 bg-white"
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Volunteer Id</th>
      <th style={{color:"black"}}>Volunteer userid</th>
      <th style={{color:"black"}}>Email</th>
      <th style={{color:"black"}}>Status</th>
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
        <p className="fw-normal mb-1"> Sana Khan</p>
        
      </td>
      <td>
      asmabuttdeb@gmail.com
     
      </td>
      <td>
      Spam
        
        
      </td>
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
        <p className="fw-normal mb-1"> Sana Khan</p>
        
      </td>
      <td>
      asmabuttdeb@gmail.com
     
      </td>
      <td>
      Accepted
        
        
      </td>
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
        <p className="fw-normal mb-1"> Sana Khan</p>
        
      </td>
      <td>
      asmabuttdeb@gmail.com
     
      </td>
      <td>
      Accepted
        
        
      </td>
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
        <p className="fw-normal mb-1"> Sana Khan</p>
        
      </td>
      <td>
      asmabuttdeb@gmail.com
     
      </td>
      <td>
      Accepted
        
        
      </td>
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
      </td>
    </tr>
    
  </tbody>
</table>

    
    
                    
                  </div>
                
              </form>
                
              
            
              
    
    
                    
                  </div>
                
              {/* Accepted Cases */}
              <div
                className="tab-pane fade"
                id="v-pills-approvescase"
                role="tabpanel"
                aria-labelledby="v-pills-setting-tab"
              >
                
                <div className="mt-4 text-center">
                <h4>Accepted Cases</h4>
              </div>
                
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"31%"}}>
                  <table class="table align-middle mb-0 bg-white"
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Case Id</th>
      <th style={{color:"black"}}>Case Title</th>
     
      <th style={{color:"black"}}>Status</th>
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
        <p className="fw-normal mb-1"> Education case</p>
        
      </td>
      <td>
     Accepted
     
      </td>
   
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
        <p className="fw-normal mb-1"> Education case</p>
        
      </td>
      <td>
     Accepted
     
      </td>
   
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
        <p className="fw-normal mb-1"> Education case</p>
        
      </td>
      <td>
     Accepted
     
      </td>
   
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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
        <p className="fw-normal mb-1"> Education case</p>
        
      </td>
      <td>
     Accepted
     
      </td>
   
   
      <td>
        <a href='/app8'>
      <Link to="/app8" className="btn btn-link btn-sm btn-rounded">
          View
        </Link>
        </a>
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

export default Dashboard1