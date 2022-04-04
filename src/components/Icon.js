import React from "react";
import { FaRegHeart, FaPen, FaRegTimesCircle } from 'react-icons/fa';


const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegHeart className="icon"/>
    case "cross":
      return <FaRegTimesCircle className="icon"/>
    default:
      return <FaPen className ="icon"/>
    
    
    }
  
};

export default Icon;
