import "../workshop/workshopPage.css"
import Navbar from "../../components/navbar/Navbar"
import EventsHeader from "../../components/header/EventsHeader"
import EventsItem from "../../components/EVENTS/EventsItem"
import EventsItem2 from "../../components/EVENTS/EventsItem2"

const RegisteredCareersItem = () => {
  return (
    <div>
    <Navbar/>
    <EventsHeader/>

    <div className="workshopListItemContainer">
    <EventsItem/>
    <EventsItem2/>
    </div>
    </div>
  )
}

export default RegisteredCareersItem