import Communities from "../../components/communities/Communities"
import LeftBar from "../../components/leftBar/LeftBar"
import Navbar from "../../components/navbar/Navbar"
import "./communityPage.css"

export const CommunityPage = () => {
  return (
    <div className="home">
    <Navbar/>
    <div style={{ display: "flex" }}>
    <LeftBar/>
    <div style={{ flex: 9}}>
    <Communities/>
    </div>
    </div>
    </div>
  )
}

export default CommunityPage
