// import Button from "./Button";


function MenuList() {
  const btn = ["All", "Music", "Javascript", "Songs", "Live", "Mixes", "T-series", "Jukebox", "News", "Server", "Cooking", "Cricket", "Games"];
  return (
    <>
      {
        btn.map((val, i) => {
          return (
            <button key={i} className=" px-4 p-2 rounded h-17 m-3 bg-slate-300">{val}</button>
          )
        })
      }
    </>
  )
}
export default MenuList;