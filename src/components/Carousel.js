import React from 'react'

function Carousel() {
  return (
    
<section className="container" style={{marginTop: "7%"}}>
        {/* <!-- Carousel wrapper --> */}
        <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
            {/* <!-- Indicators --> */}
            <div className="carousel-indicators">
                <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>

            {/* <!-- Inner --> */}
            <div className="carousel-inner">
                {/* <!-- Single item --> */}
                <div className="carousel-item active">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" className="d-block w-100"
                        alt="Sunset Over the City" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>

                {/* <!-- Single item --> */}
                <div className="carousel-item">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100"
                        alt="Canyon at Nigh" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                {/* <!-- Single item --> */}
                <div className="carousel-item">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100"
                        alt="Cliff Above a Stormy Sea" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
            </div>
            {/* <!-- Inner -->

            <!-- Controls --> */}
            <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample"
                data-mdb-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample"
                data-mdb-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        {/* <!-- Carousel wrapper --> */}
    </section>

  )
}

export default Carousel