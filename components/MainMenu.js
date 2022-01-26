import { useState, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import EventModal from "./EventModal";

function MainMenu() {
  //const [showEventModal, setShowEventModal] = useState(false);

  const { showEventModal, setShowEventModal } = useContext(GlobalContext);

  return (
    <div className="MainMenu">
      <button
        onClick={() => {
          setShowEventModal(true);
        }}
        className="shadow bg-gray-400 rounded-2xl m-8 text-gray-600 py-2 px-2 hover:shadow-md hover:text-gray-800 transition hover:shadow-gray-500"
      >
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
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
}

export default MainMenu;
