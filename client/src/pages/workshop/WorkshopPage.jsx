import "./workshopPage.css"
import Navbar from "../../components/navbar/Navbar"
import WorkshopHeader from "../../components/header/WorkshopHeader"
import WorkshopItem from "../../components/WORKSHOPS/WorkshopItem"

const WorkshopPage = () => {
  return (
    <div>
    <Navbar/>
    <WorkshopHeader/>

    <div className="workshopListItemContainer">
    <WorkshopItem/>
    </div>
    </div>
  )
}

export default WorkshopPage