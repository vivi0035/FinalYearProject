import { Link } from 'react-router-dom';
import './rightBar.scss'

export const RightBar = ({user}) => {

  const HomeRightbar = () => {
    return (
      <>
    <div className="container">
        <div className="item">
          <div className='user' style={{fontSize:14}}>What's happening today?</div>
          <hr/>

          <div className="user">
          <div className="userInfo">
          1400 - 1500:
          <Link
                to={"/eventspage"}
                style={{ textDecoration: "none", color: "inherit" }}>
                <span style={{ color : "#28A6CD"}}>ReactJS Workshop</span>
              </Link>
          </div>
          </div>

          <div className="user">
          <div className="userInfo">
          1800 - 2000:
          <Link
                to={"/eventspage"}
                style={{ textDecoration: "none", color: "inherit" }}>
                <span style={{ color : "#28A6CD"}}>Goodie Bags Collection</span>
              </Link>
          </div>
          </div>

    </div>
    </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return(
    <>
      <div className="container">
        <div className="item">
          <span style={{fontSize:'14px', fontWeight : 'bold'}}>Communities Joined</span>
          <hr/>

          <div className="user">
          <div className="userInfo">
           <span>Hall Life</span>
          </div>
            <div className="buttons">
              <button>View</button>
            </div>
          </div>

          <div className="user">
          <div className="userInfo">
            <span>International Students</span>
          </div>
            <div className="buttons">
              <button>View</button>
            </div>
          </div>

          <div className="user">
          <div className="userInfo">
            <span>Network Design</span>
          </div>
            <div className="buttons">
              <button>View</button>
            </div>
          </div>

    </div>
    </div>
    </>
    )
  }

  return (
    <div className='rightBar'>
    {user ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  )
}

export default RightBar