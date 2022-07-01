import React, { useRef } from "react";

function LoginPopup() {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (
      email.current.value == "abc@gmail.com" &&
      password.current.value == "12345"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345");
    }
  };

  return (
    <div className="popup-container">
      {getEmail && getPassword ? <h4>LOGGED IN AS {getEmail}</h4> : null}
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          E-mail:<input type="email"></input>
          {/* <br></br> */}
          password:<input type="password"></input>
          {/* <br></br> */}
          <button className="login-btn">LogIn</button>
        </form>
      </div>
    </div>
  );
}
export default LoginPopup;
