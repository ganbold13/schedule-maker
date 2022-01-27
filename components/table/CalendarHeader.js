import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

function CalendarHeader() {

  const {days, isSevenDays} = useContext(GlobalContext);
  console.log("grid-cols-5, grid-cols-7");
  return <div className={`bg-gray-900 grid  ${isSevenDays? 'grid-cols-7': 'grid-cols-5'} grid-rows-1 h-6 min-h-6`}>
      {days.map((day, i)=>(
          <p key={i} className="border-x border-gray-600 text-center font-semibold text-gray-200">{day}</p>
      ))}
  </div>;
}

export default CalendarHeader;
