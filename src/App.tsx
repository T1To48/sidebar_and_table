import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar.component'
import Table from './components/table/Table/Table.component'
function App() {
  const [mode, setMode] = useState("")
  const [modeStr, setModeStr] = useState("Dark Mode")
  const handleSwitchMode=()=>{
    const newVal=mode===""?"dark":"";
    const body=document.querySelector("body");
body?.classList.toggle("dark")
    const newStrVal=mode===""?"Dark Mode":"Light Mode"
    setMode(newVal)
    setModeStr(newStrVal)
  }


  return (
    <div className={`${mode} altBody`}>
      <Sidebar switchMode={handleSwitchMode} modeStr={modeStr} mode={mode} />
        {/* <div className="text">Dashboard</div> */}
         <Table />
     
    </div>
  )
}

export default App
