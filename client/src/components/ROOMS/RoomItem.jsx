import "./roomItem.css"
import { Link } from "react-router-dom";


const RoomItem = ({item}) => {
  return (
    <div className="listSearchItem">
        <img src={item.photo} className="siImg"/>
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siSubtitle">{item.desc}</span>

            <div className="workshopCta">
            <span className="siFeatures">Max. users: {item.maxUsers}</span>
            <Link to ={`/bookingpage/${item._id}`} className="linkStyle">
            <button className="listHeaderBtn">Book</button>
            </Link>
            </div>
        </div>
    
    
    </div>
  )
}

export default RoomItem