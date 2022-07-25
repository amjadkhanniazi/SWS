import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from "react-router-dom";

export default function MobileConfirm() {
  return (
    <>
    <Navbar/>
    <section class="row d-flex justify-content-center" style={{marginTop: "6.5%", width: "100%", height: "500px", position: "relative"}}>
        <div class="tab-content col-md-6 shadow-1-strong" style={{borderRadius: "10px"}}>

            <div class="container d-flex justify-content-center align-items-center mb-4">

                <div class="progresses">


                    <div class="steps  ">
                        <span><i class="fa fa-check"></i></span>
                    </div>
                    <p class="position-absolute" style={{margin: "65px 0 0 -12px"}}><strong>Methods</strong></p>

                    <span class="line "></span>

                    <div class="steps">
                        <span class="fa fa-check"></span>
                    </div>
                    <p class="position-absolute" style={{margin: "65px 0 0 235px"}}><strong>Details</strong></p>

                    <span class="line"></span>

                    <div class="steps">
                        <span class="fa fa-check"></span>
                    </div>
                    <p class="position-absolute" style={{margin: "65px 0 0 448px"}}><strong>Confirmation</strong></p>

                </div>

            </div>
            <hr />

            <div >
                <div>
                    <h4 class="text-center">Confirm Order</h4>
                </div>
                <div class="d-flex justify-content-center">
                    <img src="https://seeklogo.com/images/E/easypaisa-logo-477156A1F0-seeklogo.com.png" width="80px"
                        height="60px" alt="" />

                </div>
                <div class="shadow-1-strong " style={{marginTop: "3%", marginLeft: "20%", textAlign: "center",
                                                    padding: "20px", height: "210px", width: "400px"}}>
                    <h5 style={{textAlign: "center"}}>Recipt</h5>
                    <hr />
                    <p style={{letterSpacing: "2px", fontWeight: "bold", marginTop: "2%"}}>Account Number:  034XXXXXXXX</p>
                    <p style={{letterSpacing: "2px", fontWeight: "bold"}}>Account Title:   Holder's Name</p>
                    <p style={{letterSpacing: "2px", fontWeight: "bold"}}>Donation Amount: R.s.1000</p>
                </div>
                
                <p style={{textAlign: "center", fontWeight: "bold",
                         marginTop: "2%", color: "#0C56D0", fontSize:   "20px"}} >Please Approve Transaction From easypaisa APP</p>
                
            </div>
            

            </div> 
    </section>
    <Footer/>
        </>
  )
}
