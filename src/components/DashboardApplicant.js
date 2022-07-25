import React from 'react'

import Navbar from './Navbar'

import Footer from './Footer'

import { Link } from 'react-router-dom'


function DashboardApplicant() {

  return (

    <>

    <Navbar/>

    <section className="row d-flex justify-content-center mb-4" style={{marginTop: "8%", width: "100%"}}>

    <div className="tab-content col-10 shadow-2-strong" style={{borderRadius: "10px"}}>

      <div className="row mx-2 my-5" >

          <div className="col-3 shadow-1-strong" style={{height: "780px", borderRadius: "30px"}}>

          
            <div className="mt-4 text-center">

              <h4>Dashboard</h4>

            </div>

          
          <div className="text-center mt-4 mb-3" >

              
              <img src="./img/9.jpg" className="rounded-circle shadow-2-strong" width="150px" height="150px" alt="avatar" />    

              
              </div>

         
          <div className="text-center" style={{marginBottom: "25%"}}>

              
              <h6>Amjad Khan</h6>   

              
              </div>

          
            <div

              className="nav flex-column nav-pills text-center"

              id="v-pills-tab"

              role="tablist"

              aria-orientation="vertical" >

              <a

                className="nav-link active"

                id="v-pills-home-tab"

                data-mdb-toggle="pill"

                href="#v-pills-home"

                role="tab"

                aria-controls="v-pills-home"

                aria-selected="true"

                >Personal Info</a

              >

              <a

                className="nav-link"

                id="v-pills-profile-tab"

                data-mdb-toggle="pill"

                href="#v-pills-profile"

                role="tab"

                aria-controls="v-pills-profile"

                aria-selected="false"

                >My Applications</a>

              <a

                className="nav-link"

                id="v-pills-messages-tab"

                data-mdb-toggle="pill"

                href="#v-pills-messages"

                role="tab"

                aria-controls="v-pills-messages"

                aria-selected="false"

                >My Donations</a

              >

              <a

                className="nav-link"

                id="v-pills-setting-tab"

                data-mdb-toggle="pill"


                href="#v-pills-setting"

                role="tab"

                aria-controls="v-pills-setting"

                aria-selected="false"

                >Settings</a

              >

              
            </div>

            <div className="text-center mb-3" style={{marginTop: "50%"}}>

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

              <div className="mt-4 mx-4">

                <h4>Personal Information</h4>

              </div>

                
              <form className="my-4" style={{margin:'3% 0 0 2%'}}>

               
                
                  <div className="mb-4 " style={{width: "48.5%"}}>

                    <div className="form-outline">

                      <input style={{border:"1px solid black"}} type="text" id="form6Example1" className="form-control" />

                      <label className="form-label" htmlFor="form6Example1">UserName</label>

                    </div>

                  </div>

                
              
                
                <div className="row mb-4">

                  <div className="col">

                <div className="form-outline">

                  <input style={{border:"1px solid black"}} type="text" id="form6Example3" className="form-control" />

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

              
               
                <div className="form-outline mb-4" style={{width: "48.5%"}}>

                  <input style={{border:"1px solid black"}} type="text" id="form6Example4" className="form-control" />

                  <label className="form-label" htmlFor="form6Example4">CNIC</label>

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

  
            {/* my application section */}

              <div

                className="tab-pane fade"

                id="v-pills-profile"

                role="tabpanel"

                aria-labelledby="v-pills-profile-tab"

              >

                
              <div className="mt-4 mx-4" >

                <h4>My Applications</h4>

              </div>

                
              <table class="table" style={{width:'100%', margin:'3% 0 0 1%'}}>

  <thead >

    <tr >

      <th scope="col" style={{color:'black'}}>#</th>

      <th scope="col" style={{color:'black'}}>Application</th>

      <th scope="col" style={{color:'black'}}>Application Date</th>

      <th scope="col" style={{color:'black'}}>Status</th>

      
    </tr>

  </thead>

  <tbody class="table-group-divider table-divider-color">

    <tr>

      <th scope="row">1</th>

      <td>Need base Money Grant</td>

      <td>10/4/2022</td>

      <td>Approved</td>

      <td><a href="!#">View</a></td>

    </tr>

    <tr>

      <th scope="row">2</th>

      <td>Marriage Grant</td>

      <td>10/4/2022</td>

      <td>Pending</td>

      <td><a href="!#">View</a></td>

    </tr>

    
  </tbody>

</table>

  
              </div>

  
              {/* my donations section */}

              <div

                className="tab-pane fade"

                id="v-pills-messages"

                role="tabpanel"

                aria-labelledby="v-pills-messages-tab"

              >

                
              <div className="mt-4 mx-4">

                <h4>My Donations</h4>

              </div>

              <table class="table" style={{width:'100%', margin:'3% 0 0 1%'}}>

  <thead >

    <tr >

      <th scope="col" style={{color:'black'}}>#</th>

      <th scope="col" style={{color:'black'}}>Donation to</th>

      <th scope="col" style={{color:'black'}}>Donation Date</th>

      <th scope="col" style={{color:'black'}}>Amount(Rs)</th>

      
    </tr>

  </thead>

  <tbody class="table-group-divider table-divider-color">

    <tr>

      <th scope="row">1</th>

      <td>Need base Money Grant</td>

      <td>10/4/2022</td>

      <td>500</td>

      <td><a href="!#">View</a></td>

    </tr>

    <tr>

      <th scope="row">2</th>

      <td>Marriage Grant</td>

      <td>10/4/2022</td>

      <td>1000</td>

      <td><a href="!#">View</a></td>

    </tr>

    
  </tbody>

</table>


             
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

  </>

  )

}


export default DashboardApplicant
