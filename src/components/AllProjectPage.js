import React from 'react'
import Navbar from './Navbar'
import Footer from'./Footer';
import { Link } from "react-router-dom";
;export default function AllEventPage() {
  return (
    <>
    <Navbar/>
    <div style={{width:"80%", margin:"auto"}}>
        <section className="text-center " style={{marginTop: "10%"}}>
            <h2 className="mb-5"><strong>Latest Projects</strong></h2>

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
                    <p className="card-text" style={{textAlign:"justify"}}>
                    Charitable organizations working in the health industry believes that a different kind of healthcare system is possible in our world, where every patient could  benefit from advanced medical treatment regardless 
                    of their social standards or financial ability to .
                    </p>
                    <Link to="/projectdescrip" className="btn btn-primary">Read More</Link>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/6.jpg" alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Food Project</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>
                    At The Hunger Project we believe in people, and we work to empower people at the grassroots level to lift themselves and their communities above the poverty line, for good.
                     We created World Hunger Day to celebrate sustainable solutions to hunger and poverty.
                     Day to celebrate sustainable solutions to hunger and poverty.
                     
                    </p>
                    <Link to="/projectdescrip" className="btn btn-primary">Read More</Link>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/11.jpg" alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Marriage Grant</h5>
                    <p className="card-text"  style={{textAlign:"justify"}}>
                    Marriage Works’ is our brand new brochure, featuring a collection of key Marriage Foundation research with corresponding press articles since 2012, along with some of our Marriage Foundation projects.  Please click here to view the PDF, however, if you’d like to enquire about receiving a
                    </p>
                    <Link to="/projectdescrip" className="btn btn-primary">Read More</Link>
                </div>
                </div>
            </div>
            </div>

            <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/20.jpg" alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Free Education</h5>
                    <p className="card-text">
                    There is 84% illiteracy rate of women in the village. Majority of the population are peasants living below the poverty line. Though they have desire` to educate their children but cannot afford the expenses. Crime rate in
                     the village is very high. Women face the discrimination and physical violence as well. 
                    </p>
                    <Link to="/projectdescrip" className="btn btn-primary">Read More</Link>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/5.jpg" alt='' className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Orphange Children</h5>
                    <p className="card-text">
                    We believe every child deserves access to education and an early start at building a brighter future. IREAD is a leader in partnering with local stakeholders to build Early Childhood Development (ECD) Centres and facilitate Early Childhood Education (ECE) in Northern Pakistan and Uganda.
                    </p>
                    <Link to="/projectdescrip" className="btn btn-primary">Read More</Link>
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
                    Together, we aim to ensure sustainable access to safe water, sanitation and hygiene for the most vulnerable 
                    communities through innovative partnerships, creativity and the power of art.
                    </p>
                    <Link to="/projectdescrip" className="btn btn-primary">Read More</Link>
                </div>
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
                <h5 className="card-title">Eid Clothes</h5>
                <p className="card-text">
                For the third year in a row, and in the spirit of Eid, we’re collecting used clothing from around Lebanon and setting up shop to give FREE clothes to the less fortunate and we need your help and donations to keep this initiative alive after funding stopped.
                </p>
                <Link to="/projectdescrip" className="btn btn-primary">Read More</Link>
                </div>
            </div>
            </div>
           
        </section>
    </div>
    <Footer/>
    </>
  )
}
