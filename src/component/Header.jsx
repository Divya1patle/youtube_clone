
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import Icon from "../assets/icon.png";
import '../App.css'
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";


function Header() {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <>
      <div className="grid grid-flow-col shadow-lg">
        <div className="flex col-span-6">
          <RxHamburgerMenu onClick={() => toggleMenuHandler()} className="text-2xl m-5 cursor-pointer" />
          <img className="h-16" src={Icon} alt="disable" />
        </div>

        <div className="flex col-span-5 px-10 ">
          <input type="text" placeholder="Search" className="w-1/2 m-4 h-9 mx-0 p-3 border border-gray-500  rounded-l-full" />
          <button className="btns border border-gray-500 border-r bg-slate-200 rounded-r-full px-19">Search</button>

        </div>

        <div className="flex col-span-1">
          <MdOutlineVideoCall className="text-2xl m-5" />
          <IoMdNotificationsOutline className="text-2xl m-5" />
          <FaRegUserCircle className="text-2xl m-5" />
        </div>
      </div>
    </>
  )
}
export default Header;










