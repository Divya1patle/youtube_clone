import { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items)
  }

  return (
    <>
    <div className="flex flex-wrap ">
      {
        videos.map((video) => 
          <Link to={"/watch?v="+video.id}><VideoCards key={video.id} info={video} /></Link>
        )
      }
      </div>

    </>
  )
}
export default VideoContainer;