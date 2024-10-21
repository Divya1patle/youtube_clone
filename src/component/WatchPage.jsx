import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
  //use searchparams
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  // for close sidebar
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  return (
    <>
      <div className="col-span-12 m-2">
        <iframe width="1000" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </>
  )
}

export default WatchPage;

//This are search Params not normal params. if normal hota then we can directly do useparams.
// The useSearchParams hook is used to read and modify the query string in the URL for the current location. 