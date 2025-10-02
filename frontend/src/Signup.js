import React, {useState} from 'react'
import { useNavigate, Link } from "react-router-dom";

import SignupValidation from "./SignupValidation";
import axios from 'axios';

function Signup() { 
    const[values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues((prev) => ({...prev, [event.target.name]: event.target.value}));
    }   

    const handleSubmit = (event) => {
        console.log(values);
        event.preventDefault();
        const errr = (SignupValidation(values));
        setErrors(errr);

        console.log(errr);
        console.log(errors);
        if(errr.name === "" && errr.email === "" && errr.password === "" ){
            console.log("No errors, submit form");
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                // console.log(res);
                console.log("Posted");
                navigate("/login");
            })
            .catch(err => console.log(err));
        }

        // Handle form submission logic here
    }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" placeholder="Enter Name" name="name"
            onChange = {handleInput}
            className='form-control rounded-0' />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" name="email"
            onChange = {handleInput}
            className='form-control rounded-0' />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>New Password</strong></label>
            <input type="password" placeholder="Enter Password" name="password"
            onChange = {handleInput}
            className='form-control rounded-0'/>
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          {/* <div className="mb-3">
            <label htmlFor="password"><strong>Confirm Password</strong></label>
            <input type="password" placeholder="Re-Enter Password" name="confirm_password"
            onChange = {handleInput}
            className='form-control rounded-0'/>
            {errors.confirm_password && <span className='text-danger'>{errors.confirm_password}</span>}
          </div> */}
          <button type = "submit" className="btn btn-success w-100"><strong>Sign up</strong></button>
          <p>You are agree to our terms and policies</p>
          <Link to="/login" className="btn btn-success w-100 text-decoration-non">Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;