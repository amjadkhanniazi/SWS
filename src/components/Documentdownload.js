import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
function Documentdownload() {
  return (
    <>
    <div>
<Navbar/>
<div className="mt-4 text-center">
                <h4>New Cases</h4>
              </div>
                
              <form className="my-5 mx-4">
               
                
                  <div className="mb-4 " style={{width: "48.5%",position:"absolute",left:"25%"}}>
                  <table class="table align-middle mb-0 bg-white"
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Documet Id</th>
      <th style={{color:"black"}}>Document Title</th>
      <th style={{color:"black"}}>Download</th>

    
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">1</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Cnic Front </p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Download
        </button>
        
      </td>
     
   
     
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">2</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">CnicBackend </p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Download
        </button>
        
      </td>
     
   
     
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">3</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Electricity Bill </p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Download
        </button>
        
      </td>
     
   
     
    </tr>
     
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">4</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Gas Bill </p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Download
        </button>
        
      </td>
     
   
     
    </tr>
   
   </tbody></table>
   </div>
   </form>
   
    </div>
   
    </>
  )
}

export default Documentdownload