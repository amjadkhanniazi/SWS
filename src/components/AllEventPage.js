import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import {  Link} from "react-router-dom";

export default function AllEventPage() {
  return (
    <>
    <Navbar/>
    
        <div style={{width:"80%", margin:"auto"}}>
        <section className="text-center" style={{marginTop: "10%"}}>
            <h2 className="mb-5"><strong>Latest Events</strong></h2>

            <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/4.jpg"  style={{height:"280%",width:"280%"}}  alt='' className="img-fluid" />
                    <a href="/eventdescrip">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Needy children</h5>
                    <p className="card-text"  style={{textAlign:"justify"}}>
                    Someone who wants your attention, they want you to show them affection and love all the time. It is not nescesarily a bad thing although it may become annoying, .
                    </p>
                    <Link to="/eventdescrip" className="btn btn-primary">Read More</Link>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/45.jpg"  style={{height:"120%",width:"120%"}} alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Education</h5>
                    <p className="card-text"  style={{textAlign:"justify"}}>
                    That's why we're building Neddy - an AI-driven learning assistant. ... to learn more about the use of Artificial Intelligence in education and learning?

                    </p>
                    <Link to="/eventdescrip" className="btn btn-primary">Read More</Link>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/35.jpg" style={{height:"100%",width:"100%"}} alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Medical Allowance</h5>
                    <p className="card-text"  style={{textAlign:"justify"}}>
                    Medical allowance/expenses: Reimbursement of expenses on medical treatment or hospitalisation or both received .
                    </p>
                    <Link to="/eventdescrip" className="btn btn-primary">Read More</Link>
                </div>
                </div>
            </div>
            </div>

            <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/18.jpg" style={{height:"100%",width:"100%"}}  alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Marriage Grant</h5>
                    <p className="card-text"  style={{textAlign:"justify"}}>
                    Marriage grant of Rs. 50,000 is paid on marriage of one child (irrespective of gender) of serving, retired or deceased employee.
                    </p>
                    <Link to="/eventdescrip" className="btn btn-primary">Read More</Link>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/35.jpg" style={{height:"100%",width:"8100%"}}  alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Free Checkup</h5>
                    <p className="card-text"  style={{textAlign:"justify"}}>
                    In addition to offering clean water in times of need, SWS strives to enhance water supply, sanitation, and hygiene to halt the spread of diseases in disadvantaged communities around the world. 
                    </p>
                    <Link to="/eventdescrip" className="btn btn-primary">Read More</Link>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/36.jpg" style={{height:"100%",width:"100%"}}  alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Help Orphans</h5>
                    <p className="card-text"  style={{textAlign:"justify"}}>
                    Become a Sponsor Now and Help a Child Stand Up to Poverty. 1000s of Children are Waiting. It is Safe and Easy to Sponsor a Child with Compassion. Start Making a...
                    </p>
                    <Link to="/eventdescrip" className="btn btn-primary">Read More</Link>
                </div>
                </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="./img/13.jpg" style={{height:"100%",width:"100%"}}  alt='' className="img-fluid" />
                <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
                </div>
                <div className="card-body">
                <h5 className="card-title"> Free Water Provider</h5>
                <p className="card-text"  style={{textAlign:"justify"}}>
                In addition to offering clean water in times of need, SWS strives to enhance water supply, sanitation, and hygiene to halt the spread of diseases in disadvantaged communities around the world
                </p>
                <Link to="/eventdescrip" className="btn btn-primary">Read More</Link>
                </div>
            </div>
            </div>
           
        </section>
        
        </div>
    <Footer/>
    </>
  )
}
