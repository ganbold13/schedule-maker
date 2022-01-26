import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";


function Sidebar() {
  const{timesStart, timesEnd} = useContext(GlobalContext);
  return (
    <div className=" grid grid-rows-16 grid-cols-1 bg-gray-900 w-28 mt-6 box">
      {timesStart.map((row, i) => (
        <p key={i} className="border-b-2 border-gray-600 text-center text-gray-300">
          {`${row}-${timesEnd[i]}`}
        </p>
      ))}
    </div>
  );
}

export default Sidebar;
