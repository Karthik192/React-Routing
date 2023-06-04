import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EventsRootLayout() {
  <>
    <EventsNavigation />
    <Outlet />
  </>;
}

export default EventsRootLayout;
