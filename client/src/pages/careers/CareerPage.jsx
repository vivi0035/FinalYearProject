import "../workshop/workshopPage.css"
import Navbar from "../../components/navbar/Navbar"
import EventsHeader from "../../components/header/EventsHeader"
import EventsItem from "../../components/EVENTS/EventsItem"
import EventsItem2 from "../../components/EVENTS/EventsItem2"
import CareersHeader from "../../components/header/CareersHeader"
import CareersItem from "../../components/careers/CareersItem"
import CareersItem2 from "../../components/careers/CareersItem2"

const CareerPage = () => {
  return (
    <div>
    <Navbar/>
    <CareersHeader/>

    <div className="workshopListItemContainer">
    <CareersItem/>
    <CareersItem2/>
    </div>
    </div>
  )
}

export default CareerPage