import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  if (user) {
    navigate(from, { replace: true });
  }
  const handleSignIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  return (
    <div className='form-container'>
      <div>
        <h3 className='form-title'>Login</h3>
        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
          </div>

          <p style={{ color: ' red' }}>{error?.message}</p>

          {
            loading && <p>loading content...</p>
          }

          <input className='form-submit' type="submit" value="Login" />
        </form>

        <p>New to ema john? <Link className='form-link' to="/signup">Create New Account</Link></p>

        <div className='hr-line'>
          <hr className='line' />
          <small>or</small>
          <hr className='line' />
        </div>

        <button className='login-google-btn'>Continue with google</button>



      </div>
    </div>
  );
};

export default Login;