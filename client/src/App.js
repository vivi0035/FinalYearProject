import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RoomList from "./pages/ROOMLIST/RoomList";
import BookingPage from "./pages/booking/BookingPage";
import WorkshopPage from "./pages/workshop/WorkshopPage";
import ManageBookingPage from "./pages/booking/ManageBookingPage";
import ManageWorkshopPage from "./pages/workshop/ManageWorkshopPage";
import LoginPage from "./pages/home/LoginPage";
import SignupPage from "./pages/home/SignupPage";
import EventPage from "./pages/event/EventPage";
import ManageEventPage from "./pages/event/ManageEventPage";
import Room from "./pages/room/Room";
import ProfilePage from "./pages/profile/ProfilePage";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import CommunityPage from "./pages/community/ComunityPage";
import CommunitySingle from "./pages/communitySingle/CommunitySingle";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import LandingPage from "./pages/landing/LandingPage";
import WorkshopSingle from "./components/WORKSHOPS/WorkshopSingle";
import CareerPage from "./pages/careers/CareerPage";

function App() {

  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home/> : <LandingPage /> } />
          <Route path="/homepage" element={user ? <Home/> : <Navigate replace to="/login"/>} />
          <Route path="/login" element={user ? <Navigate replace to="/homepage"/> : <LoginPage/>} />
          <Route path="/signuppage" element={user ? <Navigate replace to="/homepage"/> : <SignupPage/>} />
          <Route path="/bookingpage" element={<BookingPage/>} />
          <Route path="/communitypage" element={<CommunityPage/>} />
          <Route path="/communitypage/:id" element={<CommunitySingle />} />
          <Route path="/profilepage" element={<ProfilePage/>} />
          <Route path="/profilepage/:username" element={<Profile/>} />
          <Route path="/bookingpagesearch" element={<RoomList/>} />
          <Route path="/bookingpage/:id" element={<Room/>} />
          <Route path="/workshoppage" element={<WorkshopPage/>} />
          <Route path="/workshoppage/:id" element={<WorkshopSingle/>} />
          <Route path="/eventspage" element={<EventPage/>} />
          <Route path="/careerspage" element={<CareerPage/>} />
          <Route path="/manageeventspage" element={<ManageEventPage/>} />
          <Route path="/managebookingspage" element={<ManageBookingPage/>} />
          <Route path="/manageworkshopspage" element={<ManageWorkshopPage/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
