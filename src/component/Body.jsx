// import MenuContainer from "./MenuContainer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";


function Body() {
  return (
    <>
      <div className="grid grid-flow-col">
        <Sidebar />
        {/* either i want maincontainer or watchpage for nned tomake dynamic for that we use outlet */}
        <Outlet />
      </div>
    </>
  )
}
export default Body;