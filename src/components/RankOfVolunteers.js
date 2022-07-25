import React from 'react'
import Navbar from './Navbar'
import Footer from'./Footer'
import { Link } from "react-router-dom";
export default function RankOfVolunteers() {
  return (
  <>
  <Navbar/>
    <div style={{width:"80%", margin:"auto"}}>
      <section className=" container" style={{ marginTop: "10%"}}>
        <div id="carouselExampleCaptions" className="carousel slide" data-mdb-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100"
                        alt="Wild Landscape" />
                    <div className="carousel-caption d-none d-md-block">
                        <button className="btn btn-primary">Become Volunteer</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100"
                        alt="Camera" />
                    <div className="carousel-caption d-none d-md-block">
                        <button className="btn btn-primary" style={{marginTop: "-20%", marginLeft: "-57%"}}>

                            Become Volunteer

                        </button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100"
                        alt="Exotic Fruits" />
                    <div className="carousel-caption d-none d-md-block">
                        <button className="btn btn-primary">Become Volunteer</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions"
                data-mdb-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions"
                data-mdb-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>

    <section className="text-center container" style={{marginTop: "10%"}}>
        <h2 className="mb-5"><strong>Top Volunteer's</strong></h2>

        <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt='' className="img-fluid" />
                        <a href="#!">
                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Post title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the
                            card's content.
                        </p>

                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" alt='' className="img-fluid" />
                        <a href="#!">
                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Post title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the
                            card's content.
                        </p>

                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" alt='' className="img-fluid" />
                        <a href="#!">
                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Post title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the
                            card's content.
                        </p>

                    </div>
                </div>
            </div>
        </div>


    </section>
    </div>
   
    <Footer />
    </>
)
}
