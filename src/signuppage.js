import React, { useState } from "react";
import "./signuppage.css";

function Signuppage() {
  return (
    <div>
      <div>
        <img
          alt="Instagram"
          // class="s4Iyt"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          width={250}
          height={90}
        ></img>
        <input placeholder="phonenumber,username or email"></input>
        <input placeholder="password"></input>
        <button>Log in</button>
        <span>------OR------</span>
        <span>Log in with facebook</span>
        <span>Forgot password?</span>
      </div>
      <div>Don't have an account? Sign up</div>
      Get the app.
    </div>
  );
}
export default Signuppage;
