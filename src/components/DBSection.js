import React from 'react'

function DBSection() {
  return (
    
<section class="row d-flex justify-content-center mb-4" style={{marginTop: "8%" , width: "100%"}}>
  <div class="tab-content col-10 shadow-2-strong" style={{borderRadius: "10px"}}>
    <div class="row">
        <div class="col-3 shadow-1-strong" style={{height: "780px"}}>
          {/* <!-- dashboard Loga --> */}
          <div class="mt-4 text-center">
            <h4>Dashboard</h4>
          </div>
        {/* <!-- profile pic --> */}
        <div class="text-center mt-4 mb-3">
            
            <img src="./img/school-india-children-ahmedabad.jpg" class="rounded-circle shadow-5-strong" width="150px" height="150px" alt="avatar" />    
            
            </div>
        {/* <!-- Name --> */}
        <div class="text-center" style={{marginBottom: "25%"}}>
            
            <h6>Amjad Khan</h6>   
            
            </div>
          {/* <!-- Tab navs --> */}
          <div
            class="nav flex-column nav-pills text-center"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active"
              id="v-pills-home-tab"
              data-mdb-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
              >Personal Info</a
            >
            <a
              class="nav-link"
              id="v-pills-profile-tab"
              data-mdb-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              >My Applications</a
            >
            <a
              class="nav-link"
              id="v-pills-messages-tab"
              data-mdb-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              >My Donations</a
            >
            <a
              class="nav-link"
              id="v-pills-setting-tab"
              data-mdb-toggle="pill"
              href="#v-pills-setting"
              role="tab"
              aria-controls="v-pills-setting"
              aria-selected="false"
              >Settings</a
            >
            
          </div>
          <div class="text-center mb-3" style={{marginTop: "50%"}}>
            <button class="btn btn-primary" style={{width: "120px"}}>
                Logout
            </button>
        </div>
          {/* <!-- Tab navs --> */}
        </div>
      
        <div class="col-9">


          {/* <!-- Tab content -->
          <!-- Home Tab --> */}
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
            <div class="mt-4 text-center">
              <h4>Personal Information</h4>
            </div>
              
            <form class="my-5 mx-4">
           
              
                <div class="mb-4 " style={{width: "48.5%"}}>
                  <div class="form-outline">
                    <input type="text" id="form6Example1" class="form-control" />
                    <label class="form-label" for="form6Example1">UserName</label>
                  </div>
                </div>
              
            
              {/* <!-- first name last name --> */}
              <div class="row mb-4">
                <div class="col">
              <div class="form-outline">
                <input type="text" id="form6Example3" class="form-control" />
                <label class="form-label" for="form6Example3">First Name</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form6Example3" class="form-control" />
                <label class="form-label" for="form6Example3">Last Name</label>
              </div>
            </div>
            </div>
            
              {/* <!-- CNIC Number --> */}
              <div class="form-outline mb-4" style={{width: "48.5%"}}>
                <input type="text" id="form6Example4" class="form-control" />
                <label class="form-label" for="form6Example4">CNIC</label>
              </div>
            
              {/* <!-- Phone Numbers --> */}
              <div class="row mb-4">
                <div class="col">
              <div class="form-outline">
                <input type="email" id="form6Example5" class="form-control" />
                <label class="form-label" for="form6Example5">Primary PhoneNo</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="email" id="form6Example5" class="form-control" />
                <label class="form-label" for="form6Example5">Secondary PhoneNo</label>
              </div>
            </div>
            </div>
            
              {/* <!-- Address --> */}
              
              <div class="form-outline mb-4">
                <input type="number" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">Current Address</label>
              </div>
              <div class="form-outline mb-4">
                <input type="number" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">Permanent Address</label>
              </div>
            
            
              {/* <!-- City province input --> */}
              <div class="row mb-4">
                <div class="col">
              <div class="form-outline mb-4">
                <input type="text" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">Province</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline mb-4">
                <input type="text" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">City</label>
              </div>
            </div>
          </div>
            
              {/* <!-- Save button --> */}
              <div class="text-center mb-3" style={{marginTop: "24%"}}>
              <button type="submit" class="btn btn-primary mb-4 ">Save</button>
            </div>
            </form>

            </div>

            {/* <!-- my applications content --> */}
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              
            <div class="mt-4 text-center">
              <h4>Personal Information</h4>
            </div>
              
            <form class="my-5">
           
              
                <div class="mb-4 " style={{width: "48.5%"}}>
                  <div class="form-outline">
                    <input type="text" id="form6Example1" class="form-control" />
                    <label class="form-label" for="form6Example1">UserName</label>
                  </div>
                </div>
              
            
              {/* <!-- first name last name --> */}
              <div class="row mb-4">
                <div class="col">
              <div class="form-outline">
                <input type="text" id="form6Example3" class="form-control" />
                <label class="form-label" for="form6Example3">First Name</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form6Example3" class="form-control" />
                <label class="form-label" for="form6Example3">Last Name</label>
              </div>
            </div>
            </div>
            
              {/* <!-- CNIC Number --> */}
              <div class="form-outline mb-4" style={{width: "48.5%"}}>
                <input type="text" id="form6Example4" class="form-control" />
                <label class="form-label" for="form6Example4">CNIC</label>
              </div>
            
              {/* <!-- Phone Numbers --> */}
              <div class="row mb-4">
                <div class="col">
              <div class="form-outline">
                <input type="email" id="form6Example5" class="form-control" />
                <label class="form-label" for="form6Example5">Primary PhoneNo</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="email" id="form6Example5" class="form-control" />
                <label class="form-label" for="form6Example5">Secondary PhoneNo</label>
              </div>
            </div>
            </div>
            
              {/* <!-- Address --> */}
              
              <div class="form-outline mb-4">
                <input type="number" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">Current Address</label>
              </div>
              <div class="form-outline mb-4">
                <input type="number" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">Permanent Address</label>
              </div>
            
            
              {/* <!-- City province input --> */}
              <div class="row mb-4">
                <div class="col">
              <div class="form-outline mb-4">
                <input type="text" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">Province</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline mb-4">
                <input type="text" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">City</label>
              </div>
            </div>
          </div>
            
              {/* <!-- Save button --> */}
              <div class="text-center mb-3" style={{marginTop: "24%"}}>
              <button type="submit" class="btn btn-primary mb-4 ">Save</button>
            </div>
            </form>

            </div>

            {/* <!-- my donations content --> */}
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              
            <div class="mt-4 text-center">
              <h4>Personal Information</h4>
            </div>
              
            <form class="my-5">
           
              
                <div class="mb-4 " style={{width: "48.5%"}}>
                  <div class="form-outline">
                    <input type="text" id="form6Example1" class="form-control" />
                    <label class="form-label" for="form6Example1">UserName</label>
                  </div>
                </div>
              
            
              {/* <!-- first name last name --> */}
              <div class="row mb-4">
                <div class="col">
              <div class="form-outline">
                <input type="text" id="form6Example3" class="form-control" />
                <label class="form-label" for="form6Example3">First Name</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form6Example3" class="form-control" />
                <label class="form-label" for="form6Example3">Last Name</label>
              </div>
            </div>
            </div>
            
              {/* <!-- CNIC Number --> */}
              <div class="form-outline mb-4" style={{width: "48.5%"}}>
                <input type="text" id="form6Example4" class="form-control" />
                <label class="form-label" for="form6Example4">CNIC</label>
              </div>
            
              {/* <!-- Phone Numbers --> */}
              <div class="row mb-4">
                <div class="col">
              <div class="form-outline">
                <input type="email" id="form6Example5" class="form-control" />
                <label class="form-label" for="form6Example5">Primary PhoneNo</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="email" id="form6Example5" class="form-control" />
                <label class="form-label" for="form6Example5">Secondary PhoneNo</label>
              </div>
            </div>
            </div>
            
              {/* <!-- Address --> */}
              
              <div class="form-outline mb-4">
                <input type="number" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">Current Address</label>
              </div>
              <div class="form-outline mb-4">
                <input type="number" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">Permanent Address</label>
              </div>
            
            
              {/* <!-- City province input --> */}
              <div class="row mb-4">
                <div class="col">
              <div class="form-outline mb-4">
                <input type="text" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">Province</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline mb-4">
                <input type="text" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">City</label>
              </div>
            </div>
          </div>
            
              {/* <!-- Save button --> */}
              <div class="text-center mb-3" style={{marginTop: "24%"}}>
              <button type="submit" class="btn btn-primary mb-4 ">Save</button>
            </div>
            </form>

            </div>

            {/* <!-- settings content --> */}
            <div
              class="tab-pane fade"
              id="v-pills-setting"
              role="tabpanel"
              aria-labelledby="v-pills-setting-tab"
            >
              
            <div class="mt-4 text-center">
              <h4>Personal Information</h4>
            </div>
              
            <form class="my-5">
           
              
                <div class="mb-4 " style={{width: "48.5%"}}>
                  <div class="form-outline">
                    <input type="text" id="form6Example1" class="form-control" />
                    <label class="form-label" for="form6Example1">UserName</label>
                  </div>
                </div>
              
            
              {/* <!-- first name last name --> */}
              <div class="row mb-4">
                <div class="col">
              <div class="form-outline">
                <input type="text" id="form6Example3" class="form-control" />
                <label class="form-label" for="form6Example3">First Name</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form6Example3" class="form-control" />
                <label class="form-label" for="form6Example3">Last Name</label>
              </div>
            </div>
            </div>
            
              {/* <!-- CNIC Number --> */}
              <div class="form-outline mb-4" style={{width: "48.5%"}}>
                <input type="text" id="form6Example4" class="form-control" />
                <label class="form-label" for="form6Example4">CNIC</label>
              </div>
            
              {/* <!-- Phone Numbers --> */}
              <div class="row mb-4">
                <div class="col">
              <div class="form-outline">
                <input type="email" id="form6Example5" class="form-control" />
                <label class="form-label" for="form6Example5">Primary PhoneNo</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="email" id="form6Example5" class="form-control" />
                <label class="form-label" for="form6Example5">Secondary PhoneNo</label>
              </div>
            </div>
            </div>
            
              {/* <!-- Address --> */}
              
              <div class="form-outline mb-4">
                <input type="number" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">Current Address</label>
              </div>
              <div class="form-outline mb-4">
                <input type="number" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">Permanent Address</label>
              </div>
            
            
              {/* <!-- City province input --> */}
              <div class="row mb-4">
                <div class="col">
              <div class="form-outline mb-4">
                <input type="text" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">Province</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline mb-4">
                <input type="text" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">City</label>
              </div>
            </div>
          </div>
            
              {/* <!-- Save button --> */}
              <div class="text-center mb-3" style={{marginTop: "24%"}}>
              <button type="submit" class="btn btn-primary mb-4 ">Save</button>
            </div>
            </form>

            </div>
            
          </div>
          {/* <!-- Tab content --> */}
        </div>
      </div>
</div>
</section>

  )
}

export default DBSection