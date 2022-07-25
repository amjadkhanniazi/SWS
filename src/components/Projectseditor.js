import React from 'react'
import Navbar from './Navbar';
import "./styles.css";

 function Projectseditor() {
  return (
    <div>
        <Navbar/>
        <button type="button" class="btn btn-primary" 
        style={{position:"absolute",top:"10%",left:"70%"}}>Create</button>
        <button type="button" class="btn btn-primary" 
        style={{position:"absolute",top:"10%",left:"79%"}}>Publish</button>
      <div className="container" style={{position:"absolute",top:"20%",left:"20%"}}>
  <div className="title" style={{marginLeft:"30%"}}>
    <h3>Post A Project</h3>
  </div>

  <div id="editparent">
    <div id="editControls">
      <div className="btn-group">
        <a className="btn btn-xs btn-default" data-role="undo" href="#" title="Undo"><i className="fa fa-undo"></i></a>
        <a className="btn btn-xs btn-default" data-role="redo" href="#" title="Redo"><i className="fa fa-repeat"></i></a>
      </div>
      <div className="btn-group">
        <a className="btn btn-xs btn-default" data-role="bold" href="#" title="Bold"><i className="fa fa-bold"></i></a>
        <a className="btn btn-xs btn-default" data-role="italic" href="#" title="Italic"><i className="fa fa-italic"></i></a>
        <a className="btn btn-xs btn-default" data-role="underline" href="#" title="Underline"><i className="fa fa-underline"></i></a>
        <a className="btn btn-xs btn-default" data-role="strikeThrough" href="#" title="Strikethrough"><i className="fa fa-strikethrough"></i></a>
      </div>
      <div className="btn-group">
        <a className="btn btn-xs btn-default" data-role="indent" href="#" title="Blockquote"><i className="fa fa-indent"></i></a>
        <a className="btn btn-xs btn-default" data-role="insertUnorderedList" href="#" title="Unordered List"><i className="fa fa-list-ul"></i></a>
        <a className="btn btn-xs btn-default" data-role="insertOrderedList" href="#" title="Ordered List"><i className="fa fa-list-ol"></i></a>
      </div>
      <div className="btn-group">
        <a className="btn btn-xs btn-default" data-role="h1" href="#" title="Heading 1"><i className="fa fa-header"></i><sup>1</sup></a>
        <a className="btn btn-xs btn-default" data-role="h2" href="#" title="Heading 2"><i className="fa fa-header"></i><sup>2</sup></a>
        <a className="btn btn-xs btn-default" data-role="h3" href="#" title="Heading 3"><i className="fa fa-header"></i><sup>3</sup></a>
        <a className="btn btn-xs btn-default" data-role="p" href="#" title="Paragraph"><i className="fa fa-paragraph"></i></a>
      </div>
    </div>
  </div>
</div>
</div>

  )
}
export default Projectseditor;