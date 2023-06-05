import React, { useState } from 'react'
import './signup.scss'
import { Link } from 'react-router-dom'
import axios from "axios";
import Swal from 'sweetalert2';

function Register() {
    
        const [username, setusername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        async function save(event) {
            event.preventDefault();
            try {
                await axios.post("http://localhost:4000/api/auth/signup", {
                    username: username,
                    email: email,
                    password: password,
                    
                });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Employe Registration Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            } catch (err) {
                alert(err);
            }
        }



    
  return (
    <>
    
        <div className="signup-container">
            <div className="signup-row">
                <div className="signup-col">
                    <div className="signup-title">Sign Up</div>
                </div>
            </div>
            <div className="signup-row">
                <div className="signup-col">
                <form  >
                <div className="form-group">
                    <label htmlFor="name"> Name</label>
                    <input type="text" id="employeename" placeholder='Enter name'  
                    value={username}
                    onChange={(event) => {
                        setusername(event.target.value);
                    }}
                    required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="Enter Email" required
          
                    value={email}
                    onChange={(event) => {
                    setEmail(event.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password"  placeholder="Enter password" 
            
                    value={password}
                    onChange={(event) => {
                    setPassword(event.target.value);
                    }}required/>
                </div>
                
                <div className="form-group">
                    <button  type='submit' onClick={save}>Sign Up</button>
                </div>
                <div className="form-group">
                    <Link  to='/'>Already have an account</Link>
                </div>
            </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register