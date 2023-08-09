import "./rooms.css"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import useFetch from "../../hooks/useFetch";
import {Link} from "react-router-dom";
 

const Rooms = () => {

    
const { data, loading, error } = useFetch("/rooms");


  return (
    <div className="featured">
    
    <div className="itemTitle">Discussion Rooms</div>
        <div className="featuredRow">
        {loading ? (
        "Loading please wait"
    ) : (
        <>

        {data.map ((item)=> (
            <Link to ={`/bookingpage/${item._id}`} style={{textDecoration:"none"}}>
            <div className="featuredItem" key={item._id}>

            <img src={item.photo} alt="pic" className="roomsFeaturedImg"/>
            <div className="featuredTitles">
            <div className="itemTitle">{item.name}</div>
            <br></br>
            <div className="capacity">
                <FontAwesomeIcon icon={faUser}/>
                <p>Max. capacity : {item.maxUsers}</p>
                </div>
            </div>
        </div>
        </Link>
        ))}
        
        </>
    )}
        </div>

    
    </div>
  )
}

export default Rooms