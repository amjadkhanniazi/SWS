import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer'

function Applycasecategory() {
  return (
    <>
    <Navbar/>
    <div style={{Width:"80%", margin:"auto"}}>
    <section>

        {/* <!-- Carousel wrapper --> */}
        <div id="carouselMaterialStyle" className="carousel slide carousel-fade" data-mdb-ride="carousel">
            {/* <!-- Indicators --> */}
            <div className="carousel-indicators">
                <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>

            {/* <!-- Inner --> */}
            <div className="carousel-inner rounded-5 shadow-4-strong">
                {/* <!-- Single item --> */}
                <div className="carousel-item active">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" className="d-block w-100"
                        alt="Sunset Over the City" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{ marginLeft: "-67%"}}> Support a Cause</h1>
                        <h1 style={{marginLeft: "-70%"}}>you care about</h1>
                        <p style={{marginLeft: "-55%" , marginTop: "5%"}}>Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                        <div className="py-4 text-center" style={{marginLeft: "-60%" , marginTop:"7%"}}>
                            <a role="button" className="btn btn-primary btn-lg m-2"
                                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                                 alt="" >                                Donate Now
                            </a>
                            <a role="button" className="btn btn-primary btn-lg m-2"
                                href="https://mdbootstrap.com/docs/standard/" alt>
                                Become a Volunteer
                            </a>
                        </div>
                    </div>
                </div>

                {/* <!-- Single item --> */}
                <div className="carousel-item">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100"
                        alt="Canyon at Nigh" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{marginTop: "-50%" , marginLeft: "-67%"}}> Support a Cause</h1>
                        <h1 style={{marginLeft: "-70%"}}>you care about</h1>
                        <p style={{marginLeft: "-55%" , marginTop: "5%"}}>Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                        <div className="py-4 text-center" style={{marginLeft: "-60%", marginTop:"7%"}}>
                            <a role="button" className="btn btn-primary btn-lg m-2"
                                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                                alt>
                                Donate Now
                            </a>
                            <a role="button" className="btn btn-primary btn-lg m-2"
                                href="https://mdbootstrap.com/docs/standard/" alt>
                                Become a Volunteer
                            </a>
                        </div>
                    </div>
                </div>

                {/* <!-- Single item --> */}
                <div className="carousel-item">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100"
                        alt="Cliff Above a Stormy Sea" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{marginTop: "-50%" , marginLeft: "-67%"}}> Support a Cause</h1>
                        <h1 style={{marginLeft: "-70%"}}>you care about</h1>
                        <p style={{marginLeft: "-55%", marginTop: "5%"}}>Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                        <div className="py-4 text-center" style={{marginLeft: "-60%", marginTop:"7%"}}>
                            <a role="button" className="btn btn-primary btn-lg m-2"
                                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                                alt>
                                Donate Now
                            </a>
                            <a role="button" className="btn btn-primary btn-lg m-2"
                                href="https://mdbootstrap.com/docs/standard/" alt>
                                Become a Volunteer
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Controls --> */}
            <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle"
                data-mdb-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle"
                data-mdb-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        {/* <!-- Carousel wrapper --> */}
    </section>

    <section style={{marginTop: "10%"}}>
        <div className="container" style={{textAlign: "center"}}>
            <h1>Case Category</h1>
            <p>Select Category For Futher Processing</p>
        </div>
    </section>

    <section className="" my-5>
        <div className="container" style={{height:"700px", padding: "20px",  width: "700px"}}>
            <div className="shadow-4-strong my-3" style={{borderRadius: "20px", height: "150px", width: "100%"}}>
                <div style={{height: "150px", padding: "20px", width: "40%", float: "left"}}>
                    <h1>Donate</h1>
                    <p>for education</p>
                </div>
                <div style={{height: "150px", width: "60%", float: "right"}}>
                    <img src="./img/school-india-children-ahmedabad.jpg" width="395px" height="150px" style={{borderRadius: "20px"}} alt="" />
                </div>
            </div>

            <div className="shadow-4-strong my-3" style={{borderRadius: "20px", height: "150px", width: "100%"}}>
                <div style={{height: "150px", padding: "20px", width: "40%", float: "left"}}>
                    <h1>Donate</h1>
                    <p>for education</p>
                </div>
                <div style={{height: "150px", width: "60%", float: "right"}}>
                    <img src="./img/school-india-children-ahmedabad.jpg" width="395px" height="150px" style={{borderRadius: "20px"}} alt="" />
                </div>
            </div>

            <div className="shadow-4-strong my-3" style={{borderRadius: "20px", height: "150px", width: "100%"}}>
                <div style={{height: "150px", padding: "20px", width: "40%", float: "left"}}>
                    <h1>Donate</h1>
                    <p>for education</p>
                </div>
                <div style={{height: "150px", width: "60%", float: "right"}}>
                    <img src="./img/school-india-children-ahmedabad.jpg" width="395px" height="150px" style={{borderRadius: "20px"}} alt="" />
                </div>
            </div>

            <div className="shadow-4-strong my-3" style={{borderRadius: "20px", height: "150px", width: "100%"}}>
                <div style={{height: "150px", padding: "20px", width: "40%", float: "left"}}>
                    <h1>Donate</h1>
                    <p>for education</p>
                </div>
                <div style={{height: "150px",width: "60%", float: "right"}}>
                    <img src="./img/school-india-children-ahmedabad.jpg" width="395px" height="150px" style={{borderRadius: "20px"}} alt="" />
                </div>
            </div>
        </div>
    </section>
    </div>
<Footer/>
</>

  )
}

export default Applycasecategory