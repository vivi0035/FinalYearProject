import "./bookingHeader.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import 'react-date-picker/dist/DatePicker.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';


const BookingHeader = () => {



  const [value, onChange] = useState(['09:00', '18:00']);


  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const today = new Date().toISOString().substr(0, 10);

      

      const navigate = useNavigate()

      const handleSearch = () => {
        navigate("/bookingpagesearch", {state: {date, value}});
      }

      const handleBooking = () => {
        navigate("/managebookingspage");
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
        <button className="headerSecondaryBtn" onClick={handleBooking}>Manage Bookings</button>
        </div>
        </div>

        <div className="headerSearchContainer">
          <div className="bookingHeaderSearch">
            
            <div className="bookingHeaderSearchItem">

                <span className="headerSearchText">
                Date:
                <input className="bookingInput" type="date" id="date" name="date" min={today} value={date} onChange={(event) => setDate(event.target.value)}/>
                </span>

                <span> | </span>

                <span className="headerSearchText">
                Time:
                <TimeRangePicker onChange={onChange} value={value} class="timerange"/>
                </span>             
              
            </div>
        
            <button className="headerBtn" onClick={handleSearch}>Search Room</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default BookingHeader