import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleConfirmPassword = event => {
    setConfirmPassword(event.target.value);
  }

  if (user) {
    navigate('/');
  }

  const handleCreateUser = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('passwords mismatched');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setError('');

    createUserWithEmailAndPassword(email, password);
  }

  return (
    <div className='form-container'>
      <div>
        <h3 className='form-title'>Sign Up</h3>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" />
          </div>

          <p className='error'>{error}</p>

          <input className='form-submit' type="submit" value="Sign Up" />
        </form>

        <p>Already have an account? <Link className='form-link' to="/login">Login</Link></p>

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

export default SignUp;