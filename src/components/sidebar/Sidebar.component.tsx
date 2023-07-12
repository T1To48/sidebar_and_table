import { useState } from "react";
import SidebarFooter from "./Sidebar.footer";
import SidebarHeader from "./Sidebar.header";
import SideBarMenu from "./Sidebar.menu";
const Sidebar = ({switchMode,mode,modeStr}:{switchMode:()=>void,mode:string,modeStr:string}) => {
const [sidebarStatus, setSidebarStatus] = useState("close")

  const toggleSidebar=()=>{
    const newVal=sidebarStatus===""?"close":"";
    setSidebarStatus(newVal)
  }
  return (
    <nav className={`sidebar ${sidebarStatus}`}>
      <SidebarHeader toggleSidebar={toggleSidebar} mode={mode}  />
      <div className="menu-bar">
      <SideBarMenu openSideBar={()=>setSidebarStatus("")} />
      <SidebarFooter switchMode={switchMode} mode={modeStr} />
      </div>
    </nav>
  );
};

export default Sidebar;
