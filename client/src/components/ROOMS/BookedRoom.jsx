import React from 'react'
import "./bookedRoom.css"
import dr1 from '../../img2/dr1.jpg';


const BookedRoom = () => {
  return (
    <div>
      <div className="searchItem">
      <img src={dr1} alt="pic" className="featuredImg"/>
        <div className="siDesc">
            <h1 className="siTitle">Edison Room</h1>
            <span className="siSubtitle">Date: 17/05/2023</span>
            <span className="siSubtitle">Time: 13:00 - 14:00</span>
            

            <div className="cta">
            <button className="headerBtn">Cancel Booking</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BookedRoom
