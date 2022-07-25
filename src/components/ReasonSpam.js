import React from 'react'
import { Link } from "react-router-dom";
export default function ReasonSpam() {
  return (
    <div className="d-flex" id="wrapper">
            {/* Sidebar */}
            <div className="bg-white" id="sidebar-wrapper">
              <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i className />Social Welfare</div>
              <div className="list-group list-group-flush my-3">
                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text active"><i className="fas fa-tachometer-alt me-2" />Dashboard</a>
                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />New Cases</a>
                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Spam Cases</a>
                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Approved Cases</a>
                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />New volunteers</a>
                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Spam Volunteers</a>
                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Approved Volunteer</a>
                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Volunteer Reference</a>
                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Projects</a>
                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className />Categories</a>
                <a href="/" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i className="fas fa-power-off me-2" />Logout</a>
              </div>
            </div>
            {/* /#sidebar-wrapper */}
            {/* Page Content */}
            <div id="page-content-wrapper">
              <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle" />
                  <h2 className="fs-2 m-0">Dashboard</h2>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle main-text fw-bold" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-user me-2" />Kainat Jahan
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/">Profile</a></li>
                        <li><a className="dropdown-item" href="/">Settings</a></li>
                        <li><a className="dropdown-item" href="/">Logout</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* Reason form */}
              <main style={{marginTop: '50px'}}>
                <section className="vh-100 gradient-custom">
                  <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                      <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{borderRadius: '15px'}}>
                          <div className="card-body p-4 p-md-5">
                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Reason for spam cases</h3>
                            <form>
                              <div className="row">
                                <div className="col-md-6 mb-4">
                                  <div className="form-outline">
                                    <input type="text" id="firstName" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="firstName">Reason 1</label>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                  <div className="form-outline">
                                    <input type="text" id="lastName" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="lastName">Reason 2</label>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 pt-2">
                                <input className="btn btn-primary btn-lg" type="submit" defaultValue="Submit" />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main></div></div>
  )
}
