import React, { useState } from "react";
import Signuppage from "./signuppage";
import "./loginpage.css";

function Loginpage() {
  const [value, setValue] = useState("");
  const [phoneEmailError, setPhoneEmailError] = useState("");
  const [fullname, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [username, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const openFunction = () => {
    alert(value);
    alert(fullname);
    alert(username);
    alert(password);
  };
  const checkPhoneEmail = () => {
    let isNum = /^\d+$/.test(value);
    console.log(value);
    let isEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      );
    if (!(isNum && value.length === 10) & !isEmail) {
      setPhoneEmailError("Enter your valid Email or phone number");
    } else {
      setPhoneEmailError("");
    }
  };
  const checkFullName = () => {
    let isFullName = /^[A-Za-z0-9]+$/.test(fullname);
    if (!isFullName | (fullname.length > 20)) {
      setFullNameError("Enter valid Full name");
    } else {
      setFullNameError("");
    }
  };
  const checkUserName = () => {
    let isUserName = /^[A-Za-z0-9]+$/.test(username);
    if (!isUserName | (username.length > 20)) {
      setUserNameError("Enter valid User name");
    } else {
      setUserNameError("");
    }
  };
  const checkPassword = () => {
    let isPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
        password
      );
    if (!isPassword) {
      setPasswordError("Enter a strong password");
    } else {
      setPasswordError("");
    }
  };
  const disable =
    !(value && fullname && username && password) &&
    !(phoneEmailError && fullNameError && userNameError && passwordError);
  // const disableB = !(
  //   phoneEmailError &&
  //   fullNameError &&
  //   userNameError &&
  //   passwordError
  // );
  // const disable = disableA && disableB;
  // 2).any empty fields
  // 3). errors in any field

  return (
    <div className="App">
      <div className="headerBox">
        <div className="header">
          <img
            alt="Instagram"
            // class="s4Iyt"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            width={250}
            height={90}
          ></img>
          <p className="colorText">
            Sign up to see photos and videos from your friends.
          </p>
          <p className="button">Log in with facebook</p>
          <p>------OR------</p>
        </div>
        <div className="inputBox">
          <input
            placeholder="Mobile Number or Email"
            type={""}
            required
            value={value}
            onChange={(a) => {
              setValue(a.target.value);
            }}
            onBlur={checkPhoneEmail}
          ></input>
          {phoneEmailError && (
            <span className="errorMessage">{phoneEmailError}</span>
          )}
          <input
            placeholder="Full Name"
            type={"name"}
            value={fullname}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            onBlur={checkFullName}
          ></input>
          {fullNameError && (
            <span className="errorMessage">{fullNameError}</span>
          )}
          <input
            placeholder="User Name"
            type={"name"}
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            onBlur={checkUserName}
          ></input>
          {userNameError && (
            <span className="errorMessage">{userNameError}</span>
          )}
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onBlur={checkPassword}
          ></input>
          {passwordError && (
            <span className="errorMessage">{passwordError}</span>
          )}
        </div>
        <div className="middle">
          <button disabled={disable} className="button" onClick={openFunction}>
            Sign Up!
          </button>
          <p className="colorText">
            By signing up, you agree to our{" "}
            <a
              href="https://help.instagram.com/581066165581870"
              // tabindex="0"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>{" "}
            ,{" "}
            <a
              href="https://help.instagram.com/519522125107875"
              // tabindex="0"
              target="_blank"
              rel="noreferrer"
            >
              Data Policy
            </a>{" "}
            and{" "}
            <a
              href="https://help.instagram.com/1896641480634370?ref=ig"
              // tabindex="0"
              target="_blank"
              rel="noreferrer"
            >
              Cookies Policy
            </a>{" "}
            .
          </p>
        </div>
      </div>
      <div className="footerBox">
        <button onClick={<Signuppage />}>Have an account?Log in</button>
      </div>
    </div>
  );
}

export default Loginpage;
