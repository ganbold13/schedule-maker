import { data } from "autoprefixer";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";

function Grid({ day, timeStart, timeEnd }) {
  const [events, setEvents] = useState([]);
  const { savedEvents, setSelectedEvent, setShowEventModal } =
    useContext(GlobalContext);
  useEffect(() => {
    const event = savedEvents.filter(
      (evt) => evt.start == timeStart && evt.end == timeEnd && evt.day == day
    );
    setEvents(event);
  }, [savedEvents, timeStart]);

  return (
    <div className="border border-gray-600 overflow-hidden flex justify-center box">
      {events.map((evt, idx) => (
        <div
          key={idx}
          className={`bg-${evt.label} shadow-sm shadow-${evt.label}  absolute flex flex-col rounded-md z-10 cursor-pointer hover:scale-x-105 hover:shadow-lg hover:shadow-${evt.label} transition`}
          onClick={() => {
            setSelectedEvent(evt), setShowEventModal(true);
          }}
        >
          <span className="event font-semibold text-white text-center uppercase">
            {evt.title}
          </span>
          <span className="font-sm text-center text-gray-200">{evt.prof}</span>
          <span className="font-sm text-center text-gray-200">{`${evt.start}-${evt.end}`}</span>
        </div>
      ))}
    </div>
  );
}

export default Grid;
