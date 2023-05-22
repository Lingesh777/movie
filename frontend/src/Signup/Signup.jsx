import "./Signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function Signup() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();

  
  const handleName = (e) => {
    setName(e.target.value);
  };

  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" ||email === "" ||password === "" ||mobile === "" ||language === "") 
    {
      toast.error("Enter all fields");
    } 
    else {
     
      axios
        .post("http://localhost:8080/postsignup", {
          username: name,
          email: email,
          password: password,
          mobilenum: mobile,
          language: language,
        })
        .then((res) => {
          console.log(res.data);
          if(res.data==='signup success')
          {
            navigate("/movie");
          }
          else{
            toast.error(res.data);
          }
        });
    }
  };

  return (
    <div className="signupbody">
      <div className="formsignup">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <form>
          {/* Labels and inputs for form data */}
          <label className="labelsignup">Name</label>
          <input
            onChange={handleName}
            className="input"
            value={name}
            placeholder="username *"
            type="text"
            required
          />

          <label className="labelsignup">Email</label>
          <input
            className="input"
            onChange={handleEmail}
            value={email}
            placeholder="email *"
            type="email"
            required
          />

          <label className="labelsignup">Password</label>
          <input
            onChange={handlePassword}
            className="input"
            value={password}
            placeholder="password *"
            type="password"
            required
          />

          <label className="labelsignup">Mobile Number</label>
          <input
            onChange={handleMobile}
            className="input"
            value={mobile}
            placeholder="mobile number *"
            type="text"
            onKeyPress={(event)=>{
              if(!/[0-9]/.test(event.key)){
                  event.preventDefault();
              }
          }}
            required
          />

          <h3 style={{ color: "white" }}>Select your Language</h3>

          <input
            type="radio"
            name="language"
            value="Tamil"
            id="tamil"
            checked={language === "Tamil"}
            onChange={handleLanguage}
          />
          <label className="labels" htmlFor="tamil">
            Tamil{" "}
          </label>

          <input
            type="radio"
            name="language"
            value="Malayalam"
            id="malayalam"
            checked={language === "Malayalam"}
            onChange={handleLanguage}
          />
          <label className="labels" htmlFor="malayalam">
            Malayalam
          </label>

          <input
            type="radio"
            name="language"
            value="Telugu"
            id="telugu"
            checked={language === "Telugu"}
            onChange={handleLanguage}
          />
          <label className="labels" htmlFor="telugu">
            Telugu
          </label>

          <button onClick={handleSubmit} className="btnsignup" type="submit">
            Signin
          </button>
          <h3>
            Already an existing user ? <Link to="/login" style={{color:'black'}}>Login</Link>
          </h3>
        </form>
      </div>
    </div>
  );
}
