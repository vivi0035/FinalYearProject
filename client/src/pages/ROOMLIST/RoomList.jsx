import "./roomList.css"
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import ManageHeader2 from "../../components/header/ManageHeader2"
import TimePicker from 'react-time-picker';
import RoomItem from "../../components/ROOMS/RoomItem"
import useFetch from "../../hooks/useFetch"


const RoomList = () => {

  const location = useLocation();
    const [max, setMax] = useState(undefined);

    const [date, setDate] = useState(location.state.date);
    const [value, onChange] = useState(location.state.value);
    const today = new Date().toISOString().substr(0, 10);

  const { data, loading, reFetch } = useFetch(
    `/rooms?max=${max || 0}`
    );


  const handleClick = () => {
    reFetch();
  };

  return (
    <div> 
    <Navbar/> 
    <ManageHeader2/>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Date:</label>
            <input type="date" id="date" name="date" min={today} value={date} onChange={(event) => setDate(event.target.value)}/>
            
          </div>

          <div className="lsItem">
          
            <label>Start Time:</label>
            <TimePicker onChange={onChange} value={value} class="listTimerange" style={{color:"white"}}/>

            
          </div>
          <div className="lsItem">
          
            <label>End Time:</label>
            <TimePicker onChange={onChange} value={value[1]} class="listTimerange"/>

            
          </div>

          <div className="lsItem">
            <label>No. of people</label>
              <input type="number" 
             onChange={(e) => setMax(e.target.value)} />

          </div>

          <br/>


          <button onClick={handleClick}>Search</button>
        </div>

        <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <RoomItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>

      </div>
    </div>
    </div>
  )
}

export default RoomList