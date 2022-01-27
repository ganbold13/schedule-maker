import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

function CalendarHeader() {

  const {days, isSevenDays} = useContext(GlobalContext);
  console.log("grid-cols-5, grid-cols-7");
  return <div className={`bg-gray-200 dark:bg-gray-900 grid  ${isSevenDays? 'grid-cols-7': 'grid-cols-5'} grid-rows-1`}>
      {days.map((day, i)=>(
          <p key={i} className="border-x  text-center font-semibold border-gray-100 text-gray-700 dark:border-gray-600 dark:text-gray-200 headerDay">{day}</p>
      ))}
  </div>;
}

export default CalendarHeader;
