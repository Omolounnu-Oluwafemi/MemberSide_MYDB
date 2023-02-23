import "./updateProfile.scss";
//import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import React from 'react';
import { Select } from 'react-select-states-and-lga-in-nigeria';
import 'react-select-states-and-lga-in-nigeria/dist/index.css';


const UpdateProfile = () => {

    const [image, setImage] = useState("");
    const [state, setState] = useState('')
    const [state1, setState1] = useState('')
   // const [lga, setLga] = useState('')
    
    const handleStateChange = (e) => {
      setState(e.target.value)
    }
    const handleState1Change = (e) => {
      setState1(e.target.value)
    }

    const [gender, setGender] = React.useState('gender');
    const handleGenderChange = (event) => {
      setGender(event.target.gender);
    };

  return (
    <>
    <div className="updateProfle">
        {<Sidebar />}
        <div className="newContainer">
            {/* {<Navbar />} */}
            <div className="top">
            <h1>Update Profile</h1>
            </div>
            <div className="bottom">
            <div className="left">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="img"
            />
            <div className="updateImage" >
                <label htmlFor="file">
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <h1>Upload Image</h1>  
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="right">
            <form>
            <h6>PERSONAL DETAILS</h6>
            <div className="personalForm">  
              <div className="formInput">
                <label>
                  FULL NAME (As arranged in your bank account)
                </label>
                <input type="text" placeholder="John Doe"/>
              </div>
              <div className="formInput">
                <label>
                  USERNAME
                </label>
                <input type="text" placeholder="JohnDoe1"/>
              </div>
                <div className="formInput">
                <label>
                PHONE NUMBER
                </label>
                <input type="phone" placeholder="080 123 456 78"/>
              </div>
                <div className="formInput" key="">
                  <label>
                    EMAIL ADDRESS
                  </label>
                  <input type="email" placeholder="johndoe@gmail.com"/>
                </div>
                <div className="formInput">
                <label>
                STATE OF RESIDENCE
                </label>
                <Select
                        state={state}
                        changeState={handleStateChange}
                    />
              </div> 
              <div className="formInput" key="">
                  <label>
                    STATE OF ORIGIN
                  </label>
                  <Select
                        state={state1}
                        changeState={handleState1Change}
                    />
                </div>
              <div className="formInput">
                <label>
                RESIDENTIAL ADDRESS
                </label>
                <input type="text" placeholder="John Doe"/>
              </div>
                <div className="formInput" key="">
                  <label>
                    PERMANENT HOME ADDRESS
                  </label>
                  <input type="text" placeholder="John Doe"/>
                </div>
                <div className="formInput" key="">
                    <label htmlFor="file">
                    VALID ID (DRIVER'S, NIN, INT'L PASSORT, VOTER'S) <DriveFolderUploadOutlinedIcon className="icon" />
                    </label>
                  {/* <input type="file" id="" style={{ display: "none" }}/> */}
                </div>
                <div className="formInput" key="">
                  <label>
                    SERIAL NUMBER OF VALID ID
                  </label>
                  <input type="text" placeholder="011234"/>
                </div>
        </div>
        </form>
        <form>
        <h6>DETAILS OF NEXT OF KIN</h6>
        <div className="personalForm">  
                <div className="formInput" key="">
                  <label>
                    FIRST NAME
                  </label>
                  <input type="text" placeholder="John"/>
                </div>
                <div className="formInput" key="">
                  <label>
                    LAST NAME
                  </label>
                  <input type="text" placeholder="Doe"/>
                </div>
                <div className="formInput" key="">
                  <label>
                    ADDRESS
                  </label>
                  <input type="text" placeholder="65, Clean street"/>
                </div>
                <div className="formInput" key="">
                  <label>
                    PHONE NUMBER
                  </label>
                  <input type="phone" placeholder="080 123 456 78"/>
                </div>
                <div className="formInput" key="">
                  <label>
                    EMAIL ADDRESS 
                  </label>
                  <input type="email" placeholder="JohnDoe@gmail"/>
                </div>
                <div className="formInput" key="">
                  <label>
                    RELATIONSHIP
                  </label>
                  <input type="text" placeholder="Father"/>
                </div>
                </div>
                </form> 
                <button>Send</button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default UpdateProfile