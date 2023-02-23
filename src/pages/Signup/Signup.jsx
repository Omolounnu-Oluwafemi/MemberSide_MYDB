import { Link, useNavigate  } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./Signup.scss"
 import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';
import Ourlogo from "../../assets/gibmpcsl.png"
import MediaQuery from 'react-responsive'


const Signup = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    token: "",
  });

  const [err, setError] = useState(null);
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }

  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
   setInputs(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

const formSubmit = (event) =>{

  const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  }

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.put("/auth/signup", inputs);
        
      } catch (err) {
        setError(err.response.data);
      }
      navigate("login");
    };

  const date = new Date();
  const time = date.toTimeString().split(' ')[0].split(':');


  return (
        <div className="signin">
            <img className="logo" src={Ourlogo} alt="GIB HORIZONS" />
        <div className="signin_form">
              <div>
                <h4 className="register">Register</h4>
                <p className="lets">Let's get up signup so you can have access to all we have in store for you</p>
              </div>
            <Form className="" noValidate onSubmit={handleSubmit} onClick={formSubmit} validated={validated}>
              <Row className="">
                <Form.Group controlId="validationCustom01">
                  <InputGroup hasValidation className="formInput">
                    <Form.Control
                      required
                      className="formControl"
                      type="text"
                      placeholder="First name"
                      name="firstname"
                      onChange={handleChange} />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                  <InputGroup hasValidation className="formInput">
                    <Form.Control
                      required
                      className="formControl"
                      type="text"
                      placeholder="Last name"
                      name="lastname"
                      onChange={handleChange} />
                    {/* <Form.Control.Feedback type="invalid">
                      Name field cannot be empty
                    </Form.Control.Feedback> */}
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="validationCuustomEmail">
                  {/* <Form.Label >Email</Form.Label> */}
                  <InputGroup hasValidation className="formInput">
                    <Form.Control
                      type="email"
                      className="formControl"
                      placeholder="Email"
                      required
                      name="email"
                      onChange={handleChange} />
                    {/* <Form.Control.Feedback type="invalid">
                      Please input a correct email address
                    </Form.Control.Feedback> */}
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="validationCustomPhonenumber">
                  <InputGroup hasValidation className="formInput">
                    <Form.Control
                      type="phone"
                      placeholder="Phone Number"
                      required
                      className="formControl"
                      name="phone"
                      onChange={handleChange} />
                    {/* <Form.Control.Feedback type="invalid">
                      Please add a phone number
                    </Form.Control.Feedback> */}
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="validationCustomPassword">
                  {/* <Form.Label >Password</Form.Label> */}
                  <InputGroup hasValidation className="formInput">
                    <Form.Control
                      type="text"
                      placeholder="Password"
                      required
                      className="formControl"
                      name="password"
                      onChange={handleChange} />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="validationCustomPassword">
                  <InputGroup hasValidation className="formInput">
                    <Form.Control
                      type="text"
                      placeholder="Token"
                      required
                      className="formControl"
                      name="token"
                      onChange={handleChange} />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check 
                  required
                  className="check"
                  label="Agree to terms and conditions"
                  feedbackType="invalid" />
              </Form.Group>
              <Button type="submit">Submit</Button>
              {err && <p className="error">{err}</p>}
            </Form>
            <p className="already">Already have an account?  <Link to="/login" className="link">Login in</Link> </p>
          </div>
          </div>
  )
}
export default Signup;

