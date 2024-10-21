import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiSolidUserAccount } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { RiPlayList2Fill } from "react-icons/ri";
import { LiaFileVideoSolid } from "react-icons/lia";
import { AiOutlineBulb } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from "react-redux";
import { HiFire } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMdMusicalNote } from "react-icons/io";
import { PiFilmSlate } from "react-icons/pi";
import { IoMdWifi } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { LuNewspaper } from "react-icons/lu";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { FaShopify } from "react-icons/fa6";
import { MdOutlinePodcasts } from "react-icons/md";
import { Link } from "react-router-dom";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return pattern
  //  if(!isMenuOpen) return null;

  return !isMenuOpen ? null : (
    <>
      <div className="shadow-lg p-3 ">

        <ul className="mt-2 mb-5">
          <li className="flex gap-3 mb-2"><a href="#"><FaHome className="m-1 text-xl" /></a><Link>Home</Link></li>
          <li className="flex gap-3 mb-2"><a href="#"> <SiYoutubeshorts className="m-1 text-xl" /></a><a href="">Shorts</a></li>
          <li className="flex gap-3 mb-2"><a href=""><MdOutlineSubscriptions className="m-1 text-xl" /></a><a href="#">Subscriptions</a></li>
        </ul>

        <hr />

        <ul className="mt-2">
          <a href="#" className="flex m-3 font-bold">You
          </a>
          <li className="flex gap-3 mb-2"><a href="#"> <BiSolidUserAccount className="m-1 text-xl" /></a><a href="#">Your Channel</a></li>
          <li className="flex gap-3 mb-2"><a href="#"><FaHistory className="m-1 text-xl" /></a><a href="#">History</a></li>
          <li className="flex gap-3 mb-2"><a href="#"> <RiPlayList2Fill className="m-1 text-xl" /></a><a href="#">Playlists</a></li>
          <li className="flex gap-3 mb-2"><a href="#">
            <LiaFileVideoSolid className="m-1 text-xl" /></a><a href="#">Your Videos</a></li>
          <li className="flex gap-3 mb-2"><a href="#"><AiOutlineBulb className="m-1 text-xl" /></a><a href="#">Your Courses</a></li>
          <li className="flex gap-3 mb-2"><a href="#"><MdOutlineWatchLater className="m-1 text-xl" /></a><a href="#">Watch Later</a></li>
          <li className="flex gap-3 mb-2"><a href="#"><AiOutlineLike className="m-1 text-xl" /></a><a href="#">Liked videos</a></li>
        </ul>
        <hr />

        <h2 className="font-bold mb-4 mt-4">Explore</h2>

        <ul className="mt-2">

          <li className="flex gap-3 mb-2"><a> < HiFire className="m-1 text-xl" /></a>Trending</li>
          <li className="flex gap-3 mb-2"><a>   <MdOutlineShoppingBag className="m-1 text-xl" /></a>Shopping</li>
          <li className="flex gap-3 mb-2"><a> <IoMdMusicalNote className="m-1 text-xl" /></a>Music</li>
          <li className="flex gap-3 mb-2"><a>
            <PiFilmSlate className="m-1 text-xl" /></a>Films</li>
          <li className="flex gap-3 mb-2"><a>  <IoMdWifi className="m-1 text-xl" /></a>Live</li>
          <li className="flex gap-3 mb-2"><a> <SiYoutubegaming className="m-1 text-xl" /></a>Gaming</li>
          <li className="flex gap-3 mb-2"><a> <LuNewspaper className="m-1 text-xl" /></a>News</li>
          <li className="flex gap-3 mb-2"><a> <TfiCup className="m-1 text-xl" /></a>Sport</li>
          <li className="flex gap-3 mb-2"><a><PiLightbulbLight className="m-1 text-xl" /></a>Courses</li>
          <li className="flex gap-3 mb-2"><a><FaShopify className="m-1 text-xl" /></a>Fashion & beauty</li>
          <li className="flex gap-3 mb-2"><a><MdOutlinePodcasts className="m-1 text-xl" /></a>Podcasts</li>
        </ul>
        <hr />

        <p className="m-3">@2024 Divya</p>

      </div>













    </>
  )
}
export default Sidebar;