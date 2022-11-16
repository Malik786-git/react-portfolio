import { useContext } from "react";
import { NavLink } from "react-router-dom";
import myContext from "../../context/context";

const Navbar = () => {

  const {openSidebar} = useContext(myContext);

  return (
    <nav className="container-fuild navbar railway-bold mb-5 fixed-top">
        <div className="container d-flex justify-content-between">

         <h5 className="Logo menu-font"><NavLink className="nav-anchor" to="/" >ΛΛalik 🖊</NavLink></h5>
         <span className="bar" onClick={openSidebar}>
                <i className="fa fa-bars" aria-hidden="true"></i>
               
            </span>

        </div>
    </nav>
  )
}

export default Navbar;
