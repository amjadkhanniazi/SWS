import React from 'react'

import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top h-20" >

<div className="container-fluid">

  <a className="navbar-brand"  href="dhttps://mdbootstrap.com/docs/stanard/" >

  Social Welfare  

  </a>

  <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"

    aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">

    <i className="fas fa-bars"></i>

  </button>

  <div className="collapse navbar-collapse" id="navbarExample01" style={{marginLeft: "38%"}}>

    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <li className="nav-item active">

        <a className="nav-link mx-2" aria-current="page" href="/home">Home</a>

      </li>

      <li className="nav-item">

        <a className="nav-link mx-2" href="/volunteer" 

        >Voolunteer</a>

      </li>

      <li className="nav-item">

        <a className="nav-link mx-2" href="/middlepage">Cases</a>

      </li>

      <li className="nav-item">

        <a className="nav-link mx-2" href="/allevents">Events</a>

      </li>

      <li className="nav-item">

        <a className="nav-link " href="/apprules">Apply Now</a>

      </li>

      <li className="nav-item">

        <a className="nav-link mx-2" href="/signin">Login</a>

      </li>

      
    </ul>

   <a href="/paymethodoption"> <button type="button" className="btn btn-primary" >Donate</button></a>

  </div>

  
    
  
</div>

</nav>

  )

}

export default Navbar
