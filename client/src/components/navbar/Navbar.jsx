import "./navbar.scss"
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";



const Navbar = () => {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user, dispatch } = useContext(AuthContext);


    const navigate = useNavigate()

      const handleWorkshop = () => {
        navigate("/workshoppage");
        
     }

     const handleBooking = () => {
        navigate("/bookingpage");
     }

    const handleLogout = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        navigate("/login")
      };

    const handleEvents = () => {
        navigate("/eventspage");
    }

    const handleHome = () => {
      navigate("/homepage");
  }

    const handleViewProfile = () => {
        navigate("/profilepage");
    }

    const handleCommunity = () => {
      navigate("/communitypage");
  }
  const handleCareers = () => {
    navigate("/careerspage");
}


  return (
    <div className="navbar">
        <div className="homeNavContainer">
        <div>
        <span className="logo" onClick={handleHome}>LLL</span><span className="logo2" onClick={handleHome}>@EEE</span>
        </div>
        <div className="tabGroup">
        <div className="homeTabList">
            <div className="tabListItem ">
            <span onClick={handleHome}>Home</span>
            </div>

            <div className="tabListItem">
            <span onClick={handleBooking}>Bookings</span>
            </div>

            <div className="tabListItem">
            <span onClick={handleWorkshop}>Workshops</span>
            </div>
            <div className="tabListItem">
            <span onClick={handleCommunity}>Community</span>
            </div>
            <div className="tabListItem">
            <span onClick={handleEvents}>Events</span>
            </div>
            <div className="tabListItem">
            <span onClick={handleCareers}>Careers</span>
            </div>
        </div>
        

        <div className="navItem">
        <div className="navItem-icon">
            <img src={user.img || PF + "person/noAvatar.png"} className="imgSize" alt=""/>
            <span>{user.username}</span>
            <FontAwesomeIcon icon={faChevronDown} />
        </div>
            <div className="navItem-content">
                <div className="navItem-content-link">
                <span>Notifications</span>
                <span onClick={handleViewProfile}>View Profile</span>
                <span onClick={handleLogout}>Logout</span>
                </div>
            </div>
        </div>

            </div>
        </div>
    </div>
  )
}


export default Navbar