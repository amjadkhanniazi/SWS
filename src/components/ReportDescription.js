import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from "react-router-dom";

export default function ReportDescription() {
  return (
    <>
    <Navbar/>
    <div style={{width:"80%", margin:"auto"}}>
      <section style={{marginTop: "10%"}}>
        <h1 style={{textAlign: "center", color: "blue"}}>Report Title</h1>
        <div class="container gx-0 my-5 max-width" style={{height: "350px", width: "1000px"}}>
            <img src="./img/1.jpg" alt='' width="1000px" height="350px" />
        </div>
        <div class="container my-5 gx-0" style={{height: "700px", width: "1000px"}}>
            <div style={{height: "700px", float: "left", width: "680px", border: "2px solid grey"}}>
                
                <p style={{lineHeight: "25px", wordSpacing: "5px",
                    textAlign: "justify", padding: "10px"}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur omnis officia sint dolor,molestias veniam maxime
                    non esse quia reiciendis animi dolore consequuntur de
                    leniti ut aspernatur vel quam odit perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur omnis officia sint dolor,molestias veniam maxime
                    non esse quia reiciendis animi dolore consequuntur de
                    leniti ut aspernatur vel quam odit perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur omnis officia sint dolor,molestias veniam maxime
                    non esse quia reiciendis animi dolore consequuntur de
                    leniti ut aspernatur vel quam odit perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur omnis officia sint dolor,molestias veniam maxime
                    non esse quia reiciendis animi dolore consequuntur de
                    leniti ut aspernatur vel quam odit perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur omnis officia sint dolor,molestias veniam maxime
                    non esse quia reiciendis animi dolore consequuntur de
                    leniti ut aspernatur vel quam odit perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur omnis officia sint dolor,molestias veniam maxime
                    non esse quia reiciendis animi dolore consequuntur de
                    leniti ut aspernatur vel quam odit perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur omnis officia sint dolor,molestias veniam maxime
                    non esse quia reiciendis animi dolore consequuntur de
                    leniti ut aspernatur vel quam odit perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur omnis officia sint dolor,molestias veniam maxime
                    non esse quia reiciendis animi dolore consequuntur de
                    leniti ut aspernatur vel quam odit perferendis.
                </p>
                
            </div>
            <div class=" shadow-4-strong" style={{marginTop: "17%",  height: "470px",
                                float: "right", width: "300px",  padding: "20px"}}>
                <h4 style={{marginBottom: "5%"}}>Other Reports</h4>
                <Link to="/reportdescrip"><div style={{height: "70px", backgroundColor: "#F2F2F2"}} class="my-2 shadow-1-strong">
                    <div style={{width: "70px", height: "70px", float: "left"}}>
                        <img src="./img/11.jpg" alt='' height="60px" width="70px" />
                    </div>

                    <div style={{float: "right", marginRight: "7%"}}>
                        <p>Marriage Report<br />12 Jan 2022</p>
                    </div>

                </div></Link>

                <Link to="/reportdescrip"><div style={{height: "70px", backgroundColor: "#F2F2F2"}} class="my-2 shadow-1-strong">
                    <div style={{width: "70px", height: "70px", float: "left"}}>
                        <img src="./img/20.jpg" alt='' height="60px" width="70px" />
                    </div>

                    <div style={{float: "right", marginRight: "7%"}}>
                        <p>Education For Children<br />12 Jan 2022</p>
                    </div>

                </div></Link>

                <Link to="/reportdescrip"><div style={{height: "70px", backgroundColor: "#F2F2F2"}} class="my-2 shadow-1-strong">
                    <div style={{width: "70px", height: "70px", float: "left"}}>
                        <img src="./img/18.jpg" alt='' height="60px" width="70px" />
                    </div>

                    <div style={{float: "right", marginRight: "7%"}}>
                        <p>Eid Clothes<br />12 Jan 2022</p>
                    </div>

                </div></Link>

                <Link to="/reportdescrip"><div style={{height: "70px", backgroundColor: "#F2F2F2"}} class="my-2 shadow-1-strong">
                    <div style={{width: "70px", height: "70px", float: "left"}}>
                        <img src="./img/35.jpg" alt='' height="60px" width="70px" />
                    </div>

                    <div style={{float: "right", marginRight: "7%"}}>
                        <p>Medical case<br />12 Jan 2022</p>
                    </div>

                </div></Link>

                <Link to="/reportdescrip"><div style={{height: "70px", backgroundColor: "#F2F2F2"}} class="my-2 shadow-1-strong">
                    <div style={{width: "70px", height: "70px", float: "left"}}>
                        <img src="./img/20.jpg" alt='' height="60px" width="70px" />
                    </div>

                    <div style={{float: "right", marginRight: "7%"}}>
                        <p>Education For Children<br />12 Jan 2022</p>
                    </div>

                </div></Link>

            </div>

        </div>
    </section>
    </div>
    <Footer/>
    </>
  )
}
