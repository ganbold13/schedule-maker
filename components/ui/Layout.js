import { Fragment } from "react/cjs/react.production.min";
import Sidebar from "../table/Sidebar";
import CalendarHeader from "../table/CalendarHeader";
import Days from "../table/Days";
import MainMenu from "../MainMenu";
import EventModal from "../EventModal";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";



function Layout() {
  const { showEventModal, savedEvents } = useContext(GlobalContext);
  return (

    <div className="h-screen flex flex-1">
      {showEventModal && <EventModal />}
      <MainMenu />
      <Fragment>
        <div className="flex flex-1">
            <Sidebar />
          <div className="w-full flex flex-col">
            <CalendarHeader />
            <Days />
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default Layout;
