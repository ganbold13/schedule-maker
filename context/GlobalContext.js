import { createContext } from "react";

const GlobalContext = createContext({
    showEventModal: false,
    setShowEventModal: ()=> {},
    savedEvents: [],
    dispatchCallEvent: () => {},
    days: [],
    timesStart: [],
    timesEnd: [],
    selectedEvent: null,
    setSelectedEvent: ()=> {}
});

export default GlobalContext;
