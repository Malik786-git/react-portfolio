import { useContext } from "react"
import { NavLink } from "react-router-dom";
import myContext from "../../context/context"

const Sidebar = () => {

  const {isSidebarOpen, closeSidebar} = useContext(myContext);

  return (
    <div className={isSidebarOpen ? "sidebar open-sidebar" : "sidebar"}>
         <span className="close-X menu-font"
               onClick={closeSidebar}
         >X</span>

         <div className="menu menu-font">
             <ul>
              <li> <NavLink className="nav-anchor" onClick={closeSidebar} to="/" >Home</NavLink></li>
              <li> <NavLink className="nav-anchor" onClick={closeSidebar} to="/work" >Skills & Work</NavLink></li>
              <li> <NavLink className="nav-anchor" onClick={closeSidebar} to="/about" >About</NavLink></li>
              <li> <NavLink className="nav-anchor" onClick={closeSidebar} to="/contact" >Contact</NavLink></li>              
             </ul>
         </div>

    </div>
  )
}

export default Sidebar
