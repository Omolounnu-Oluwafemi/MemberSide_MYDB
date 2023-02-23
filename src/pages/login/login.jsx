import "./login.scss"
import image from "../../assets/Welcomeback.png"
import logo from "../../assets/gibmpcsl.png"
import { useState} from "react"
import {  useNavigate } from "react-router-dom";
//import Axios from "axios";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";



const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });


  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const handleChange = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await  login(values)
      navigate("/home");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="login">
      <div className="loginImage ">
         { <img src={logo} alt="gibhorizonLogo" className="logo"/> }
            
       </div>
       <div className="welcomeform">
       <div className="welcome">
       { <img src={image} alt="signupimage" className="image"/> }
        <p className="please">Please login into your account with the password that you have created. Also ensure to keep your details safe </p>
      </div> 
      <form> 
        <h4 className="members" >MEMBERS LOGIN</h4>
      <div className="loginForm">
        <input
        className="formInput"
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
        className="formInput"
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err} <br /> Either Email or Password is wrong</p>} 
        {/* <span>
        New User?<Link to="/signup">Signin</Link>
        </span> */}
        </div>
      </form>
      </div>       
    </div>

  );
};
export default Login

