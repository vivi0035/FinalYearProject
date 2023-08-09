import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./communities.css"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from 'react';
import useFetch from "../../hooks/useFetch";
import { Container } from './Container';


const Communities = () => {
  const { user } = useContext(AuthContext);

  const { data, loading, error } = useFetch("/communities");

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  

   const triggerText = 'Propose';
   const onSubmit = (event) => {
   event.preventDefault(event);
   console.log(event.target.name.value);
   console.log(event.target.email.value);
 };

  return (
    <div className="communitiesFeatured">
    
    <div className="communityAction">
    <div className="itemTitle">Communities </div>
    <Container triggerText={triggerText} onSubmit={onSubmit} />
    {/* {user.role==="Student Leader" ? <button className="communityActionBtn"> Propose </button>  : null} */}
    </div>
        <div className="featuredRow">
        {loading ? (
        "Loading please wait"
    ) : (
        <>
        {data.map ((item)=> (
        <Link to ={`/communitypage/${item._id}`} style={{textDecoration:"none"}}>
            <div className="featuredItem">

            <img src={PF + item.img} alt="pic" className="roomsFeaturedImg"/>
            <div className="featuredTitles">
            <div className="itemTitle">{item.name}</div>
            <br></br>
            <div className="capacity">
                <FontAwesomeIcon icon={faUser}/>
                <p>Member : {item.followers}</p>
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

export default Communities
