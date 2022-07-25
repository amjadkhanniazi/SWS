import React from 'react';


export default function HomeSlider() {
  return (
  

    <section style={{marginTop: "0%"}}>

     
      <div id="carouselMaterialStyle" className="carousel slide carousel-fade" data-mdb-ride="carousel">
     
        <div className="carousel-indicators">
          <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2"
            aria-label="Slide 3"></button>
        </div>

        
        <div className="carousel-inner rounded-5 shadow-4-strong">
       
          <div className="carousel-item active">
            <img src="./img/3.jpg" className="d-block w-100"
              alt="Sunset Over the City" />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ marginLeft: "-67%"}}> Support a Cause</h1>
              <h1 style={{ marginLeft: "-70%"}}>you care about</h1>
              <p style={{marginLeft: "-55%", marginTop: "5%"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
              <div className="py-4 text-center" style={{marginLeft: "-60%", marginTop: "7%"}}>
                <a role="button" className="btn btn-primary btn-lg m-2"
                  href="/middlepage" rel="nofollow" >
                  Donate Now
                </a>
                <a role="button" className="btn btn-primary btn-lg m-2"
                 href="/application"
                  >
                  Become a Volunteer
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="./img/39.jpg" className="d-block w-100"
              alt="Canyon at Nigh" />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{marginTop: "-50%", marginLeft: "-67%"}}> Support a Cause</h1>
              <h1 style={{marginLeft: "-70%"}}>you care about</h1>
              <p style={{marginLeft: "-55%", marginTop: "5%"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
              <div className="py-4 text-center" style={{marginLeft: "-60%", marginTop: "7%"}}>
                <a role="button" className="btn btn-primary btn-lg m-2"
                  href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow" >
                  Donate Now
                </a>
                <a role="button" className="btn btn-primary btn-lg m-2" href="https://mdbootstrap.com/docs/standard/"
                  >
                  Become a Volunteer
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="./img/6.jpg" className="d-block w-100"
              alt="Cliff Above a Stormy Sea" />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{marginTop: "-50%", marginLeft: "-67%"}}> Support a Cause</h1>
              <h1 style={{marginLeft: "-70%"}}>you care about</h1>
              <p style={{marginTop: "5%", marginLeft: "-55%"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
              <div className="py-4 text-center" style={{marginTop: "7%", marginLeft: "-60%"}}>
                <a role="button" className="btn btn-primary btn-lg m-2"
                  href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow" >
                  Donate Now
                </a>
                <a role="button" className="btn btn-primary btn-lg m-2" href="https://mdbootstrap.com/docs/standard/"
                  >
                  Become a Volunteer
                </a>
              </div>
            </div>
          </div>
        </div>
   
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
     
    </section>
   
  )
}
