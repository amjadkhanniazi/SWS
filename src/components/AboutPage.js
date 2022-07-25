import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";

export default function AboutPage() {
  return (
    <>
    <Navbar/>
    
    <div classNameName='container'>
      <h1 style={{color: "#0C56D0", marginTop: "10%", textAlign: "center"}}>About Us</h1>
    <section className="container">

        <div className="container-fluid gx-0" style={{height: "500px", marginTop: "5%"}}>
            <div style={{height: "500px", width: "50%", float: "left", borderRadius:"10px 0 0 10px"}}>
                <img src="./img/1.jpg" alt='' width="100%" height="500px" style={{borderRadius:"10px 0 0 10px"}} className="image-responsive" />
            </div>
            <div className="container"
                style={{height: "500px", width: "50%", float: "right",backgroundColor: "rgb(218, 218, 218)",  borderRadius:"0 10px 10px 0"}}>
                <h1 style={{textAlign: "left", marginLeft: "5%", marginTop: "3%"}}>What We Want</h1>
                <p style={{textAlign: "justify", padding:"20px"}}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nulla beatae consequatur, at natus es
                    t, suscipit hic totam esse vero eaque a nihil culpa molestiae? Temporibus mollitia similique unde
                    blanditiis?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nulla beatae consequatur, at natus es
                    t, suscipit hic totam esse vero eaque a nihil culpa molestiae? Temporibus mollitia similique unde
                    blanditiis?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nulla beatae consequatur, at natus es
                    t, suscipit hic totam esse vero eaque a nihil culpa molestiae? Temporibus mollitia similique unde
                    blanditiis?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nulla beatae consequatur, at natus es
                    t, suscipit hic totam esse vero eaque a nihil culpa molestiae? Temporibus mollitia similique unde
                    blanditiis?
                </p>
                <Link to="/paymethodoption">
                <button className="btn btn-primary mx-3 shadow-4-strong">Donate Now</button>
                </Link>
            </div>
        </div>
    </section>

    {/* <h1 style={{color: "#0C56D0", marginTop: "50px", textAlign: "center"}}>Our Vision</h1> */}
    <h1 style={{color: "#0C56D0", marginTop: "40%", textAlign: "center"}}>Our Vision</h1>
    <section className="container my-5">

        <div className="container-fluid gx-0" style={{height: "500px", marginTop: "5%"}}>
            <div style={{height: "500px", width: "50%", float: "right", borderRadius:"0 10px 10px 0"}}>
                <img src="./img/1.jpg" alt='' width="100%" height="500px"style={{borderRadius:"0 10px 10px 0"}} className="image-responsive" />
            </div>
            <div className="container"
                style={{height: "500px", width: "50%", float: "left",backgroundColor: "rgb(218, 218, 218)", borderRadius:"10px 0 0 10px"}} >
                <h1 style={{textAlign: "left", marginLeft: "5%", marginTop: "7%"}}>What We Want</h1>
                <p style={{textAlign: "justify", marginLeft: "5%", marginRight: "7%"}}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nulla beatae consequatur, at natus es
                    t, suscipit hic totam esse vero eaque a nihil culpa molestiae? Temporibus mollitia similique unde
                    blanditiis?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nulla beatae consequatur, at natus es
                    t, suscipit hic totam esse vero eaque a nihil culpa molestiae? Temporibus mollitia similique unde
                    blanditiis?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nulla beatae consequatur, at natus es
                    t, suscipit hic totam esse vero eaque a nihil culpa molestiae? Temporibus mollitia similique unde
                    blanditiis?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nulla beatae consequatur, at natus es
                    t, suscipit hic totam esse vero eaque a nihil culpa molestiae? Temporibus mollitia similique unde
                    blanditiis?
                </p>
                <Link to="/paymethodoption">
                <button className="btn btn-primary mx-4 shadow-4-strong">Donate Now</button>
                </Link>
            </div>
        </div>
    </section>

    <div className="container" style={{textAlign: "center", padding: "10px", margin: "40% 0 10% 7%"}}>
       <Link to="/allevent">
        <button className="btn btn-primary shadow-4-strong" style={{height: "50px", fontSize: "20px"}}>
            Our Projects
        </button>
        </Link>
        <Link to="/paymethodoption">
        <button className="btn btn-primary shadow-4-strong" style={{height: "50px", fontSize: "20px", marginLeft: "30px"}} >
            Want to Donate
        </button>
        </Link>
        <Link to="/allproj">
        <button className="btn btn-primary shadow-4-strong" style={{height: "50px", fontSize: "20px", marginLeft: "30px"}}>
            Latest Events
        </button>
        </Link>

    </div>
    </div>
    <Footer/>
    </>
  )
}
