import React from 'react'

function Accordian() {
  return (
    <div>
  <h1 style={{textAlign:"center", marginTop:"3%"}}>Frequently Asked Questions</h1>
<div className="accordion" id="accordionExample" style={{marginTop:"8%",width:"60%",marginLeft:"20%"}}>
  <div className="accordion-item">
    <h2 className="accordion-header bg-dark text-light my-2" id="headingOne"  >
      <button
        className="accordion-button text-light"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
              >
     How to become a Volunteer?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show shadow-4-strong" aria-labelledby="headingOne" data-mdb-parent="#accordionExample" >
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classNamees that we use to style each
        element. These classNamees control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just about any HTML
        can go within the <strong>.accordion-body</strong>, though the transition does
        limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header bg-dark text-light my-2" id="headingTwo">
      <button
        className="accordion-button collapsed text-light"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
      What is the eligibility criteria to become a volunteer?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse shadow-4-strong" 
    aria-labelledby="headingTwo" data-mdb-parent="#accordionExample" style={{border:"1px solid white"}}>
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by
        default, until the collapse plugin adds the appropriate classNamees that we use to
        style each element. These classNamees control the overall appearance, as well as the
        showing and hiding via CSS transitions. You can modify any of this with custom CSS
        or overriding our default variables. It's also worth noting that just about any
        HTML can go within the <strong>.accordion-body</strong>, though the transition
        does limit overflow.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header bg-dark text-light my-2" id="headingFour" >
      <button
        className="accordion-button collapsed text-light"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseFour"
        aria-expanded="false"
        aria-controls="collapseFour"
      >
      What reponsibilities of a volunteer?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse shadow-4-strong" 
    aria-labelledby="headingFour" data-mdb-parent="#accordionExample" style={{border:"1px solid white"}}>
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classNamees that we use to style each
        element. These classNamees control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just about any HTML
        can go within the <strong>.accordion-body</strong>, though the transition does
        limit overflow.
      </div>
    </div>
    
  </div>
  
  
</div>

    </div>
  )
}

export default Accordian