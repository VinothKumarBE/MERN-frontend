import React from "react";
import { NavLink } from "react-router-dom";
import './NavLinks.css'

const NavLinks  = props =>{
    return(
             <div>

                <ul className="nav-links">
                     <li>

                        <NavLink to="/" exact>ALL USERS</NavLink>
                     </li>
                      <li>

                        <NavLink to="/u1/places">MY PLACES</NavLink>
                     </li>
                      <li>

                        <NavLink to="/new/places">ADD PLACES</NavLink>
                     </li> 
                     <li>

                        <NavLink to="/auth">AUTHENTICATE</NavLink>
                     </li>
                </ul>







            </div>


    )

}
export default NavLinks