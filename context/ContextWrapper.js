import { useReducer, useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  if (typeof window !== "undefined") {
    console.log("You are on the browser");
    // 👉️ can use localStorage here
    const storageEvents = localStorage.getItem("savedEvents");

    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
  } else {
    console.log("You are on the server");
    // 👉️ can't use localStorage
  }
}

export default function ContextWrapper(props) {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const timesStart = [
    "07:40",
    "08:25",
    "09:20",
    "10:05",
    "11:00",
    "11:45",
    "12:40",
    "13:25",
    "14:20",
    "15:05",
    "16:00",
    "16:45",
    "17:40",
    "18:25",
    "19:20",
    "20:05",
  ];
  const timesEnd = [
    "08:25",
    "09:10",
    "10:05",
    "10:50",
    "11:45",
    "12:30",
    "13:25",
    "14:10",
    "15:05",
    "15:50",
    "16:45",
    "17:30",
    "18:25",
    "19:10",
    "20:05",
    "20:50",
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, dispatchCallEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  const [showEventModal, setShowEventModal] = useState();

  return (
    <GlobalContext.Provider
      value={{
        showEventModal,
        setShowEventModal,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        dispatchCallEvent,
        days,
        timesStart,
        timesEnd,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
