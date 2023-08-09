import "./bookingHeader.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React from "react"
import { useNavigate } from "react-router-dom"
import 'react-date-picker/dist/DatePicker.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';


const ManageHeader = () => {


      const navigate = useNavigate()


      const handleNewBooking = () => {
        navigate("/bookingpage", {state:{}});
      }

  return (
    <div className="bookingHeader">
        <div className="bookingHeaderContainer" >
        <div className="titleContainer">
        <div className="leftTitle">
        <h1 className="headerTitle">Bookings</h1>
        <p className="headerDescription">
        Book a room to study or discuss with your friends.
        </p>
        <p className="headerDescription">
        <i>Opening hours: 9am - 6pm daily</i>
        </p>
        </div>

        <div className="rightBtn">
        <button className="headerSecondaryBtn" onClick={handleNewBooking}>New Booking</button>
        </div>
        </div>

        </div>
    </div>
  )
}

export default ManageHeader