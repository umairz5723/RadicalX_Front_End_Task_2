import "./styles/leftbox.css";
import "./styles/rightbox.css"
import { useState } from "react";
import { AiOutlineCaretRight, AiOutlinePlusCircle ,AiFillCloseCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { TextField } from "@mui/material";


function LeftBox(props){

    const [showTab, setShowTab] = useState(0);

   const handleTab = (e) => {
      setShowTab(e);
   }

   const added = ["Technology", "Development"];

    return <div>
    <div id="left-box">
          
          <div className="left-box-frame">
              <FaBars/> 
          <button onClick={()=> handleTab(1) }> <div className="left-box-frame-content"> <p>Category</p> <AiOutlineCaretRight/> </div> </button>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <button onClick={()=> handleTab(2) }> <div className="left-box-frame-content"> <p>Description</p> <AiOutlineCaretRight/> </div> </button>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <button onClick={()=> handleTab(3) }> <div className="left-box-frame-content"> <p>Location</p> <AiOutlineCaretRight/> </div> </button>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <div className="left-box-frame-content"> <p>Benefits</p>  <AiOutlineCaretRight/> </div>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <div className="left-box-frame-content"> <p>Intro Video</p> <AiOutlineCaretRight/> </div>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <div className="left-box-frame-content"> <p>Mentor Details</p>  <AiOutlineCaretRight/> </div>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <div className="left-box-frame-content"> <p>Recommended Roles</p> <AiOutlineCaretRight/> </div>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <div className="left-box-frame-content"> <p>Web Links & Resources</p> <AiOutlineCaretRight/> </div>
           </div>
          
          <div className="assessment-frame"> <AiOutlinePlusCircle/> Add More</div>
      </div>
      
      <div id="right-box">
         
         <div className={showTab === 1 ? "right-box-category" : "none"}> 
            <p className="right-box-titles"> Categories </p>
           
           <div className="right-box-category-input"> 
           <TextField
              name="body"
              rows="1"
              id="input-text-area"
              label="Search"
              fullWidth
            />
            </div>
            
            <div className="added-list">
            {added.map((added) => (
                <div className="added-item"> <p>{added}</p> <AiFillCloseCircle color="#7B61FF
" /></div>
            ))}
            </div>
           
         </div>
         
         <div className={showTab === 2 ? "right-box-description" : "none"}>
            <p className="right-box-titles">Description</p>
               <div className="right-box-description-text"> 
                  <TextField
                  variant="outlined"
                  rows="6"
                  fullWidth
                  id="standard-textarea"
                  label="Description"
                  multiline
                  margin="0"
                  />
               </div> 
          </div>

      </div>
    </div>
}

export default LeftBox;