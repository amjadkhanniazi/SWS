import React from "react";
import Navbar from "./Navbar";
import "./foo.css";
function Setting() {
  return (
    <div>
      <Navbar/>
      <div>
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
                  <img src="./img/8.jpg" 
                    className="rounded-circle shadow-2-strong"
                    width="150px"
                    height="150px"
                    alt="avatar"
                  />
                </div>

                <div className="text-center" style={{ marginBottom: "25%" }}>
                  <h6>Amjad Khan</h6>
                </div>

                <div
                  className="nav flex-column nav-pills text-center"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active"
                    // id="v-pills-home-tab"
                    // data-mdb-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Personal Info
                  </a>
                  <a
                    className="nav-link"
                    // id="v-pills-profile-tab"
                    // data-mdb-toggle="pill"
                    href="/newcases"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    New Cases
                  </a>
                  <a
                    className="nav-link"
                    // id="v-pills-messages-tab"
                    // data-mdb-toggle="pill"
                    href="/app9"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    Accepted Cases
                  </a>
                  <a
                    className="nav-link"
                    // id="v-pills-messages-tab"
                    // data-mdb-toggle="pill"
                    href="/spamcase"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    Spam Cases
                  </a>
                  <a
                    className="nav-link"
                    // id="v-pills-setting-tab"
                    // data-mdb-toggle="pill"
                    href="/setting"
                    role="tab"
                    aria-controls="v-pills-setting"
                    aria-selected="false"
                  >
                    Settings
                  </a>
                </div>
                <div className="text-center mb-3" style={{ marginTop: "50%" }}>
                  <button
                    className="btn btn-primary"
                    style={{ width: "120px" }}
                  >
                    Logout
                  </button>
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
                      <h4>Setting & privacy</h4>
                    </div>

                    <form className="my-5 mx-4">
                      <div className="mb-4 " style={{ width: "48.5%" }}>
                        <div
                          className="shadow-sm p-3  bg-white rounded"
                          style={{ width: "200%" }}
                        >
                          <h5>Language </h5>
                          <div
                            class="dropdown"
                            style={{
                              position: "absolute",
                              top: "41%",
                              left: "75%",
                            }}
                          >
                            <a
                              class="btn btn-primary dropdown-toggle"
                              href="#!"
                              role="button"
                              id="dropdownMenuLink"
                              data-mdb-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Change
                            </a>

                            <ul
                              class="dropdown-menu"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <li>
                                <a class="dropdown-item" href="#!">
                                  English
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#!">
                                  Urdu
                                </a>
                              </li>
                            </ul>
                          </div>
                          <hr/>
                          <h5>Color Mode </h5>

                          <div
                            class="dropdown"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "75%",
                            }}
                          >
                            <a
                              class="btn btn-primary dropdown-toggle"
                              href="#!"
                              role="button"
                              id="dropdownMenuLink"
                              data-mdb-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Change
                            </a>

                            <ul
                              class="dropdown-menu"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <li>
                                <a class="dropdown-item" href="#!">
                                  English
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#!">
                                  Urdu
                                </a>
                              </li>
                            </ul>
                          </div>
                          <hr/>
                          <h5>Account Status </h5>

                          <div
                            class="dropdown"
                            style={{
                              position: "absolute",
                              top: "58%",
                              left: "75%",
                            }}
                          >
                            <a
                              class="btn btn-primary dropdown-toggle"
                              href="#!"
                              role="button"
                              id="dropdownMenuLink"
                              data-mdb-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Change
                            </a>

                            <ul
                              class="dropdown-menu"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <li>
                                <a class="dropdown-item" href="#!">
                                  Activate
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#!">
                                  Deactivate
                                </a>
                              </li>
                            </ul>
                          </div>
                          <hr/>
                          <h5>Profile Setting </h5>

                          <div
                            class="dropdown"
                            style={{
                              position: "absolute",
                              top: "67%",
                              left: "75%",
                            }}
                          >
                            <a
                              class="btn btn-primary dropdown-toggle"
                              href="#!"
                              role="button"
                              id="dropdownMenuLink"
                              data-mdb-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Change
                            </a>

                            <ul
                              class="dropdown-menu"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <li>
                                <a class="dropdown-item" href="#!">
                                  Hide/Private
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#!">
                                  Show/Public
                                </a>
                              </li>
                            </ul>
                          </div>
                          <hr/>
                          
                         
                          <h5>Profile Information (Name) </h5>

                          <div
                            class="dropdown"
                            style={{
                              position: "absolute",
                              top: "75%",
                              left: "75%",
                            }}
                          >
                            <a
                              class="btn btn-primary dropdown-toggle"
                              href="#!"
                              role="button"
                              id="dropdownMenuLink"
                              data-mdb-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Change
                            </a>

                           
                          </div>
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
    </div>
  );
}

export default Setting;
