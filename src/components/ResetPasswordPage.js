import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from "react-router-dom";

export default function ResetPasswordPage() {
  return (
    <>
    <Navbar/>
    
      <section >
        <div className="shadow-2-strong"
            style={{width: "500px", height: "300px", margin:"20% auto auto auto",padding:"10px", borderRadius: "10px"}}>
            <h2 style={{textAlign: "center"}}>Reset password</h2>
            <form style={{marginTop: "10%", padding:"20px"}}>

              
                <div className="form-outline mb-4" style={{border: "1px solid grey"}}>
                    <input type="email" id="form4Example2" className="form-control" />
                    <label className="form-label" for="form4Example2">Email address</label>
                </div>


        
                <button type="submit" className="btn btn-primary btn-block mb-4">Reset Password</button>
            </form>
        </div>
    </section>
    
    <Footer/>
    </>
  )
}
