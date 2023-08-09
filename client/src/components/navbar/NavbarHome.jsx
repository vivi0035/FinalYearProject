import "./navbarhome.css"
import { useNavigate } from "react-router-dom"

const NavbarHome = () => {

    const navigate = useNavigate()

    


    const handleLogin = () => {
        navigate("/login");
    }

    const handleSignUp = () => {
        navigate("/signuppage");
    }

    const handleLanding = () => {
        navigate("/");
    }


  return (
    <div className="navbar">
        <div className="navContainer">
        <div>
        <span className="logo" onClick={handleLanding}>LLL</span><span className="logo2" onClick={handleLanding}>@EEE</span>
        </div>
        <div className="homeTabGroup">
        
        <button className="headerBtn" onClick={handleLogin}>Login</button>

        <div className="rightBtn">
        <button className="homeHeaderSecondaryBtn" onClick={handleSignUp}>Sign Up</button>
        </div>
        
            </div>
        </div>
    </div>
  )
}


export default NavbarHome