import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
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

            id="v-pills-donation-tab"

            data-mdb-toggle="pill"

            href="#v-pills-donation"

            role="tab"

            aria-controls="v-pills-donation"

            aria-selected="false"

            >Donations</a>

          <a

            className="nav-link"

            id="v-pills-setting-tab"

            data-mdb-toggle="pill"

            href="#v-pills-setting"

            role="tab"

            aria-controls="v-pills-setting"

            aria-selected="false"

            >Setting</a

          >

       {/* pills for Projects */}
       <a
                  className="nav nav-link dropdown-toggle"
                  data-mdb-toggle="dropdown"
                >
                  Total Projects
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                     className="dropdown-item"
                      id="v-pills-project-tab"
                      data-mdb-toggle="pill"
                      href="#v-pills-project"
                      role="tab"
                      aria-controls="v-pills-project"
                      aria-selected="false"
                    >
                    Projects
                    </a>
                  </li>
                  <li>
                  <a
                     className="dropdown-item"
                      id="v-pills-event-tab"
                      data-mdb-toggle="pill"
                      href="#v-pills-event"
                      role="tab"
                      aria-controls="v-pills-event"
                      aria-selected="false"
                    >
                    Events
                    </a>
                  </li>
                </ul>
                 {/* pills for Volunteers */}
                 <a
                  className="nav nav-link dropdown-toggle"
                  data-mdb-toggle="dropdown"
                >
                  Total Volunteers
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                     className="dropdown-item"
                      id="v-pills-new-tab"
                      data-mdb-toggle="pill"
                      href="#v-pills-new"
                      role="tab"
                      aria-controls="v-pills-new"
                      aria-selected="false"
                    >
                    New Volunteer
                    </a>
                  </li>
                  <li>
                  <a
                     className="dropdown-item"
                      id="v-pills-spam-tab"
                      data-mdb-toggle="pill"
                      href="#v-pills-spam"
                      role="tab"
                      aria-controls="v-pills-spam"
                      aria-selected="false"
                    >
                    Spam Volunteer
                    </a>
                  </li>
                  <li>
                  <a
                     className="dropdown-item"
                      id="v-pills-approved-tab"
                      data-mdb-toggle="pill"
                      href="#v-pills-approved"
                      role="tab"
                      aria-controls="v-pills-approved"
                      aria-selected="false"
                    >
                    Approved Volunteer
                    </a>
                  </li>
                </ul>
                
                  {/* pills for Cases */}
                  <a
                  className="nav nav-link dropdown-toggle"
                  data-mdb-toggle="dropdown"
                >
                  Total Cases
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                     className="dropdown-item"
                      id="v-pills-newcase-tab"
                      data-mdb-toggle="pill"
                      href="#v-pills-newcase"
                      role="tab"
                      aria-controls="v-pills-newcase"
                      aria-selected="false"
                    >
                    New Cases
                    </a>
                  </li>
                  <li>
                  <a
                     className="dropdown-item"
                      id="v-pills-spamcase-tab"
                      data-mdb-toggle="pill"
                      href="#v-pills-spamcase"
                      role="tab"
                      aria-controls="v-pills-spamcase"
                      aria-selected="false"
                    >
                    Spam Cases
                    </a>
                  </li>
                  <li>
                  <a
                     className="dropdown-item"
                      id="v-pills-approved-tab"
                      data-mdb-toggle="pill"
                      href="#v-pills-approved"
                      role="tab"
                      aria-controls="v-pills-approved"
                      aria-selected="false"
                    >
                    Approved Cases
                    </a>
                  </li>
                </ul>


          
        </div>

        <div className="text-center mb-3" style={{marginTop: "20%"}}>

          <Link to="home" className="btn btn-primary" style={{width: "120px"}}>

              Logout

          </Link>

      </div>

       
      </div>

    
      <div className="col-9">



   {/* personal information section */}

        {/* personal information section */}

        <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div
                    className="text-center mb-3"
                    style={{ marginTop: "3%", marginLeft: "70%" }}
                  >
                    <button type="submit" className="btn btn-primary mb-4 ">
                      Edit
                    </button>
                  </div>
                  <div className="mt-4 mx-4">
                    <h4>Personal Information</h4>
                  </div>

                  <form className="my-4" style={{ margin: "3% 0 0 2%" }}>
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <input
                            type="text"
                            style={{ border: "1px solid black" }}
                            id="form6Example3"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form6Example3">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <input
                            style={{ border: "1px solid black" }}
                            type="text"
                            id="form6Example3"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form6Example3">
                            Last Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <input
                            type="text"
                            style={{ border: "1px solid black" }}
                            id="form6Example3"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form6Example3">
                            CNIC
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <input
                            style={{ border: "1px solid black" }}
                            type="text"
                            id="form6Example3"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form6Example3">
                            Email
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <input
                            style={{ border: "1px solid black" }}
                            type="email"
                            id="form6Example5"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form6Example5">
                            Primary PhoneNo
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <input
                            style={{ border: "1px solid black" }}
                            type="email"
                            id="form6Example5"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form6Example5">
                            Secondary PhoneNo
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        style={{ border: "1px solid black" }}
                        type="number"
                        id="form6Example6"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form6Example6">
                        Current Address
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        style={{ border: "1px solid black" }}
                        type="number"
                        id="form6Example6"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form6Example6">
                        Permanent Address
                      </label>
                    </div>

                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline mb-4">
                          <input
                            style={{ border: "1px solid black" }}
                            type="text"
                            id="form6Example6"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form6Example6">
                            Province
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline mb-4">
                          <input
                            style={{ border: "1px solid black" }}
                            type="text"
                            id="form6Example6"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form6Example6">
                            City
                          </label>
                        </div>
                      </div>
                    </div>

                    <div
                      className="text-center mb-3"
                      style={{ marginTop: "24%" }}
                    >
                      <button type="submit" className="btn btn-primary mb-4 ">
                        Save
                      </button>
                    </div>
                  </form>
                </div>



        {/* donations */}

           {/* my donation section */}
           <div
                  className="tab-pane fade"
                  id="v-pills-donation"
                  role="tabpanel"
                  aria-labelledby="v-pills-donation-tab"
                >
                  <div className="mt-4 text-center">
                    <h4>Donations For case</h4>
                  </div>

                  <form className="my-5 mx-4">
                    <div
                      className="mb-4 "
                      style={{
                        width: "48.5%",
                        position: "absolute",
                        left: "31%",
                      }}
                    >
                      <table class="table align-middle mb-0 bg-white" style={{width:"80%"}}>
                        <thead class="bg-light">
                          <tr>
                            <th style={{ color: "black" }}>Donor Id</th>
                            <th style={{ color: "black" }}>Donor Name</th>
                            <th style={{ color: "black" }}>Case Title</th>
                            <th style={{ color: "black" }}>Total Donation</th>
                            <th style={{ color: "black" }}>Modilfy</th>
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
                            <td>Educase Case</td>
                            <td>50,000</td>

                            <td>
                              <Link
                                to="/app8"
                                className="btn btn-link btn-sm btn-rounded"
                              >
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  <i class="fas fa-trash"></i>
                                </button>
                              </Link>
                              <Link
                                to="#"
                                className="btn btn-link btn-sm btn-rounded"
                              >
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
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
                            <td>Foode Case</td>
                            <td>60,000</td>

                            <td>
                              <Link
                                to="/app8"
                                className="btn btn-link btn-sm btn-rounded"
                              >
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  <i class="fas fa-trash"></i>
                                </button>
                              </Link>
                              <Link
                                to="/app8"
                                className="btn btn-link btn-sm btn-rounded"
                              >
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
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
                            <td>Marriage Case</td>
                            <td>50,000</td>

                            <td>
                              <Link
                                to="/app8"
                                className="btn btn-link btn-sm btn-rounded"
                              >
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  <i class="fas fa-trash"></i>
                                </button>
                              </Link>
                              <Link
                                to="/app8"
                                className="btn btn-link btn-sm btn-rounded"
                              >
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
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
                            <td>Yask Khan</td>
                            <td>57,000</td>

                            <td>
                              <Link
                                to="/app8"
                                className="btn btn-link btn-sm btn-rounded"
                              >
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  <i class="fas fa-trash"></i>
                                </button>
                              </Link>
                              <Link
                                to="/app8"
                                className="btn btn-link btn-sm btn-rounded"
                              >
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
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
                            <td>Education case</td>
                            <td>70,0000</td>

                            <td>
                              <Link
                                to="/app8"
                                className="btn btn-link btn-sm btn-rounded"
                              >
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  <i class="fas fa-trash"></i>
                                </button>
                              </Link>
                              <Link
                                to="/app8"
                                className="btn btn-link btn-sm btn-rounded"
                              >
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
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
                      <div
                        className="mb-4 "
                        style={{
                          width: "48.5%",
                          position: "absolute",
                          left: "31%",
                        }}
                      >
                        <table class="table align-middle mb-0 bg-white">
                          <thead class="bg-light">
                            <tr>
                              <th style={{ color: "black" }}>Volunteer Id</th>
                              <th style={{ color: "black" }}>
                                Volunteer userid
                              </th>
                              <th style={{ color: "black" }}>Email</th>
                              <th style={{ color: "black" }}>Status</th>
                              <th style={{ color: "black" }}>View</th>
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>Spam</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>Accepted</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>Accepted</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>Accepted</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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

                  {/* New cases */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-newcase"
                    role="tabpanel"
                    aria-labelledby="v-pills-newcase-tab"
                  >
                    <div className="mt-4 text-center">
                      <h4>New Cases</h4>
                    </div>

                    <form className="my-5 mx-4">
                      <div
                        className="mb-4 "
                        style={{
                          width: "48.5%",
                          position: "absolute",
                          left: "35%",
                        }}
                      >
                        <table class="table align-middle mb-0 bg-white">
                          <thead class="bg-light">
                            <tr>
                              <th style={{ color: "black" }}>Case Id</th>
                              <th style={{ color: "black" }}>CaseTitle</th>
                              <th style={{ color: "black" }}>Approval</th>
                              <th style={{ color: "black" }}>Denied</th>
                              <th style={{ color: "black" }}>View</th>
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
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Denny
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Deny
                                </button>
                              </td>

                              <td>
                                <Link
                                  to="/app8"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
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
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Deny
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Deny
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Deny
                                </button>
                              </td>

                              <td>
                                <Link
                                  to="/app8"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
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
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Deny
                                </button>
                              </td>

                              <td>
                                <Link
                                  to="/app8"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
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
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Deny
                                </button>
                              </td>

                              <td>
                                <Link
                                  to="/app8"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
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
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Deny
                                </button>
                              </td>

                              <td>
                                <Link
                                  to="/app8"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
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
                      <div
                        className="mb-4 "
                        style={{
                          width: "48.5%",
                          position: "absolute",
                          left: "35%",
                        }}
                      >
                        <table class="table align-middle mb-0 bg-white">
                          <thead class="bg-light">
                            <tr>
                              <th style={{ color: "black" }}>Case Id</th>
                              <th style={{ color: "black" }}>CaseTitle</th>
                              <th style={{ color: "black" }}>Assign To</th>

                              <th style={{ color: "black" }}>View</th>
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
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Spam
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Spam
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Spam
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                    id="v-pills-approved"
                    role="tabpanel"
                    aria-labelledby="v-pills-approved-tab"
                  >
                    <div className="mt-4 text-center">
                      <h4>Acepted Cases</h4>
                    </div>

                    <form className="my-5 mx-4">
                      <div
                        className="mb-4 "
                        style={{
                          width: "48.5%",
                          position: "absolute",
                          left: "35%",
                        }}
                      >
                        <table class="table align-middle mb-0 bg-white">
                          <thead class="bg-light">
                            <tr>
                              <th style={{ color: "black" }}>Case Id</th>
                              <th style={{ color: "black" }}>CaseTitle</th>
                              <th style={{ color: "black" }}>Assign To</th>

                              <th style={{ color: "black" }}>View</th>
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
                                <div class="btn-group">
                                  <button
                                    type="button"
                                    class="btn btn-primary dropdown-toggle"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    Assign
                                  </button>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </li>
                                    <li>
                                      <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Separated link
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                                  <button
                                    type="button"
                                    class="btn btn-primary dropdown-toggle"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    Assign
                                  </button>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </li>
                                    <li>
                                      <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Separated link
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                                  <button
                                    type="button"
                                    class="btn btn-primary dropdown-toggle"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    Assign
                                  </button>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </li>
                                    <li>
                                      <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Separated link
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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

 {/* project editor */}
 <div
                  className="tab-pane fade"
                  id="v-pills-project"
                  role="tabpanel"
                  aria-labelledby="v-pills-project-tab"
                >
                  <h5
                    className="text-justify"
                    style={{ marginLeft: "3%", marginTop: "10%" }}
                  >
                    Add new Project
                  </h5>
                  <div class="container">
                    <div className="row">
                      <div className="col-8">
                        <input
                          type="email"
                          placeholder="Enter a title"
                          className="form-control mb-3"
                          id="input1"
                        ></input>
                      </div>
                    </div>

                    <div
                      className="card"
                      style={{
                        width: "18%",
                        position: "absolute",
                        top: "38%",
                        left: "72%",
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Publish</h5>
                        <hr></hr>
                        <button type="button" class="btn btn-primary">
                          Save Draft
                        </button>
                        <p className="card-text">
                          SaveDraft : Status <a href="#">Edit</a>
                        </p>
                        <p className="card-text">
                          Visibility : Public Status <a href="#">Edit</a>
                        </p>
                        <p className="card-text">
                          Publis: Immediately <a href="#">Edit</a>
                        </p>
                        <hr></hr>
                        <div className="card-body">Move to Trash</div>
                      </div>
                    </div>
                    <form className="my-5 mx-4">
                      <div
                        className="mb-4 "
                        style={{
                          width: "38.5%",
                          position: "absolute",
                          left: "30%",
                          top: "50%",
                        }}
                      >
                        <div className="container">
                          <div id="editparent">
                            <div id="editControls">
                              <div className="btn-group">
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="undo"
                                  href="#"
                                  title="Undo"
                                >
                                  <i className="fa fa-undo"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="redo"
                                  href="#"
                                  title="Redo"
                                >
                                  <i className="fa fa-repeat"></i>
                                </a>
                              </div>
                              <div className="btn-group">
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="bold"
                                  href="#"
                                  title="Bold"
                                >
                                  <i className="fa fa-bold"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="italic"
                                  href="#"
                                  title="Italic"
                                >
                                  <i className="fa fa-italic"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="underline"
                                  href="#"
                                  title="Underline"
                                >
                                  <i className="fa fa-underline"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="strikeThrough"
                                  href="#"
                                  title="Strikethrough"
                                >
                                  <i className="fa fa-strikethrough"></i>
                                </a>
                              </div>
                              <div className="btn-group">
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="indent"
                                  href="#"
                                  title="Blockquote"
                                >
                                  <i className="fa fa-indent"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="insertUnorderedList"
                                  href="#"
                                  title="Unordered List"
                                >
                                  <i className="fa fa-list-ul"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="insertOrderedList"
                                  href="#"
                                  title="Ordered List"
                                >
                                  <i className="fa fa-list-ol"></i>
                                </a>
                              </div>
                              <div className="btn-group">
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="h1"
                                  href="#"
                                  title="Heading 1"
                                >
                                  <i className="fa fa-header"></i>
                                  <sup>1</sup>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="h2"
                                  href="#"
                                  title="Heading 2"
                                >
                                  <i className="fa fa-header"></i>
                                  <sup>2</sup>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="h3"
                                  href="#"
                                  title="Heading 3"
                                >
                                  <i className="fa fa-header"></i>
                                  <sup>3</sup>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="h4"
                                  href="#"
                                  title="Heading 4"
                                >
                                  <i className="fa fa-header"></i>
                                  <sup>4</sup>
                                </a>
                                
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="h5"
                                  href="#"
                                  title="Heading 5"
                                >
                                  <i className="fa fa-header"></i>
                                  <sup>5</sup>
                                </a>
                                
                                
                              </div>
                              <div className="form-outline">
                                <textarea
                                  className="form-control "
                                  id="textAreaExample1"
                                  rows="4"
                                  style={{
                                    border: "1px solid black",
                                    width: "80%",
                                    height: "100%",
                                  }}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-outline"></div>
                      </div>
                    </form>
                  </div>
</div>
{/* events editor */}
<div
                  className="tab-pane fade"
                  id="v-pills-event"
                  role="tabpanel"
                  aria-labelledby="v-pills-event-tab"
                >
                  <h5
                    className="text-justify"
                    style={{ marginLeft: "3%",textAlign:"center" }}
                  >
                    Add new Events
                  </h5>
                  <div className="form-outline" >
                    
                  <form >
                      <div
                        className="mb-4 "
                       
                      >
                        <div className="container">
                          <div id="editparent">
                            <div id="editControls">
                              <div className="btn-group">
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="undo"
                                  href="#"
                                  title="Undo"
                                >
                                  <i className="fa fa-undo"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="redo"
                                  href="#"
                                  title="Redo"
                                >
                                  <i className="fa fa-repeat"></i>
                                </a>
                              </div>
                              <div className="btn-group">
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="bold"
                                  href="#"
                                  title="Bold"
                                >
                                  <i className="fa fa-bold"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="italic"
                                  href="#"
                                  title="Italic"
                                >
                                  <i className="fa fa-italic"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="underline"
                                  href="#"
                                  title="Underline"
                                >
                                  <i className="fa fa-underline"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="strikeThrough"
                                  href="#"
                                  title="Strikethrough"
                                >
                                  <i className="fa fa-strikethrough"></i>
                                </a>
                              </div>
                             
                              <div className="btn-group">
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="h1"
                                  href="#"
                                  title="Heading 1"
                                >
                                  <i className="fa fa-header"></i>
                                  <sup>1</sup>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="h2"
                                  href="#"
                                  title="Heading 2"
                                >
                                  <i className="fa fa-header"></i>
                                  <sup>2</sup>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="h3"
                                  href="#"
                                  title="Heading 3"
                                >
                                  <i className="fa fa-header"></i>
                                  <sup>3</sup>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="h4"
                                  href="#"
                                  title="Heading 4"
                                >
                                  <i className="fa fa-header"></i>
                                  <sup>4</sup>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="h5"
                                  href="#"
                                  title="Heading 5"
                                >
                                  <i className="fa fa-header"></i>
                                  <sup>5</sup>
                                </a>
                                
                              </div>
                              <div className="btn-group">
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="indent"
                                  href="#"
                                  title="Blockquote"
                                >
                                  <i className="fa fa-indent"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="insertUnorderedList"
                                  href="#"
                                  title="Unordered List"
                                >
                                  <i className="fa fa-list-ul"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="insertOrderedList"
                                  href="#"
                                  title="Ordered List"
                                >
                                  <i className="fa fa-list-ol"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-outline"></div>
                      </div>
                    </form>
                    
                   
                                <div
                                  className="form-control "
                                  id="textAreaExample1"
                                  rows="4"
                                  style={{
                                    border: "1px solid black",
                                    width: "95%",
                                    height: "500px",
                                    margin:"auto",
                                    padding:"20px"
                                  }}
                                >

                                <input placeholder='Enter the title' style= {{width:"98%"}} ></input>
                                <textarea
                                placeholder='Enter your text here'
                                style={{
                                  width: "98%",
                                  height: "350px",
                                  padding:"20px",
                                  marginTop:"10px"
                                }}>

                                </textarea>
                                </div>

                              </div>
                  {/* <div class="container">
                    <div className="row">
                      <div className="col-8">
                        <input
                          type="email"
                          placeholder="Enter a title"
                          className="form-control mb-3"
                          id="input1"
                        ></input>
                      </div>
                    </div>

                    <div
                      className="card"
                      style={{
                        width: "18%",
                        position: "absolute",
                        top: "38%",
                        left: "72%",
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Publish</h5>
                        <hr></hr>
                        <button type="button" class="btn btn-primary">
                          Save Draft
                        </button>
                        <p className="card-text">
                          SaveDraft : Status <a href="#">Edit</a>
                        </p>
                        <p className="card-text">
                          Visibility : Public Status <a href="#">Edit</a>
                        </p>
                        <p className="card-text">
                          Publis: Immediately <a href="#">Edit</a>
                        </p>
                        <hr></hr>
                        <div className="card-body">Move to Trash</div>
                      </div>
                    </div>
                    <form className="my-5 mx-4">
                      <div
                        className="mb-4 "
                        style={{
                          width: "48.5%",
                          position: "absolute",
                          left: "30%",
                          top: "50%",
                        }}
                      >
                        <div className="container">
                          <div id="editparent">
                            <div id="editControls">
                              <div className="btn-group">
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="undo"
                                  href="#"
                                  title="Undo"
                                >
                                  <i className="fa fa-undo"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="redo"
                                  href="#"
                                  title="Redo"
                                >
                                  <i className="fa fa-repeat"></i>
                                </a>
                              </div>
                              <div className="btn-group">
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="bold"
                                  href="#"
                                  title="Bold"
                                >
                                  <i className="fa fa-bold"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="italic"
                                  href="#"
                                  title="Italic"
                                >
                                  <i className="fa fa-italic"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="underline"
                                  href="#"
                                  title="Underline"
                                >
                                  <i className="fa fa-underline"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="strikeThrough"
                                  href="#"
                                  title="Strikethrough"
                                >
                                  <i className="fa fa-strikethrough"></i>
                                </a>
                              </div>
                              <div className="btn-group">
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="indent"
                                  href="#"
                                  title="Blockquote"
                                >
                                  <i className="fa fa-indent"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="insertUnorderedList"
                                  href="#"
                                  title="Unordered List"
                                >
                                  <i className="fa fa-list-ul"></i>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="insertOrderedList"
                                  href="#"
                                  title="Ordered List"
                                >
                                  <i className="fa fa-list-ol"></i>
                                </a>
                              </div>
                              <div className="btn-group">
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="h1"
                                  href="#"
                                  title="Heading 1"
                                >
                                  <i className="fa fa-header"></i>
                                  <sup>1</sup>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="h2"
                                  href="#"
                                  title="Heading 2"
                                >
                                  <i className="fa fa-header"></i>
                                  <sup>2</sup>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="h3"
                                  href="#"
                                  title="Heading 3"
                                >
                                  <i className="fa fa-header"></i>
                                  <sup>3</sup>
                                </a>
                                <a
                                  className="btn btn-xs btn-default"
                                  data-role="p"
                                  href="#"
                                  title="Paragraph"
                                >
                                  <i className="fa fa-paragraph"></i>
                                </a>
                              </div>
                              <div className="form-outline">
                                <textarea
                                  className="form-control "
                                  id="textAreaExample1"
                                  rows="4"
                                  style={{
                                    border: "1px solid black",
                                    width: "85%",
                                    height: "100%",
                                  }}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-outline"></div>
                      </div>
                    </form>
                  </div> */}
</div>
                  {/* Accepted Cases */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-approved"
                    role="tabpanel"
                    aria-labelledby="v-pills-approved-tab"
                  >
                    <div className="mt-4 text-center">
                      <h4>Accepted Cases</h4>
                    </div>

                    <form className="my-5 mx-4">
                      <div
                        className="mb-4 "
                        style={{
                          width: "48.5%",
                          position: "absolute",
                          left: "31%",
                        }}
                      >
                        <table class="table align-middle mb-0 bg-white">
                          <thead class="bg-light">
                            <tr>
                              <th style={{ color: "black" }}>Case Id</th>
                              <th style={{ color: "black" }}>Case Title</th>

                              <th style={{ color: "black" }}>Status</th>
                              <th style={{ color: "black" }}>View</th>
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
                                <p className="fw-normal mb-1">
                                  {" "}
                                  Education case
                                </p>
                              </td>
                              <td>Accepted</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                                <p className="fw-normal mb-1">
                                  {" "}
                                  Education case
                                </p>
                              </td>
                              <td>Accepted</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                                <p className="fw-normal mb-1">
                                  {" "}
                                  Education case
                                </p>
                              </td>
                              <td>Accepted</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                                <p className="fw-normal mb-1">
                                  {" "}
                                  Education case
                                </p>
                              </td>
                              <td>Accepted</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                    id="v-pills-spam"
                    role="tabpanel"
                    aria-labelledby="v-pills-spam-tab"
                  >
                    <div className="mt-4 text-center">
                      <h4>Spam Volunteer</h4>
                    </div>

                    <form className="my-5 mx-4">
                      <div
                        className="mb-4 "
                        style={{
                          width: "48.5%",
                          position: "absolute",
                          left: "31%",
                        }}
                      >
                        <table class="table align-middle mb-0 bg-white">
                          <thead class="bg-light">
                            <tr>
                              <th style={{ color: "black" }}>Volunteer Id</th>
                              <th style={{ color: "black" }}>
                                Volunteer userid
                              </th>
                              <th style={{ color: "black" }}>Email</th>
                              <th style={{ color: "black" }}>Status</th>
                              <th style={{ color: "black" }}>View</th>
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>Spam</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>Spam</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>Spam</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>Spam</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                   {/* Spam Case */}
                 <div
                    className="tab-pane fade"
                    id="v-pills-spamcase"
                    role="tabpanel"
                    aria-labelledby="v-pills-spamcase-tab"
                  >
                    <div className="mt-4 text-center">
                      <h4>Spam Case</h4>
                    </div>

                    <form className="my-5 mx-4">
                      <div
                        className="mb-4 "
                        style={{
                          width: "48.5%",
                          position: "absolute",
                          left: "31%",
                        }}
                      >
                        <table class="table align-middle mb-0 bg-white">
                          <thead class="bg-light">
                            <tr>
                              <th style={{ color: "black" }}>Volunteer Id</th>
                              <th style={{ color: "black" }}>
                                Volunteer userid
                              </th>
                              <th style={{ color: "black" }}>Email</th>
                              <th style={{ color: "black" }}>Status</th>
                              <th style={{ color: "black" }}>View</th>
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>Spam</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>Spam</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>Spam</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>Spam</td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                 {/* New Volunteer */}
                 <div
                    className="tab-pane fade"
                    id="v-pills-new"
                    role="tabpanel"
                    aria-labelledby="v-pills-setting-tab"
                  >
                    <div className="mt-4 text-center">
                      <h4>New Volunteer</h4>
                    </div>

                    <form className="my-5 mx-4">
                      <div
                        className="mb-4 "
                        style={{
                          width: "48.5%",
                          position: "absolute",
                          left: "31%",
                        }}
                      >
                        <table class="table align-middle mb-0 bg-white">
                          <thead class="bg-light">
                            <tr>
                              <th style={{ color: "black" }}>Volunteer Id</th>
                              <th style={{ color: "black" }}>
                                Volunteer userid
                              </th>
                              <th style={{ color: "black" }}>Email</th>
                              <th style={{ color: "black" }}>Status</th>
                              <th style={{ color: "black" }}>View</th>
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Denied
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Denied
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Denied
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Denied
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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


                    {/* New Cases */}
                 <div
                    className="tab-pane fade"
                    id="v-pills-newcase"
                    role="tabpanel"
                    aria-labelledby="v-pills-newcase-tab"
                  >
                    <div className="mt-4 text-center">
                      <h4>New Cases</h4>
                    </div>

                    <form className="my-5 mx-4">
                      <div
                        className="mb-4 "
                        style={{
                          width: "48.5%",
                          position: "absolute",
                          left: "31%",
                        }}
                      >
                        <table class="table align-middle mb-0 bg-white">
                          <thead class="bg-light">
                            <tr>
                              <th style={{ color: "black" }}>Case Id</th>
                              <th style={{ color: "black" }}>
                                Volunteer userid
                              </th>
                              <th style={{ color: "black" }}>Email</th>
                              <th style={{ color: "black" }}>Status</th>
                              
                              <th style={{ color: "black" }}>View</th>
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Denied
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Denied
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Denied
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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
                              <td>asmabuttdeb@gmail.com</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm btn-rounded"
                                >
                                  Denied
                                </button>
                              </td>

                              <td>
                                <a href="/app8">
                                  <Link
                                    to="/app8"
                                    className="btn btn-link btn-sm btn-rounded"
                                  >
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


    </div>
  )
}

export default Dashboard1