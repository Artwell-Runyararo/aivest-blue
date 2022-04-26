import React, { useRef, useEffect, useState } from "react";
import "./Fonts/Font.css";
import Footer from "./Footer";
import "./Background.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

const Login = () => {

  // Creating Variables to store user input
  const [email, setEmailLogin] = useState("");
  const [password, setPasswordLogin] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  axios.defaults.withCredentials = true;
  
  // Setting /Taking the values from user input
  const onChangehandleInputValue = (event) => {
    setEmailLogin(event.target.value);
  }
  const onChangehandleInputValue2 = (event) => {
    setPasswordLogin(event.target.value);
  }

  // Submitting the Form to the server
  const onFormSubmit = () => {
    axios.post("http://localhost:4000/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].ai_username);
      }
    });
  }

  // Settting input field to focus
  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);
  // End of Settting input field to focus

  // ////
  useEffect(() => {
    axios.get(`http://localhost:4000/login`).then((response) => {
      if (response.data.loggedIn === true) {
        // console.log(response)
        setLoginStatus(response.data.user[0].ai_username);
      }
    })
  }, []);
  // //////
  return (
    <div>
      <br />
      <div className="container-fluid">
        <div className="row pt-0 p-5  bg-white">
          
          <div className="col-sm col-md col-lg ">&ensp;</div>
          <div className="col-sm col-md col-lg rounded-md mt-5 p-5 border-1 text-slate-500">
          <p className="text-dark">{loginStatus}</p>
            <div className="text-left">
              <div className="text-xs p-1">
                <strong className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</strong>
                <p className="mt-2 text-center text-xs text-gray-600"> Or{' '}
                  <span style={{ textDecoration: 'none !important' }} className="font-medium text-primary hover:text-green-500"> start by creating your new account</span>
                </p>
              </div>
            </div>

            <br />
            <form>
              {/* 1st Section Row1 */}
              <div className="form-group text-left">
                <label className="text-left p-2">
                  <i className="bi bi-envelope-fill"></i> Email
                </label>
                <input required ref={userRef} onChange={onChangehandleInputValue} value={email} type="text" className="form-control text-xs bg-slate-900" placeholder="Enter your email address"
                />
              </div>
              <div className="form-group  text-left">
                <label className="text-left p-2">
                  <i className="bi bi-key-fill"></i> Password
                </label>
                <input required autoComplete="cc-csc" type="password" onChange={onChangehandleInputValue2} value={password} placeholder="Enter your password" className="form-control text-xs" />
              </div>
              {/* End of 1st Section Row1 */}

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between pt-3 pb-3">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-xs text-slate-500"> Remember me</label>
                </div>

                <div className="text-xs">
                  <span className="font-medium text-primary hover:text-green-500"> Forgot your password?</span>
                </div>
              </div>
              {/* End of Remember Me and Forgot Password */}

              {/* 4th Section Row4 */}
              <div className="row">
                <div className="col-sm col-md col-lg text-left">
                  <button onClick={onFormSubmit} className="btn bg-primary login-with-google-btn text-light text-xs border-0 w-100"><i className="bi bi-shield-lock-fill text-light" aria-hidden="true"></i> Sign in</button>
                </div>
              </div>
              {/* End of 4th Section Row4*/}

              {/* 5th Section Row5 */}
              <div className="row  p-0 m-0">
                <div className="col-sm col-md col-lg p-0 m-0">
                  <p className="lineh ">Or continue with</p>
                  <button type="button" className="login-with-google-btn2" > Sign in with Google</button>
                </div>
              </div>
              {/* End of 5th Section Row5*/}
            </form>

          </div>
          <div className="col-sm col-md col-lg ">&ensp;</div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
