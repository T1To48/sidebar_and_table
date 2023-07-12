import { useState } from "react";
import SidebarFooter from "./Sidebar.footer";
import SidebarHeader from "./Sidebar.header";
import SideBarMenu from "./Sidebar.menu";
const Sidebar = ({switchMode,mode}:{switchMode:()=>void,mode:string}) => {
const [sidebarStatus, setSidebarStatus] = useState("close")

  const toggleSidebar=()=>{
    const newVal=sidebarStatus===""?"close":"";
    setSidebarStatus(newVal)
  }
  return (
    <nav className={`sidebar ${sidebarStatus}`}>
      <SidebarHeader toggleSidebar={toggleSidebar} />
      <div className="menu-bar">
      <SideBarMenu openSideBar={()=>setSidebarStatus("")} />
      <SidebarFooter switchMode={switchMode} mode={mode} />
      </div>
    </nav>
  );
};

export default Sidebar;
