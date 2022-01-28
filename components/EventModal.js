import { useState, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const labelClasses = ["bg-indigo-500 hover:shadow-indigo-500", "bg-gray-500 hover:shadow-gray-500", "bg-green-500 hover:shadow-green-500", "bg-blue-500 hover:shadow-blue-500", "bg-red-500 hover:shadow-red-500", "bg-purple-500 hover:shadow-purple-500"];

function EventModal() {
  const {
    showEventModal,
    setShowEventModal,
    dispatchCallEvent,
    timesStart,
    timesEnd,
    selectedEvent,
    setSelectedEvent,
    isSevenDays
  } = useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [prof, setProf] = useState(selectedEvent ? selectedEvent.prof : "");
  const [day, setDay] = useState(selectedEvent ? selectedEvent.day : "");
  const [start, setStart] = useState(selectedEvent ? selectedEvent.start : "");
  const [duration, setDuration] = useState(selectedEvent ? selectedEvent.duration : "");
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelClasses.find((lbl) => lbl === selectedEvent.label)
      : labelClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const classEvent = {
      title,
      prof,
      day,
      start,
      duration,
      label: selectedLabel,
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCallEvent({ type: "update", payload: classEvent });
    } else {
      dispatchCallEvent({ type: "push", payload: classEvent });
    }
    setSelectedEvent(null);
    setShowEventModal(false);
  }

  return (
    <div className={`h-screen w-full fixed left-0 top-0 flex justify-center items-center z-30 fade-in`}>
      <form className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl modal">
        <header className="bg-gray-200 dark:bg-gray-900 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400"></span>
          <div className="flex">
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCallEvent({ type: "delete", payload: selectedEvent });
                  setSelectedEvent(null);
                  setShowEventModal(false);
                }}
                className="text-gray-400 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
            {/* Close Button */}
            <button
              onClick={() => {
                setShowEventModal(false);
                setSelectedEvent(null);
              }}
            >
              <span className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="bg-white dark:bg-gray-800 pt-3 border-0 text-gray-600 dark:text-gray-400 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <div></div>
            {/* Days */}
            <div className="dayChoose m-0 flex">
              <label>
                <input
                  type="radio"
                  name="day"
                  id="1"
                  value="MON"
                  onChange={(e) => setDay("MON")}
                />
                <span>M</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="day"
                  id="2"
                  value="TUE"
                  onChange={(e) => setDay("TUE")}
                />
                <span>Tu</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="day"
                  id="3"
                  value="WED"
                  onChange={(e) => setDay("WED")}
                />
                <span>W</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="day"
                  id="4"
                  value="THU"
                  onChange={(e) => setDay("THU")}
                />
                <span>Th</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="day"
                  id="5"
                  value="FRI"
                  onChange={(e) => setDay("FRI")}
                />
                <span>F</span>
              </label>
              {isSevenDays? <><label>
                <input
                  type="radio"
                  name="day"
                  id="6"
                  value="SAT"
                  onChange={(e) => setDay("SAT")}
                />
                <span>Sa</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="day"
                  id="7"
                  value="SUN"
                  onChange={(e) => setDay("SUN")}
                />
                <span>Su</span>
              </label> </> : ""}
              
            </div>
            {/* Starts */}
            <span className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <select
              defaultValue={selectedEvent? selectedEvent.start :"Starts"}
              onChange={(e) => setStart(e.target.value)}
              name="startTime"
              id="startTime"
              className="bg-white dark:bg-gray-800 pt-3 border-0 text-gray-600 dark:text-gray-400 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            >
              <option value={"Starts"} disabled>
                Starts
              </option>
              {timesStart.map((time, i) => (
                <option key={i} defaultValue="starts" value={time}>
                  {time}
                </option>
              ))}
            </select>

            {/* End */}
            <span className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <select
              defaultValue={selectedEvent? selectedEvent.duration :"duration"}
              onChange={(e) => setDuration(e.target.value)}
              name="durationTime"
              id="durationTime"
              className="bg-white dark:bg-gray-800 pt-3 border-0 text-gray-600 dark:text-gray-400 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            >
              <option value={"duration"} disabled>
                Duration
              </option>
              <option value={0}>
                45 minutes
              </option>
              <option value={1}>
                90 minutes
              </option>
              <option value={2}>
                135 minutes
              </option>
              <option value={4}>
                270 minutes
              </option>
              {/* {timesEnd.map((time, i) => (
                <option key={i} defaultValue="ends" value={time}>
                  {time}
                </option>
              ))} */}
            </select>
            {/* Professor */}
            <span className="text-gray-400 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </span>
            <input
              type="text"
              name="professor"
              placeholder="Add Professer name"
              value={prof}
              required
              onChange={(e) => setProf(e.target.value)}
              className="bg-white dark:bg-gray-800 pt-3 border-0 text-gray-600 dark:text-gray-400 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            {/* Bookmark */}
            <span className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </span>
            <div className="flex gap-x-2">
              {labelClasses.map((lblClass, i) => (
                // Checkmark
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`${lblClass} w-6 h-6 text-white rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            {selectedEvent? "Update" : "Save" }
          </button>
        </footer>
      </form>
    </div>
  );
}

export default EventModal;
