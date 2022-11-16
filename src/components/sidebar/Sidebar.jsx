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
          <div className="social-links">
          <a className="icons" href="https://www.facebook.com/profile.php?id=100011416972009" target="blank"> <i className="fa fa-facebook" aria-hidden="true"></i></a>
              <a className="icons" href="https://www.instagram.com/malikprogrammer_786/" target="blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
              <a className="icons" href="https://twitter.com/malikmu63647973" target="blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              <a className="icons" href="https://www.linkedin.com/in/malik-muhammad-jahangir-7987901b7/" target="blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
             
            </div>   
    </div>
  )
}

export default Sidebar
