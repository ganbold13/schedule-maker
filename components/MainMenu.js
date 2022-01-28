import { useState, useEffect, useContext } from "react";
import { useTheme } from "next-themes";
import GlobalContext from "../context/GlobalContext";

function MainMenu() {
  //const [showEventModal, setShowEventModal] = useState(false);

  const { days, setShowEventModal, setIsSevenDays, isSevenDays, theme, setTheme, systemTheme } =
    useContext(GlobalContext);
 

  const [mounted, setMounted] = useState(false);
  const [toggleActive, setToggleActive] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button onClick={() => setTheme("light")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      );
    }
  };
  const toggleButton = () => {
    if (!toggleActive) {
      return (
        <button
          onClick={() => {
            setToggleActive(true);
          }}
          className="shadow bg-gray-200 dark:bg-gray-800 text-gray-400 hover:shadow-md hover:text-gray-800 dark:hover:text-white dark:hover:shadow-md dark:hover:shadow-gray-800 transition rounded-full py-2 px-2 m-2 z-10 hover:rotate-180 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            setToggleActive(false);
          }}
          className="shadow bg-gray-200 dark:bg-gray-800 text-gray-400 hover:shadow-md hover:text-gray-800 dark:hover:text-white dark:hover:shadow-md dark:hover:shadow-gray-800 transition rounded-full py-2 px-2 m-2 z-10 hover:rotate-180"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      );
    }
  };
  return (
    <div>
      {/* Mobile View */}
      <div className="xs:block xs1:hidden fixed bottom-0 right-2 m-8 flex z-20">
        <div className="menuButton">
          {toggleButton()}
          <li className={toggleActive? "bottom-32 right-0 transition-all" : ""}>
            <button className="shadow bg-gray-200 dark:bg-gray-800 text-gray-400  hover:text-gray-800 dark:hover:text-white  transition rounded-full p-1 hover:rotate-180 "
              onClick={() => {
                isSevenDays ? setIsSevenDays(false) : setIsSevenDays(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
              </svg>
            </button>
          </li>
          <li className={toggleActive? "bottom-28 right-8 shadow bg-gray-200 dark:bg-gray-800 text-gray-400  hover:text-gray-800 dark:hover:text-white  transition rounded-full pt-1 px-1 m-2 hover:rotate-180" : ""}>{renderThemeChanger()}</li>
        </div>
        {/* Add button */}
        <div className="z-20">
          <button
            onClick={() => {
              setShowEventModal(true);
            }}
            className="shadow bg-gray-200 hover:rotate-180 dark:bg-gray-800 text-gray-400 hover:shadow-md hover:text-gray-800 dark:hover:text-white dark:hover:shadow-md dark:hover:shadow-gray-800 transition rounded-full py-2 px-2 m-2  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
      </div>
      {/* Web view */}
      <div className="xs:hidden xs1:block MainMenu">
        <button
          onClick={() => {
            setShowEventModal(true);
          }}
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
        <button
          onClick={() => {
            isSevenDays ? setIsSevenDays(false) : setIsSevenDays(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
          </svg>
        </button>
        <div>{renderThemeChanger()}</div>
      </div>
    </div>
  );
}

export default MainMenu;
