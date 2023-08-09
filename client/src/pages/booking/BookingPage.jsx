import BookingHeader from "../../components/header/BookingHeader"
import Navbar from "../../components/navbar/Navbar"
import "./bookingPage.css"
import Rooms from "../../components/ROOMS/Rooms"

export const BookingPage = () => {
  return (
    <div>
        <Navbar/>
        <BookingHeader/>

        <div className="homeContainer">
          <Rooms/>
        </div>
    </div>
  )
}

export default BookingPage
