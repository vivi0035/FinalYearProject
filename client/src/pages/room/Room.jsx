import "./room.css"
import "../../components/home/login.css"
import Navbar from "../../components/navbar/Navbar"
import ManageHeader2 from "../../components/header/ManageHeader2"
import moment from "moment/moment";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"




const Room = () => {

  const location = useLocation();
  const navigate = useNavigate()
  const id = location.pathname.split("/")[2];
  const {data, loading} = useFetch(`/rooms/find/${id}`);

  const handleClick = () => {
    navigate("/managebookingspage")
  }
  


  function getTimeStops(start, end){
  var startTime = moment(start, 'HH:mm');
  var endTime = moment(end, 'HH:mm');
  
  if( endTime.isBefore(startTime) ){
    endTime.add(1, 'day');
  }

  var timeStops = [];

  while(startTime <= endTime){
    timeStops.push(new moment(startTime).format('HH:mm') + " - " + startTime.add(60, 'minutes').format('HH:mm'));
    startTime.add(60, 'minutes');
  }
  return timeStops;

  }

  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const today = new Date().toISOString().substr(0, 10);


var timeStops = getTimeStops('09:00', '18:00');

  return (
    <div>
      <Navbar/>
      <ManageHeader2/>
      {loading ? (
        "loading") : (
      <div className="listItemContainer">
      
      <div className="itemBookingTitle">{data.name}</div>
      <div className="roomSearchItem">
      <img src={data.photo} alt="pic" className="featuredImg"/>
        <div className="siDesc">
            <span className="siSubtitle">{data.desc}</span>
            <span className="siSubtitle">Max. Capacity: {data.maxUsers}</span>
            <form>
            <div className="loginField">
            Date  <input type="date" id="date" name="date" min={today} value={date} onChange={(event) => setDate(event.target.value)} className='inputStyle'/>
            </div>

            
            <div className="loginField">
            Time
            {timeStops.map((slot)=> (
        
              <label style={{display:"flex", flexDirection:"row", gap:"10px"}}>
              <input
              type="radio"
              value={slot}
              name="chosen_timeslot"
              />
              {slot}   
              </label>
            ))}

            </div>
            </form>
            

            <div className="cta">
            <button onClick={handleClick} className="headerBtn">Book now</button>
            </div>
        </div>
      </div>
      </div>
      )}

      
    </div>
  );
}

export default Room