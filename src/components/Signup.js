import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const histry=useNavigate();
  async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:3000/signup",{
            email,password
        })
        .then(res=>{
            if(res.data==="exist"){
                alert("User already exist")
            }
            else if(res.data==="notexist"){
                histry("/home",{state:{id:email}})
                // histry("/home",{state:{id:email}})
            }
        })
        .catch(e=>{
            alert("wrong details");
            console.log(e)
        })
    }
    catch(e){
        console.log(e);
    }
  }
  return (
    <div className="login">
      <h1>Signup</h1>
      <form action="POST">
        <label htmlFor="email">Enter Email</label>
        <input
          type="email"
          className="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          className="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" onClick={submit}/>
      </form>
    
      <p>OR</p>
     
      <Link to="/">Login Page</Link>
    </div>
  );
};

export default Signup;
