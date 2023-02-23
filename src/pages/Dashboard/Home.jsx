import React from "react"
import {Link} from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./Home.scss"
import RecentActivities from "../../components/Table/RecentActivities/recentActivities"
import CurrentProject from "../../components/Table/CurrentProject/currentProject"
import MessageNotification from "../../components/Table/MessageNotification/messageNotification"
import NewConnections from "../../components/Table/NewConnections/newConnections"
import PortraitIcon from '@mui/icons-material/Portrait';
import HandymanIcon from '@mui/icons-material/Handyman';
import { AuthContext } from "../../context/authContext";
import {useContext} from "react"
import { useLocation } from "react-router-dom";


const Home = () => {

  const {currentUser } = useContext(AuthContext);
  // const [user, setUser] = useState({})

  const location = useLocation();
  console.log(location)

  return (
    <div className="home">
      <div className="Sidebar">
      <Sidebar/> 
      </div>
      <div className="homeContainer">
      <div className="Navbar">
      <Navbar/>  
      </div>
        <div className="viewUpdate">
          <Link to={`/viewprofile/${currentUser.id}`}style={{"textDecoration": "none"}} >
            <div className="view">
              <div className="img_div">
              <PortraitIcon className="profile_i"/>
              </div> 
              <h4>View Profile</h4>
            </div>
          </Link>
          <Link to={`/updateprofile/${currentUser.id}`} style={{"textDecoration": "none"}}>
            <div className="update">
              <div className="img_div">
              <HandymanIcon className="profile_i"/>
              </div> 
              <h4>Update Profile</h4>
            </div>
          </Link>
        </div>
          <RecentActivities/>
          <CurrentProject/>
        <div className="newLatest">
          <MessageNotification className="message"/>
          <NewConnections className="connections"/>
        </div>  
      </div>
  
     
    </div>
  )
}

export default Home