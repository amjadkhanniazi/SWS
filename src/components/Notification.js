import React from 'react'
import Navbar from './Navbar'
function Notification() {
  return (
    <div>
<Navbar/>
<div>
        {" "}
        <section
          className="row d-flex justify-content-center mb-4"
          style={{ marginTop: "8%", width: "100%" }}
        >
          <div
            className="tab-content col-10 shadow-2-strong"
            style={{ borderRadius: "10px" }}
          >
            <div className="row mx-2 my-5">
              <div
                className="col-3 shadow-1-strong"
                style={{ height: "780px", borderRadius: "30px" }}
              >
                <div className="mt-4 text-center">
                  <h4>Dashboard</h4>
                </div>

                <div className="text-center mt-4 mb-3">
                  <img
                    src="./img/img1.jpg"
                    className="rounded-circle shadow-2-strong"
                    width="150px"
                    height="150px"
                    alt="avatar"
                  />
                </div>

                <div className="text-center" style={{ marginBottom: "25%" }}>
                  <h6>Kianat Jahan</h6>
                </div>

                <div
                  className="nav flex-column nav-pills text-center"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-mdb-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Personal Info
                  </a>
                  <a
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-mdb-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Recent Cases
                  </a>
                  <div class="dropdown">
                    <a
                      class="btn btn-primary dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-mdb-toggle="dropdown"
                      style={{ width: "240px" }}
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
                        <a class="dropdown-item" href="#">
                          New Cases
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Spam Cases
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Approved Cases
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="dropdown"
                    style={{ position: "absolute", top: "100%", left: "10%" }}
                  >
                    <a
                      class="btn btn-primary dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                      style={{ width: "235px", height: "40px" }}
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
                        <a class="dropdown-item" href="#">
                          New Volunteers
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Spam Volunteers
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Approved Volunteers
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-mdb-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                   style={{marginTop: "26%"}}
                  >
                    Projects
                  </a>
                  <a
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-mdb-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                   style={{marginTop: "2%"}}
                  >
                    Events
                  </a>
                  <a
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-mdb-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                   style={{marginTop: "2%"}}
                  >
                    Notification
                  </a>
                  <div
                    className="text-center mb-3"
                    style={{ marginTop: "8%" }}
                  >
                    <button
                      className="btn btn-primary"
                      style={{ width: "120px" }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>

            

              <div className="col-9">
  
  
       
  <div className="tab-content" id="v-pills-tabContent">
    <div
      className="tab-pane fade show active"
      id="v-pills-home"
      role="tabpanel"
      aria-labelledby="v-pills-home-tab"
    >
    <div className="mt-4 text-center">
      <h4>New Volunteers</h4>
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
      <th style={{color:"black"}}>Remarks</th>
    
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
          Accept
        </button>
       
      </td>
   
      <td>
        <p>No vaialabale</p>
       
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
          Accept
        </button>
       
      </td>
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          Spam
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
          Accept
        </button>
       
      </td>
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          Irrelevany Information
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
          Accept
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Notification