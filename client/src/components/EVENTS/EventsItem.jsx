import "../WORKSHOPS/workshopItem.css"

const EventsItem = () => {
  return (
    <div className="searchItem">
        <img src="https://m.media-amazon.com/images/I/71PjSoAR++S._AC_UF894,1000_QL80_.jpg" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Goodie Bags Collection</h1>
            <span className="siSubtitle">Collect goodie bags for exam welfare to help you pull through this tough exam period.</span>
            

            <div className="workshopCta">
            <span className="siFeatures">Date: 08/05/2023 | Time: 1800 - 2000| Loc: LLL@EEE</span>
            <button className="headerBtn">Sign Up</button>
            </div>
        </div>
    
    
    </div>
  )
}

export default EventsItem