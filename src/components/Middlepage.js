import React from 'react'
import Navbar from './Navbar'
import HomeSlider from './HomeSlider'
import { Link } from "react-router-dom";
export default function Middlepage() {
  return (
    <>
   <Navbar/>
    <HomeSlider/>
      <section className="text-center container" style={{marginTop: "10%"}}>
            

            <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/36.jpg"   alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Orphan Case</h5>
                    <p className="card-text">
                    Become a Sponsor Now and Help a Child Stand Up to Poverty.
                     1000s of Children are Waiting. It is Safe and Easy to Sponsor
                     a Child with Compassion. 
                     a Child with Compassion. Start Making a....
                    </p>
                    <a href="/paymethodoption" className="btn btn-primary">Donate</a>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img  src="./img/15.jpg"  style={{height:"1000%",width:"1000%"}} alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Free Checkup</h5>
                    <p className="card-text">
                    A free medical check-up is a periodical or routine set of medical 
                    tests that you can take in designated health centres or hospitals 
                    based on your ...
                    </p>
                    <a href="/paymethodoption" className="btn btn-primary">Donate</a>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/18.jpg" alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Marriage Grant</h5>
                    <p className="card-text">
                    Marriage grant of Rs. 50,000 is paid on 
                    marriage of one child (irrespective of gender) 
                    of serving, retired or deceased employee.retired or deceased employee.retired or deceased employee.
                    </p>
                    <a href="/paymethodoption" className="btn btn-primary">Donate</a>
                </div>
                </div>
            </div>
            </div>

            <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/35.jpg" alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Medical Allowance</h5>
                    <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content  card's content..
                    </p>
                    <a href="/paymethodoption" className="btn btn-primary">Donate</a>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/45.jpg" alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Education Case</h5>
                    <p className="card-text">
                    Free education is education funded through government 
                    spending or charitable organizations rather than tuition funding.
                    Free education.
                    </p>
                    <a href="/paymethodoption" className="btn btn-primary">Donate</a>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/4.jpg" alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Food Case</h5>
                    <p className="card-text">
                    There are 842 million undernourished people in the world today. That means one in eight people do not get enough food to be healthy and lead an active life.
                    </p>
                    <a href="/paymethodoption" className="btn btn-primary">Donate</a>
                </div>
                </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="./img/13.jpg" alt='' className="img-fluid" />
                <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
                </div>
                <div className="card-body">
                <h5 className="card-title">Free Water</h5>
                <p className="card-text">
                In addition to offering clean water in times of need, SWS strives to enhance water supply, sanitation, and hygiene to halt the spread of diseases in disadvantaged communities around the world. 
                </p>
                <a href="/paymethodoption" className="btn btn-primary">Donate</a>
                </div>
            </div>
            </div>
           
        </section>
        <footer className="text-center text-lg-start  text-muted" style={{backgroundColor: "#4d4d4f"}}>
   
   <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
   style={{marginTop: "130%", color: "white"}}>

   <div className="me-5 d-none d-lg-block">
       <span>Get connected with us on social networks:</span>
   </div>

   <div>
       <a href="/" className="me-4 text-reset">
       <i className="fab fa-facebook-f"></i>
       </a>
       <a href="/" className="me-4 text-reset">
       <i className="fab fa-twitter"></i>
       </a>
       <a href="/" className="me-4 text-reset">
       <i className="fab fa-google"></i>
       </a>
       <a href="/" className="me-4 text-reset">
       <i className="fab fa-instagram"></i>
       </a>
       <a href="/" className="me-4 text-reset">
       <i className="fab fa-linkedin"></i>
       </a>
       <a href="/" className="me-4 text-reset">
       <i className="fab fa-github"></i>
       </a>
   </div>

   </section>

   <section style={{ height:"240px" }}>
   <div className="container text-center text-md-start mt-5" style={{backgroundColor: "#4d4d4f", color: "white"}}>
   
       <div className="row mt-3">
       
       <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
           <h6 className="text-uppercase fw-bold mb-4">
           <i className="fas fa-gem me-3"></i>Social Welfare
           </h6>
           <p>
           Here you can use rows and columns to organize your footer content. Lorem ipsum
           dolor sit amet, consectetur adipisicing elit.
           </p>
       </div>
   
       <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
   
           <h6 className="text-uppercase fw-bold mb-4">
           Navigation
           </h6>
           <p>
           <a href="#!" className="text-reset">Angular</a>
           </p>
           <p>
           <a href="#!" className="text-reset">React</a>
           </p>
           <p>
           <a href="#!" className="text-reset">Vue</a>
           </p>
           <p>
           <a href="#!" className="text-reset">Laravel</a>
           </p>
       </div>
       

       
       <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
           <h6 className="text-uppercase fw-bold mb-4">
           Explore
           </h6>
           <p>
           <a href="#!" className="text-reset">Pricing</a>
           </p>
           <p>
           <a href="#!" className="text-reset">Settings</a>
           </p>
           <p>
           <a href="#!" className="text-reset">Orders</a>
           </p>
           <p>
           <a href="#!" className="text-reset">Help</a>
           </p>
       </div>
       

       
       <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
   
           <h6 className="text-uppercase fw-bold mb-4">
           Contact
           </h6>
           <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
           <p>
           <i className="fas fa-envelope me-3"></i>
           info@example.com
           </p>
           <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
           <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
       </div>
       
       </div>
   
   </div>
   </section>

</footer>

    </>
  )
}
