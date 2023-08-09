import "./workshopPage.css"
import Navbar from "../../components/navbar/Navbar"
import RegisteredWorkshopItem from "../../components/WORKSHOPS/RegisteredWorkshopItem"
import ManageWorkshopHeader from "../../components/header/ManageWorkshopsHeader"

const ManageWorkshopPage = () => {
  return (
    <div>
    <Navbar/>
    <ManageWorkshopHeader/>
    <div className="workshopListItemContainer">
    <div className="itemTitle">Upcoming Workshops</div>
    <RegisteredWorkshopItem/>
    </div>
    </div>
  )
}

export default ManageWorkshopPage