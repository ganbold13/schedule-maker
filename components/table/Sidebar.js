import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";


function Sidebar() {
  const{timesStart, timesEnd} = useContext(GlobalContext);
  return (
    <div className=" grid grid-rows-16 grid-cols-1 bg-gray-200 dark:bg-gray-900 w-28 mt-6">
      {timesStart.map((row, i) => (
        <p key={i} className="border-y border-gray-300 text-gray-800 dark:border-gray-600 dark:text-gray-300 text-center box">
          {`${row}-${timesEnd[i]}`}
        </p>
      ))}
    </div>
  );
}

export default Sidebar;
