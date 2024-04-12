import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <form className="sign-up-form" action="#">
        <label>
          Name
          <input type="text" required />
        </label>
        <label>
          Email
          <input type="text" required />
        </label>
        <label>
          Password
          <input type="text" required />
        </label>
        <label>
          Phone no.
          <input type="text" required />
        </label>
        <br />
        <button className="registerbtn" type="submit">
          REGISTER
        </button>
      </form>
    </>
  );
};

export default Signup;
