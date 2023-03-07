import React, {useState} from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";


import './MainNavigation.css';
const MainNavigation = props =>{
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () =>{
     setDrawerIsOpen(true);
    }
 
return(
<React.Fragment>
     {drawerIsOpen && (<SideDrawer>
        <nav className="main-navigation__drawer-nav">
           <NavLinks />
        </nav>
    </SideDrawer>)}

    <MainHeader>

        <button className="main-navigation__menu-btn" onClick={openDrawer}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <h1 className="main-navigation__title">
            <Link to="/"> Your Places</Link>
        </h1>

        <nav className="main-navigation__header-nav">
           <NavLinks></NavLinks>
        </nav>

    </MainHeader>
</React.Fragment>
    

)
};

export default MainNavigation;