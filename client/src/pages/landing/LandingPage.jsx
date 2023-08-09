import React from 'react'
import LandingHeader from '../../components/landing/LandingHeader'
import NavbarHome from '../../components/navbar/NavbarHome'
import "./landingPage.css"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


const LandingPage = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const items = [
    {
        image: PF + "pc.png"
    },
    {
        image: PF + "dr.png"
    },
    {
      image: PF + "lounge.png"
  }
]

function Item(props)
{
    return (
        <div>
            <img src= {props.item.image} alt=""  />
        </div>
    )
}

  return (
    <div>
    <NavbarHome/>
    <LandingHeader/>
    <div style={{margin:"0px 0px 10px 0px"}}>
    <Carousel>
    {items.map( (item, i) => <Item key={i} item={item} /> )}
    </Carousel>
    </div>
    <div style={{display:"flex", flexDirection:"row", gap:"40px"}}>
    <img src={PF + "workshop.png"} alt=""/>
    <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
    <h1>Attend Workshops</h1>
    <p style={{fontSize:"20px"}}>Learn new skills and enhance your resume. Log in and register for various workshops through the LLL@EEE portal.</p>
    </div>
    </div>

    <div style={{display:"flex", flexDirection:"row", gap:"40px"}}>
    <div style={{display:"flex", flexDirection:"column", gap:"20px", padding:"30px 0px 0px 40px"}}>
    <h1>Be Part of a Community</h1>
    <p style={{fontSize:"20px"}}>Join community rooms online to make friends and learn alongside people with the same interest as you.</p>
    </div>
    <img src="https://media.istockphoto.com/id/544561240/photo/japanese-friends-hanging-out-together-in-the-city.jpg?s=612x612&w=0&k=20&c=1EsCUYhp4MhJjFjdPts7i065yEYVv9QsuSohqDOnt8o=" width={"1010px"} alt=""/>
    </div>

    <div style={{display:"flex", flexDirection:"row", gap:"40px"}}>
    <img src={PF + "lll.png"} alt=""/>
    <div style={{display:"flex", flexDirection:"column", gap:"20px", padding:"30px 0px 0px 20px"}}>
    <h1>Details</h1>
    <p style={{fontSize:"24px"}}>Location: S2.1-B4-02</p>
    <p style={{fontSize:"24px"}}>Operating hours: 9am - 6pm daily</p>
    <p style={{fontSize:"24px"}}>Email : lifelonglearning@ntu.edu.sg</p>
    
    </div>
    </div>

    </div>

    
  )

  

  
}





export default LandingPage
