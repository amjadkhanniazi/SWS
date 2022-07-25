import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
export default function ContactPage() {
  return (
    <>
    <Navbar/>
    <div style={{width:"80%", margin:"auto"}}>
    <section>
            <h1 style={{marginTop: "10%", textAlign: "center", color: "#0C56D0"}}>Contact Information</h1>
            <div className="container col-md-12 mb-4" style={{height: "200px", marginTop: "7%", position: "relative"}}>
                <div className="shadow-4-strong" style={{border: "3px solid #0C56D0", width:"200px", 
                        height: "200px", position: "absolute", textAlign: "center"}}>
                    <h1 style={{lineHeight: "160px", color: "#0C56D0"}}>Address</h1>
                </div>
                <div className="shadow-4-strong" style={{border: "3px solid #0C56D0", width:"200px", 
                        height: "200px", position: "absolute", marginLeft:"40%", textAlign: "center"}}>
                    <h1 style={{lineHeight: "160px", color: "#0C56D0"}}>Phone No</h1>
                </div>
                <div className="shadow-4-strong" style={{border: "3px solid #0C56D0", width:"200px", 
                        height: "200px", position: "absolute", marginLeft:"80%", textAlign: "center"}}>
                    <h1 style={{lineHeight: "160px", color: "#0C56D0"}}>Email</h1>
                </div>
            </div>
            <div className="container shadow-4-strong"
                style={{width: "450px", height: "500px", marginTop: "10%",marginBottom:"10%",  borderRadius: "10px", border: "1px solid grey", width:"60%"}}>
                <h2 style={{textAlign: "center", marginTop: "5%"}}>Contact Us</h2>
                <form style={{marginTop: "10%"}}>

                    <div className="form-outline mb-4" style={{border: "1px solid grey"}}>
                        <input type="text" id="form4Example1" className="form-control" />
                        <label className="form-label" htmlFor="form4Example1">Name</label>
                    </div>

                    <div className="form-outline mb-4" style={{border: "1px solid grey"}}>
                        <input type="email" id="form4Example2" className="form-control" />
                        <label className="form-label" htmlFor="form4Example2">Email address</label>
                    </div>

                 
                    <div className="form-outline mb-4" style={{border: "1px solid grey"}}>
                        <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                        <label className="form-label" htmlFor="form4Example3">Message</label>
                    </div>

                
                    <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4"  checked />
                        <label className="form-check-label" htmlFor="form4Example4">
                            Send me a copy of this message
                        </label>
                    </div>

                    
                    <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
                </form>
            </div>
    </section>
   
    </div>
    <Footer/>
    </>
  )
}
