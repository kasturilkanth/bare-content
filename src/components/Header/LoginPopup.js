function LoginPopup() {
  return (
    <div className="popup-container">
      <div className="wrapper">
        <form>
          E-mail:<input type="email"></input>
          <br></br>
          password:<input type="password"></input>
          <br></br>
          <button className="login-btn">LogIn</button>
        </form>
      </div>
    </div>
  );
}
export default LoginPopup;
