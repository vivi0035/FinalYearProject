import "./workshopHeader.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import 'react-date-picker/dist/DatePicker.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
const ManageEventsHeader = () => {

 
    const navigate = useNavigate()

    const handleBrowseEvents = () => {
      navigate("/eventspage");
    }

return (
  <div className="workshopHeader">
      <div className="workshopHeaderContainer" >
      <div className="titleContainer">
      <div className="leftTitle">
      <h1 className="headerTitle">Events</h1>
      <p className="headerDescription">
      Sign up to join bonding activities and make new friends!
      </p>
      </div>

      <div className="rightBtn">
      <button className="headerSecondaryBtn" onClick={handleBrowseEvents}>Browse Events</button>
      </div>
      </div>

      </div>
  </div>
)
}

export default ManageEventsHeader