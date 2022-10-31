import { useContext } from "react";
import myContext from "../../context/context";

const Navbar = () => {

  const {isSidebarOpen, openSidebar} = useContext(myContext);

   console.log(isSidebarOpen);
  return (
    <div className="container-fuild navbar railway-bold mb-5">
        <div className="container d-flex justify-content-between">

         <h5 className="Logo menu-font">ΛΛalik 🖊</h5>
         <span onClick={openSidebar}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </span>

        </div>
    </div>
  )
}

export default Navbar;
