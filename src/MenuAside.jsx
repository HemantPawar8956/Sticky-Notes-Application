import React, { createRef, useContext } from "react";
import { AiOutlineBulb } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";
const MenuAside = (props) => {
    
  let {Data:{displayAllData,Home}}=props;
  console.log(props)
    
  return (
    <section className="Menu">
      <ul>
      <li ><VscAccount className="UserLogo"/><span className="MenuLabels">My Profile</span></li>
      <li onClick={()=>{Home()}}><AiOutlineHome className="Logo"/>Home</li>
        <li onClick={()=>{displayAllData()}}><AiOutlineBulb className="Logo"/>All Notes</li>
        <li><FaRegBell className="Logo"/> Reminder</li>
        <li><BiPencil className="Logo"/>Edit labels</li>
        <li><FiSettings className="Logo"/> Settings</li>
        <li><button className="LogoutBtn">LOGOUT</button></li>
      </ul>
    </section>
  );
};

export default MenuAside;
