import React from 'react'
import Navbar from './Navbar';
import { Link } from "react-router-dom";
function Eventss() {
  return (
    <div>
<Navbar/>
<button type="button" className="btn btn-primary" style={{position:"absolute",top:"-10%",left:"90%"}}>
                    Create
                  </button>
     
      <div>
   
        <div className="container">
       
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="New file"
                    >
                      <i className="fa fa-file-o"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Save"
                    >
                      <i className="fa fa-save"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Print"
                    >
                      <i className="fa fa-print"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Source code"
                    >
                      <i className="fa fa-code"></i> Source
                    </button>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Bold"
                    >
                      <i className="fa fa-bold"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Italic"
                    >
                      <i className="fa fa-italic"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Underline"
                    >
                      <i className="fa fa-underline"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Strikethrough"
                    >
                      <i className="fa fa-strikethrough"></i>
                    </button>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Cut"
                    >
                      <i className="fa fa-scissors"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Copy"
                    >
                      <i className="fa fa-copy"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Past"
                    >
                      <i className="fa fa-paste"></i>
                    </button>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Undo"
                    >
                      <i className="fa fa-reply"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Redo"
                    >
                      <i className="fa fa-share"></i>
                    </button>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Align left"
                    >
                      <i className="fa fa-align-left"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Align center"
                    >
                      <i className="fa fa-align-center"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Align right"
                    >
                      <i className="fa fa-align-right"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Align justify"
                    >
                      <i className="fa fa-align-justify"></i>
                    </button>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Numbered list"
                    >
                      <i className="fa fa-list-ol"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Bulleted list"
                    >
                      <i className="fa fa-list-ul"></i>
                    </button>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Link"
                    >
                      <i className="fa fa-link"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Unlink"
                    >
                      <i className="fa fa-unlink"></i>
                    </button>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Picture"
                    >
                      <i className="fa fa-picture-o"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="HTML table"
                    >
                      <i className="fa fa-table"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="tooltip"
                      title="Font"
                    >
                      <i className="fa fa-font"></i>
                    </button>
                  </div>
                </div>
                <div className="panel-body">
                  <h2>Hello and welcome</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut{" "}
                    <a href="http://www.jquery2dotnet.com/2013/12/brand-icons-design-using-css.html">
                      Brand Icons Design Using Css
                    </a>{" "}
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </div>
                <div className="panel-footer">
                  <button type="button" className="btn btn-success">
                    Publish
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save Draft
                  </button>
                  <div className="pull-right">
                    <button type="button" className="btn btn-danger">
                      <i className="fa fa-trash-o"></i> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 " style={{width: "48.5%",position:"absolute",top:"110%",left:"25%"}}>
      <table class="table align-middle mb-0 bg-white"
                   >
  <thead class="bg-light">
  <tr>
      <th style={{color:"black"}}>Case Id</th>
      <th style={{color:"black"}}>CaseTitle</th>
      <th style={{color:"black"}}>Approval</th>
     
      <th style={{color:"black"}}>Modilfy</th>
    
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
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
        
      </td>

   
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-trash"></i>
        </button>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-pen-square"></i>
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">1</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
       
      </td>
     
   
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-trash"></i>
        </button>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-pen-square"></i>
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">1</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
       
      </td>
      
   
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-trash"></i>
        </button>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-pen-square"></i>
        </button>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">1</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
       
      </td>
      
   
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-trash"></i>
        </button>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-pen-square"></i>
        </button>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">1</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
        
      </td>
   
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-trash"></i>
        </button>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-pen-square"></i>
        </button>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">1</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
       
      </td>
      
   
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-trash"></i>
        </button>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-pen-square"></i>
        </button>
       
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">1</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
       
      </td>
   
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-trash"></i>
        </button>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-pen-square"></i>
        </button>
       
      </td>
    </tr>
   
    <tr>
      <td>
        <div className="d-flex align-items-center">
         
          <div className="ms-3">
            <p className="fw-bold mb-1">1</p>
           
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Education Case</p>
        
      </td>
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
          Accept
        </button>
      
      </td>
     
   
      <td>
      <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-trash"></i>
        </button>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
        <i class="fas fa-pen-square"></i>
        </button>
       
      </td>
    </tr>
   
    
   
    
     
       
  </tbody>
</table>
            

</div>
    </div>
  )
}

export default Eventss