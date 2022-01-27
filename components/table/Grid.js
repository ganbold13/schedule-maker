import { data } from "autoprefixer";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";

function Grid({ day, timeStart, startIndex }) {
  const [events, setEvents] = useState([]);
  const { timesEnd, savedEvents, setSelectedEvent, setShowEventModal } =
    useContext(GlobalContext);
  useEffect(() => {
    const event = savedEvents.filter(
      (evt) => evt.start == timeStart && evt.day == day
    );

    setEvents(event);
  }, [savedEvents, timeStart]);

  return (
    <div className="border border-gray-600 overflow-hidden flex justify-center box">
      {events.map((evt, idx) => (
        <div
          key={idx}
          className={`${
            evt.label
          } shadow-sm absolute flex flex-col justify-center rounded-md  z-10 cursor-pointer hover:scale-x-105 hover:shadow-lg transition ${
            evt.duration == 0
              ? "event45"
              : evt.duration == 1
              ? "event90"
              : "event135"
          }`}
          onClick={() => {
            setSelectedEvent(evt), setShowEventModal(true);
          }}
        >
          <h3 className="eventTitle font-semibold text-white text-center uppercase">
            {evt.title}
          </h3>
          <p className="font-sm text-center text-gray-200 subText">
            {evt.prof}
          </p>
          {/* <p className="font-sm text-center text-gray-200 subText">{`${
            evt.start
          }-${timesEnd[startIndex + parseInt(evt.duration)]}`}</p> */}
        </div>
      ))}
    </div>
  );
}

export default Grid;
