import { Fragment, useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import Grid from "./Grid";

function Days() {
  const { days, timesStart, timesEnd, isSevenDays } = useContext(GlobalContext);
  // return (
  //   <div className="grid grid-cols-7 grid-rows-1 h-full">
  //     {days.map((day, i)=> (
  //       <p key={i} className="w-full h-full bg-sky-200 border border-gray-200"></p>
  //     )) }
  //     <hr className="bg-gray-400"/>
  //   </div>
  // )
  
  console.log(days);

  return (
    <div
        className={`flex-1 grid ${isSevenDays? 'grid-cols-7': 'grid-cols-5'} grid-rows-16 content`}
    >
      {timesStart.map((time, i) => (
        <Fragment key={i}>
          {days.map((day, index) => (
            <Grid key={index} day={day} timeStart={time} startIndex={i} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default Days;
