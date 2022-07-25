import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from 'react-router-dom'
function ChangePassword() {
  return (
    <>
    <Navbar/>
    <section class="row d-flex justify-content-center" style={{marginTop: "6.5%", width: "100%",  height: "300px"}}>
     <div class=" col-md-6 shadow-1-strong" style={{borderRadius: "10px"}}>

       <div class="container d-flex justify-content-center align-items-center mb-4">

   
         <div class="card-body p-4" >
              <h3 class="text-center mb-3 " style={{marginTop: "5%"}} >Change Your Password</h3>
              
            <form >
              <div style={{position: "relative"}}>
              <div class="form-outline w-50 " style={{ position: "absolute", marginLeft: "26%"}}>
                <div class="form-outline w-100" >
                  <input type="text" id="typeText" class="form-control 
                  form-control-lg" siez="17"
                  style={{border:"1px solid black"}}
                    placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                  <label class="form-label" for="typeText">Enter email</label>
                
              </div>
                
              </div>

             
               
              </div>
              <div style={{ position: "absolute", marginTop: "6.5%", marginLeft: "11%", borderRadius: "100%"}}>
                <Link to='home'>
                <button type="button" class="btn btn-primary btn-lg" >
                    Submit
                  </button>
                  </Link>
              </div> 
         
             </form>
              </div>
              </div>
              </div>
              </section>
          
<Footer/>
    </>
    
  )
}

export default ChangePassword