import React from 'react'
import { Link } from "react-router-dom";
export default function Confirmation() {
  return (
    <div>
      <section className="row d-flex justify-content-center" style={{marginTop: "6.5%", width: "100%"}}>
    <div className="tab-content col-md-6 shadow-1-strong" style={{borderRadius: "10px"}}>
    
        <div className="container d-flex justify-content-center align-items-center mb-4">

            <div className="progresses">     
                              
            </div>
      <hr />
      </div>
      <div>
        <div>
        <h3 className="text-center">Confirmation</h3>
    </div>
    <div className="d-flex justify-content-center">
        <img  src="https://img.icons8.com/officel/344/approval.png"  width="170px" height="170px" alt="" />
    </div>
<p className="text-center my-2">Event is added successfully!!</p>


    </div>
    
    <div className="text-center mt-2 mb-3">
<button className="btn btn-primary" >Dashboard</button>

  </div>
  </div>
  </section>
    </div>
  );
}
