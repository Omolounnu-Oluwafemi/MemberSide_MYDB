import "./viewProfile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import React from 'react'
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios"
import { useParams } from "react-router-dom";

const ViewProfile = () => {

 const {currentUser} = useContext(AuthContext);

 const {id} = useParams();

 const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`/tables/viewProfile/${id}`).then((resut) => {
        setUser(resut.data[0]);
    }).catch(err => console.error(err))
}, [id])


  return (
    <div className="page">
        <div className="Sidebar">
      <Sidebar/> 
      </div>
        <div className="viewProfile">
            <div className="left">
              <img className="img" src={currentUser.image} alt="" />
              <div className="about">
                <h6>ABOUT ME</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem doloremque, expedita, praesentium voluptas consequuntur alias officiis voluptatum suscipit fugit sapiente est hic facilis exercitationem fuga. Eos sed amet suscipit!</p>
              </div>
              </div>
            <div className="right">
            <hr />
            <h6 className="rightHead">PERSONAL DETAILS</h6>
            <hr />
            <div className="pDetails">
              <div className="pDetails1">
              <div> 
              <h6>Name:</h6>
              <p> {currentUser.firstname}</p>
              </div>
              {/* <div>
              <h6>Username:</h6>
              <p>johnDoeSamuel</p>
              </div> */}
              <div>
              <h6>Phone Number</h6>
              <p>{currentUser.phone}</p>
              </div>
              <div>
              <h6>Email:</h6>
              <p>{currentUser.email}</p>
              </div>
              <div>
              <h6>Date of Birth: </h6>
              <p>{currentUser.dob}</p>
              </div>
              </div>
                
           <div className="pDetails1">
              <div>
              <h6>Gender:</h6>
              <p>{currentUser.gender}</p>
              </div>
              <div>
              <h6>State of Resident:</h6>
              <p>{currentUser.state_resident}</p>
              </div>
              <div>
              <h6>State of Origin:</h6>
              <p>{currentUser.state_origin}</p>
              </div>
              <div>
              <h6>Residential Address:</h6>
              <p>{currentUser.res_address}</p>
              </div>
              <div>
              <h6>Serial Number Of Valid ID:</h6>
              <p>{currentUser.serial_number}</p>
              </div>
              </div>
              </div>
              <hr />
              <h6 className="rightHead">DETAILS OF NEXT OF KIN</h6>
              <hr />
              <div className="pDetails">
              <div className="pDetails1">
              <div>
              <h6>Name:</h6>
              <p>{currentUser.nok_name}</p>
              </div>
              <div>
              <h6>Address:</h6>
              <p>{currentUser.nok_address}</p>
              </div>
              <div>
              <h6>Phone Number:</h6>
              <p>{currentUser.nok_phone}</p>
              </div>
              </div>
              <div className="pDetails1">
              <div>
              <h6>Email:</h6>
              <p>{currentUser.nok_email}</p>
              </div>
              <div>
              <h6>Relationship:</h6>
              <p>{currentUser.nok_rel}</p>
              </div>
              </div>
              </div>
              </div>
        </div>
    </div>
  )
}
export default ViewProfile