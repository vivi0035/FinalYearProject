import "../workshop/workshopPage.css"
import Navbar from "../../components/navbar/Navbar"
import ManageEventsHeader from "../../components/header/ManageEventsHeader"
import RegisteredEventsItem from "../../components/EVENTS/RegisteredEventsItem"

const ManageCareerPage = () => {
  return (
    <div>
    <Navbar/>
    <ManageEventsHeader/>

    <div className="workshopListItemContainer">
    <div className="itemTitle">Your Upcoming Events (2)</div>
    <RegisteredEventsItem/>
    <RegisteredEventsItem/>
    </div>
    </div>
  )
}

export default ManageCareerPage