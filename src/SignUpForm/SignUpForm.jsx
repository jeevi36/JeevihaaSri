import React from 'react';
import './SignUpForm.css';

const SignUpForm = () => {

  const handleLogin = () => {
       
    alert('You have registered successfully!');
  };

  return (
    <div className='wrapper'>
      <form action="">
        <h1>Sign Up</h1>
        
        <div className="input-box">
          <input type="text" placeholder='Firstname' required />
        </div>

        <div className="input-box">
          <input type="text" placeholder='Lastname' required />
        </div>
        
        <div className="input-box">
          <input type="password" placeholder='Password' required />
        </div>

        <div className="input-box">
          <input type="password" placeholder='Confirm Password' required />
        </div>

        <div className="input-box">
          <input type="date" placeholder='dd/mm/yyyy' required />
        </div>

    

        <button type="button" onClick={handleLogin}>
          SignUp
        </button>
            

        <div className="register-link">
          <p>Already have an account? <a href="#">Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;