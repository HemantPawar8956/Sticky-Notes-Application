import React from 'react'
import { FaBars } from "react-icons/fa6";
import { GrDocumentNotes } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";

const Nav = () => {
  return (
    <section className='NavBody'>
        <ul>
            <li><FaBars/></li>
            <li><GrDocumentNotes className='Logo'/><span>Sticky Notes</span></li>
        </ul>
        <div><input type="text" name="search" id="search" placeholder='Search' /> </div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li><VscAccount className="UserLogo"/>User</li>
        </ul>
    </section>
  )
}

export default Nav