import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ManageHeader from '../../components/header/ManageHeader'
import BookedRoom from '../../components/ROOMS/BookedRoom'
import "./manageBookingPage.css"

const ManageBookingPage = () => {
  return (
    <div>
        <Navbar/>
        <ManageHeader/>
        <div className="listItemContainer">
        <div className="itemBookingTitle">Booking</div>

        <BookedRoom/>
        </div>
    
    </div>
  )
}

export default ManageBookingPage