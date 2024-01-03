import React from 'react';
import './LoginForm.css';

const LoginForm = () => {

    const handleLogin = () => {
    
        alert('You have logged in successfully!');
    };
    
    return (
        

        <div className='wrapper'>
        
            <form action="">
                <h1>Login</h1>
                
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                

                <button type="button" onClick={handleLogin}>
        Login
        </button>
            

                <div className="register-link">
                <p>Don't have an account? <a href="#">SignUp</a></p>
                    
                </div>
            </form>
            
        </div>
    );
};

export default LoginForm;