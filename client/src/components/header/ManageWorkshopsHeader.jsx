import "./workshopHeader.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React from "react"
import { useNavigate } from "react-router-dom"
import 'react-date-picker/dist/DatePicker.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const ManageWorkshopHeader = () => {

 
    const navigate = useNavigate()

    const handleBrowseWorkshop = () => {
      navigate("/workshoppage");
    }

return (
  <div className="workshopHeader">
      <div className="workshopHeaderContainer" >
      <div className="titleContainer">
      <div className="leftTitle">
      <h1 className="headerTitle">Workshops</h1>
      <p className="headerDescription">
      Sign up to learn new skills and enhance your resume.
      </p>
      </div>

      <div className="rightBtn">
      <button className="headerSecondaryBtn" onClick={handleBrowseWorkshop}>Browse Workshops</button>
      </div>
      </div>

      </div>
  </div>
)
}

export default ManageWorkshopHeader