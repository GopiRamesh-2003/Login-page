import React, { useState } from 'react'
import Validation from './LoginValidation';
import { Link } from 'react-router-dom';



function Login() {
    const [errors, setErrors] = useState({});
    const[values, setValues] = useState({
        email: '',
        password: ''
    });

    function handleInput(event) {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form action="" onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" name = "email"
            onChange = {handleInput} className='form-control rounded-0' />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" name='password'
            onChange = {handleInput} className='form-control rounded-0'/>
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          
          <button type = "submit" className="btn btn-success w-100"><strong>Log in</strong></button>
          
          <p>You are agree to our terms and policies</p>
          
          <Link to = "/signup"  className="btn btn-default border w-100 bg-light text-decoration-non">Create Account</Link>
        
        </form>
      </div>
    </div>
  )
}

export default Login
