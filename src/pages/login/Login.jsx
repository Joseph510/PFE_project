import React, { useState } from 'react';
import './login.scss';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


function Login() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();

    try {
      axios.post('http://localhost:4000/api/auth/signin', {
        username: username,
        password: password,
      }).then((response)=>{
        const user = {id:response.data.id,
          username:response.data.username}
          localStorage.setItem('user',JSON.stringify(user))
          localStorage.setItem('token',response.data.accessToken)
          localStorage.setItem('role',response.data.roles.toString())
          navigate('/home');
      }).catch((error)=>{})

      //()=>{}  ===> arrow function 
      // .then + . catch ===> Promise 
      // fn(fn()) ====> Callback 

 

  
    } catch (error) {
      console.error(error);
      swal('Error', 'Enter username and password to login', 'error');
    }
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter email"
          value={username}
          onChange={(event) => {
            setusername(event.target.value);
          }}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />

        <button type="submit" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
