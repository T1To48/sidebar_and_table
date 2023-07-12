
const SidebarFooter = ({switchMode,mode}:{switchMode:()=>void,mode:string}) => {
  
  return (
    <div className="bottom-content">
        <li className="">
                    <a href="#">
                    <i className='bx bx-log-out icon'/>
                    <span className="text nav-text">Logout</span>
                    </a>
                </li>
        <li className="mode">
                    <div className="moon-sun">
                        <i className="bx bx-moon icon moon "></i>
                        <i className="bx bx-sun icon sun "></i>
                    </div>
                    <span className="mode-text text">{mode}</span>
                    <div className="toggle-switch" onClick={switchMode} >
                        <span className="switch"></span>
                    </div>
                </li>
    </div>
  )
}

export default SidebarFooter