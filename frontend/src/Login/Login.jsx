import React from 'react';
import './Login.css';
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Login() {

const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

const navigate=useNavigate();

const handleEmail =(e) => { 
  setEmail(e.target.value); 
};

const handlePassword =(e)=>{
  setPassword(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  if ( email === "" || password === "") {
    toast.error("Enter all fields");
  } else {
    axios.get("http://localhost:8080/login",
    {
      params:
      {
        email:email,
      password:password
      }
    }
    ).then((res)=>{
      console.log(res.data);
      if(email==='lingesh' && password==='lingesh')
      {
        toast.success("login succesful")
        navigate("/movie")
        alert("welcome admin");
      }
      else if(res.data==='Login Successful')
      {
        toast.success("Login success");
            setTimeout(()=>{
                navigate("/user")
            },2000);
      }

      else{
        toast.error(res.data);
      }
    })
  }
};

  return (
    <div className='loginbody'>
      <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    <div className='formlogin'>
      <form>
        <label className='labellogin'>E-mail</label>
        <input className='inputlogin' onChange={handleEmail} value={email} placeholder='email *' type='email' required/>
        <label className='labellogin'>Password</label>
        <input className='inputlogin' onChange={handlePassword} value={password} placeholder='password *' type='password' required/>
        <button onClick={handleSubmit} className='btnlogin' style={{width:'16vw'}}>Login</button>
        <h4>Are you a new user ? <Link to="/signup" style={{color:'black'}}>Signup</Link></h4>
      </form>
    </div>
    </div>
  )
}
export default Login;
