import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import './NavLinks.css'
import { AuthContext } from "../../context/auth-context";

const NavLinks  = props =>{
   const auth= useContext(AuthContext)
    return(
             <div>

                <ul className="nav-links">
                     <li>

                        <NavLink to="/" exact>ALL USERS</NavLink>
                     </li>
                     {auth.isLoggedIn && (
                      <li>
                      
                        <NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
                     </li>
                     )}
                     {auth.isLoggedIn && (
                       <li>

                        <NavLink to="/new/place">ADD PLACES</NavLink>
                       </li> 
                      )}
                     {!auth.isLoggedIn && (
                     <li>

                        <NavLink to="/auth">AUTHENTICATE</NavLink>
                     </li>
                       )}
{auth.isLoggedIn &&(
   <li>
      <button onClick={auth.logout}>LOGOUT</button>
   </li>
)}
                </ul>

       </div>


    );

};
export default NavLinks