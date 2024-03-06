import React, { useState, useEffect } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import "./loginsignup.css";
import user_icon from "../assests/person.png";
import email_icon from "../assests/email.png";
import password_icon from "../assests/password.png";

var Credentials = ["game@gmail.com game"];
// function
function LoginSignup() {
  const navigate = useNavigate();
  const [action, setAction] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passHide, setPassHide] = useState("password");

  //login logic
  function Login() {
    let valid = false;
    Credentials.map((cred) => {
      cred = cred.split(" ");
      if (email == cred[0] && password == cred[1]) valid = true;
    });
    if (valid) {
      navigate("/gamescreen");
    } else {
      alert("Invalid Credentials");
    }
  }
  // signup logic
  function SignUp() {
    if (name.length > 4 && email.length > 7 && password.length > 3) {
      Credentials.push(email + " " + password);
      alert("User created successfully");
      setAction("login");
    } else {
      alert(
        "Enter valid details name len > 4, email len > 7, password len > 3"
      );
    }
  }
  // return function contains the data fields and functionalities of each
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        {action === "login" ? (
          <>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type={passHide}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passHide === "password" ? (
              <>
                <button onClick={() => setPassHide("text")}>
                  Show password
                </button>
              </>
            ) : (
              <>
                <button onClick={() => setPassHide("password")}>
                  Hide Password
                </button>
              </>
            )}
            <button onClick={Login}>Login</button>
            Dont have an account ?{" "}
            <a onClick={() => setAction("signUp")}>SignUp</a>
          </>
        ) : (
          <>
            <div className="input">
              <input
                className="input"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                className="input"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                className="input"
                type={passHide}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {passHide === "password" ? (
              <>
                <button
                  className="showPassword"
                  onClick={() => setPassHide("text")}
                >
                  Show password
                </button>
              </>
            ) : (
              <>
                <button
                  className="showPassword"
                  onClick={() => setPassHide("password")}
                >
                  Hide Password
                </button>
              </>
            )}
            <button className="submit" onClick={SignUp}>
              SignUp
            </button>
            Already have an account ?{" "}
            <a onClick={() => setAction("login")}>Login</a>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
