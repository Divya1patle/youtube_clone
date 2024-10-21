


function VideoCards({ info }) {
  //  adjust the fallback UI or message if you're dealing with asynchronous data fetching,
  if (!info || !info.snippet || !info.statistics) {
    // Return null or a loading state if the info is undefined or missing required properties
    return <p>Loading...</p>;
  }
  console.log(info)
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <>
      <div className="p-2 shadow-lg">
        <img src={thumbnails?.medium?.url} className="rounded" alt="thumbnails" />
        <ul className="mt-2">
          <li>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount}</li>
        </ul>
      </div>
    </>
  )
}
export default VideoCards;