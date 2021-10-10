import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import Login from "./login";
export default function Content() {
  const [clicked, isClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logedin, isLogedin] = useState(false);
  useEffect(() => {
      
    console.log("loged", logedin);
    console.log("email", email);
   localStorage.setItem("logedin", JSON.stringify(logedin));
    
  });

    const onchangeEmail = (e)=>{
        setEmail(e.target.value)
    }
    
    const onchangePasswprd = (e) => {
      setPassword(e.target.value);
    };
const submitHandel = (e) => {
    e.preventDefault();
    
    setEmail(e.target.value);
    setPassword(e.target.value);
    isLogedin(!logedin);
     localStorage.setItem("email", JSON.stringify(email));
     
    /* let user = window.localStorage.getItem('email') */
    /*   return (
        <div className="start">
          <div className="b-content">
            <h1>welcome {user}</h1>
          </div>
        </div>
      ); */
}

    
    const clickHandel = () => {
    isClicked(!clicked);
    console.log("clicked", clicked);
  };
const submitLogout = () => {
  isLogedin(!logedin);
  localStorage.setItem("logedin", JSON.stringify(logedin));
};
  
 

  return (
    <div id="viewport">
      <div className="container-fluid">
        <Sidebar
          logedin={logedin}
          isLogedin={isLogedin}
          submitLogout={submitLogout}
        />

        {clicked ? (
          <Login
            submitHandel={submitHandel}
            onchangePasswprd={onchangePasswprd}
            onchangeEmail={onchangeEmail}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            logedin={logedin}
          />
        ) : (
          <div className="start">
            <div className="b-content">
              <h1>Click log in to start </h1>
              <button className="btn btn-primary" onClick={clickHandel}>
                log in
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
