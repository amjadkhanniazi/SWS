import React from 'react'
import { Link } from "react-router-dom";
export default function NavbarEventLinkPage() {
  return (
    <div class="container">
      <section style={{marginTop: "12%"}}>
                <h1 style={{color: "#0C56D0", textAlign: "center", marginTop: "5%"}}> Upcoming Events</h1>
                <div class="container shadow-4-strong gx-0" style={{marginTop: "5%",  width: "900px"}}>

                    <div class="container " style= {{height: "400px"}}>
                        <img src="./img/1.jpg" alt='' style={{height: "400px", width: "900px"}} />
                    </div>
                    <div class="container" style={{height: "250px", textAlign: "center"}}>
                        <h3 style={{marginTop: "3%"}}>Heading</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, adipisci. Laudantium
                            consequatur fugit odit qui modi,
                            corporis itaque rem alias blanditiis repellendus dolore, distinctio, eius quas nisi quos
                            labore sequi.</p>
                        <button class="btn btn-primary shadow-4-strong" style={{marginTop: "5%"}}> Set Reminder</button>
                        <button class="btn btn-primary shadow-4-strong" style={{marginLeft: "50%"}}> Donate Now</button>
                    </div>

                </div>
            </section>

            <section style={{marginTop: "12%"}}>
                <h1 style={{color: "#0C56D0", textAlign: "center", marginTop: "5%"}}> Recent Events</h1>
                <div class="container shadow-4-strong gx-0" style={{marginTop: "5%",  width: "900px"}}>
                    <div class="container " style={{height: "400px"}}>
                        <img src="./img/1.jpg" alt='' style={{height: "400px", width: "900px"}} />
                    </div>
                    <div class="container" style={{height: "250px", textAlign: "center"}}>
                        <h3 style={{marginTop: "3%"}}>Heading</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, adipisci. Laudantium
                            consequatur fugit odit qui modi,
                            corporis itaque rem alias blanditiis repellendus dolore, distinctio, eius quas nisi quos
                            labore sequi.</p>
                        <button class="btn btn-primary shadow-4-strong" style={{marginTop: "5%"}}> Donate Now</button>

                    </div>
                </div>
            </section>
    </div>
  )
}
