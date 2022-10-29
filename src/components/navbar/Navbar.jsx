import { useContext } from "react";
import myContext from "../../context/context";

const Navbar = () => {

  const {isSidebarOpen, openSidebar, closeSidebar} = useContext(myContext);

   console.log(isSidebarOpen);
  return (
    <div className="container-fuild navbar railway-bold ">
        <div className="container d-flex justify-content-between">

         <h1 className="Logo">Malik Jahangir {"/>"}</h1>
         <span onClick={openSidebar}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </span>

        </div>
    </div>
  )
}

export default Navbar;
