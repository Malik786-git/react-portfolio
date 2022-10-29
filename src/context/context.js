import { createContext, useState } from "react";



const myContext = createContext();

export const AppProvider = ({children})=>{

   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const openSidebar = ()=>{
     setIsSidebarOpen(true);
   }

   const closeSidebar = ()=>{
     setIsSidebarOpen(false);
   }


    return (
       <myContext.Provider 
          value={{
            isSidebarOpen,
            openSidebar,
            closeSidebar
          }}
       >
        {children}
       </myContext.Provider>
    );
}

export default myContext;
