import React from 'react'
import Footer from './Footer'
import { Link } from "react-router-dom";
import Navbar from './Navbar'

export default function ProjectDescription() {
  return (
    <>
    <Navbar/>
    <div style={{width:"80%", margin:"auto"}}>
      <section style={{marginTop: "10%"}}>
        <h1 style={{textAlign: "center", color: "blue"}}>Project Title</h1>
        <div className="container gx-0 my-5 max-width" style={{height: "350px", width: "1000px"}}>
            <img src="./img/1.jpg" alt='' width="1000px" height="350px" />
        </div>
        <div className="container my-5 gx-0" style={{height: "700px", width: "1000px"}}>
            <div style={{height: "700px", float: "left", width: "680px", border: "2px solid grey"}}>
                <a href="/">
                    <p style={{padding: "10px"}}>Want to Help</p>
                </a>
                <p style={{lineHeight: "25px", wordSpacing: "5px",
                    textAlign: "justify", padding: "10px"}}>
                    There are 842 million undernourished people in the world today. That means one in eight people do not get enough food to be healthy and lead an active life.

Hunger and malnutrition are in fact the number one risk to health worldwide — greater than AIDS, malaria and tuberculosis combined.

Solving hunger lays the foundation for progress in many other areas of development, including health and education. Well-nourished women have healthier, heavier babies whose immune systems are stronger for life. 
A healthy, well-fed child is also more likely to attend school.
We have many families on our books that need your support. Please help us to provide them with Ration Packs.

A typical Ration Pack includes:

Flour 20kgs
Rice 8kg
Sugar 5kg
Cooking Oil 5ltr
Daal Channa 2kg
Daal Moong 1kg
Daal Masoor 1kg
Red Chilli Powder 200gm
Coriander Powder 200gm
Turmeric Powder 100gm
Tea 800gm
Salt 800gm
We have many families on our books that need your support. Please help us to provide them with Ration Packs.

A typical Ration Pack includes:

Flour 20kgs
Rice 8kg
Sugar 5kg
Cooking Oil 5ltr
Daal Channa 2kg
Daal Moong 1kg
Daal Masoor 1kg
Red Chilli Powder 200gm
Coriander Powder 200gm
Turmeric Powder 100gm
Tea 800gm
Salt 800gm
We have many families on our books that need your support. Please help us to provide them with Ration Packs.

A typical Ration Pack includes:

Flour 20kgs
Rice 8kg
Sugar 5kg
Cooking Oil 5ltr
Daal Channa 2kg
Daal Moong 1kg
Daal Masoor 1kg
Red Chilli Powder 200gm
Coriander Powder 200gm
Turmeric Powder 100gm
Tea 800gm
Salt 800gm
We have many families on our books that need your support. Please help us to provide them with Ration Packs.

A typical Ration Pack includes:

Flour 20kgs
Rice 8kg
Sugar 5kg
Cooking Oil 5ltr
Daal Channa 2kg
Daal Moong 1kg
Daal Masoor 1kg
Red Chilli Powder 200gm
Coriander Powder 200gm
Turmeric Powder 100gm
Tea 800gm
Salt 800gm
                </p>
                <a  href="/paymethodoption" role="button" className="btn btn-primary btn-lg m-2 shadow-4-strong">
                    Donate Now
                </a>
            </div>
            <div className=" shadow-4-strong" style={{marginTop: "17%",  height: "470px",
                                float: "right", width: "300px",  padding: "20px"}}>
                <h4 style={{marginBottom: "5%"}}>Other Projects</h4>
                <Link to="/projectdescrip"><div style={{height: "70px", backgroundColor: "#F2F2F2"}} className="my-2 shadow-2-strong">
                    <div style={{width: "70px", height: "70px", float: "left"}}>
                        <img src="./img/6.jpg" alt='' height="60px" width="70px" />
                    </div>

                    <div style={{float: "right", marginRight: "7%"}}>
                        <p>Education For Children<br />12 Jan 2022</p>
                    </div>

                </div></Link>

                <Link to="/projectdescrip"><div style={{height: "70px", backgroundColor: "#F2F2F2"}} className="my-2 shadow-2-strong">
                    <div style={{width: "70px", height: "70px", float: "left"}}>
                        <img src="./img/31.jpg" alt='' height="60px" width="70px" />
                    </div>

                    <div style={{float: "right", marginRight: "7%"}}>
                        <p>Education For Children<br />12 Jan 2022</p>
                    </div>

                </div></Link>

                <Link to="/projectdescrip"><div style={{height: "70px", backgroundColor: "#F2F2F2"}} className="my-2 shadow-2-strong">
                    <div style={{width: "70px", height: "70px", float: "left"}}>
                        <img src="./img/14.jpg" alt='' height="60px" width="70px" />
                    </div>

                    <div style={{float: "right", marginRight: "7%"}}>
                        <p>Education For Children<br />12 Jan 2022</p>
                    </div>

                </div></Link>

                <Link to="/projectdescrip"><div style={{height: "70px", backgroundColor: "#F2F2F2"}} className="my-2 shadow-2-strong">
                    <div style={{width: "70px", height: "70px", float: "left"}}>
                        <img src="./img/44.jpg" alt='' height="60px" width="70px" />
                    </div>

                    <div style={{float: "right", marginRight: "7%"}}>
                        <p>Education For Children<br />12 Jan 2022</p>
                    </div>

                </div></Link>

                <Link to="/projectdescrip"><div style={{height: "70px", backgroundColor: "#F2F2F2"}} className="my-2 shadow-2-strong">
                    <div style={{width: "70px", height: "70px", float: "left"}}>
                        <img src="./img/13.jpg" alt='' height="60px" width="70px" />
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
