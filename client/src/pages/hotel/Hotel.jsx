import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import BookingHeader from "../../components/header/BookingHeader"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"


const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/219768545.jpg?k=f023b621f9296669f0d530f508131955f233e6ddd9be4eb400e44c02fc9b25d1&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/323018089.jpg?k=4d284a2ec5b57f1b17f17b8426e2c775115d29e44c19266eec06e2d8bdc1a51b&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/323018093.jpg?k=a23a2622404a7805500c54363d88b1d60694f4fded8e533f840cbeb45c6c13b3&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/287885824.jpg?k=0c4847f725853990d095f548f210a198ebd3a015c4a2c5b739af6319f4d3f960&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/228639106.jpg?k=cd868aaf385a783de7c8079b6109d0540683f2016df2dfa6c2abc4dce72ccef2&o=&hp=1"
    },
    
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction==="l") {
      newSlideNumber = slideNumber === 0 ? 4 : slideNumber - 1;
    }
    else {
      newSlideNumber = slideNumber === 4 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar/>
      <BookingHeader type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faArrowCircleLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faArrowCircleRight}className="arrow" onClick={()=>handleMove("r")}/>
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Book Now</button>
          <h1 className="hotelTitle">Room 1</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>This soundproof cinema room is equipped with a 3D Blu-ray player, AC & a projector.</span>
          </div>

          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <div className="hotelTitle">Best place to study</div>
              <div className="hotelDesc">lorem ipsum asbfj vnwoie wejf foewn jfnlkwenflk fnewoknfw fnewonf nfowe</div>
            </div>
            <div className="hotelDetailsPrice">
              <button>Book</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Hotel