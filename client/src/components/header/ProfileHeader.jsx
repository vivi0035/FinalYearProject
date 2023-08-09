import "./workshopHeader.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React from "react"
import 'react-date-picker/dist/DatePicker.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const ProfileHeader = () => {

 

    

    const handleEditProfile = () => {
    }

return (
  <div className="workshopHeader">
      <div className="workshopHeaderContainer" >
      <div className="titleContainer">
      <div className="leftTitle">
      <h1 className="headerTitle">James Ng</h1>
      <p className="headerDescription">
      @jamesng <br/>
      An aspiring software developer, looking to make new friends!
<br/>linkedin.com/jamesNg
      
      </p>
      </div>

      <div className="rightBtn">
      <button className="headerSecondaryBtn" onClick={handleEditProfile}>Edit Profile</button>
      </div>
      </div>

      </div>
  </div>
)
}

export default ProfileHeader