import "../../pages/booking/manageBookingPage.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ManageWorkshopHeader from "../header/ManageWorkshopsHeader";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";


const WorkshopSingle = () => {

  const location = useLocation();


    const id = location.pathname.split("/")[2];
    
    const {data, loading} = useFetch(`/workshops/find/${id}`);
    

  return (
    <div>
    <Navbar/>
    <ManageWorkshopHeader/>
    {loading ? (
        "loading") : (
    <div className="listItemContainer">
    <div className="itemBookingTitle">{data.title}</div>
    <div className="roomSearchItem">
        <img src={data.photo ? data.photo : "data:image/png;base64,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"} className="siImg"/>
        
            
            <div className="siDesc">
            <span className="siSubtitle">{data.desc}</span>
            <span className="siSubtitle">Date: {data.date}</span>
            <span className="siSubtitle">Time: {data.startTime}-{data.endTime}</span>
            <span className="siSubtitle">Location: {data.venue}</span>

            <div className="cta">
            <button  className="headerBtn">Sign up</button>
            </div>
            
            </div>
        
    
    
  </div>
  </div>
  )}
    </div>
  )
}

export default WorkshopSingle