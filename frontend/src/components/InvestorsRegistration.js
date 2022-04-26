import React, { useEffect, useState, useRef } from "react";
import "./Fonts/Font.css";
import Footer from "./Footer";
import "./Registraton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Schema } from "../Validations/registerValidation"
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />;

const InvestorsRegistration = () => {

  //  users variables declared for storing input from form 
  const [stateValue, setState] = useState("");
  const [investEmail, setEmail] = useState("");
  const [investAddress, setAddress] = useState("");
  const [investPhone, setPhone] = useState("");
  const [investCompany, setCompany] = useState("");
  const [investPassword, setPassword] = useState("");
  const [role, setRole] = useState("");

  // Getting user inputs from form field
  const handleInputChange = (event) => {
    setState(event.target.value);
  };
  const handleInputChange1 = (event) => {
    setEmail(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setAddress(event.target.value);
  };
  const handleInputChange3 = (event) => {
    setPhone(event.target.value);
  };
  const handleInputChange4 = (event) => {
    setCompany(event.target.value);
  };
  const handleInputChange5 = (event) => {
    setPassword(event.target.value);
  };
  const handleInputChange6 = (event) => {
    setRole(event.target.value);
  };

  // Submitting the values to the server
  const onSubmit = () => {
    axios.post("http://localhost:4000/addInvestors", {
      inputUserName: stateValue,
      inputInvestorsEmail: investEmail,
      inputInvestorsAddress: investAddress,
      inputInvestorsPhone: investPhone,
      inputInvestorsCompany: investCompany,
      inputInvestorsPassword: investPassword,
      inputRole: role,
    }).then((response) => {
      console.log(response);
    });
  };

  // Settting input field to focus
  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);
  // End of Settting input field to focus

  // Inputs message error focus
  const [focused, setFocused] = useState(false)
  const [focused1, setFocused1] = useState(false)
  const [focused2, setFocused2] = useState(false)
  const [focused3, setFocused3] = useState(false)
  const [focused4, setFocused4] = useState(false)
  const [focused5, setFocused5] = useState(false)
  const [focused6, setFocused6] = useState(false)
  const handleFocus = (e) => {
    setFocused(true)
  }
  const handleFocus1 = (e) => {
    setFocused1(true)
  }
  const handleFocus2 = (e) => {
    setFocused2(true)
  }
  const handleFocus3 = (e) => {
    setFocused3(true)
  }
  const handleFocus4 = (e) => {
    setFocused4(true)
  }
  const handleFocus5 = (e) => {
    setFocused5(true)
  }
  const handleFocus6 = (e) => {
    setFocused6(true)
  }
  
  return (
    <>
      <div>
        <br />
        <div className="container-fluid">
          <div className="row bg-white p-5 pt-0">
            <div className="col-sm col-md col-lg">&ensp;</div>
            <div className="col-sm col-md col-lg-8 rounded-md mt-5 p-5 border-1 text-slate-500">
              <div className="text-xs p-1">
                <strong className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up your new account</strong>
                <p className="mt-2 text-center text-xs text-gray-600"> And{' '}
                  <span style={{ textDecoration: 'none !important' }} className="font-medium text-primary hover:text-green-500"> be part of the world leaders in business</span>
                </p>
              </div>
              <br /> {/* <p>{stateValue}</p> */}
              <form > {/* 1st Section Row1 */}
                <div className="row">
                  <div className="col-sm col-md col-lg text-left">
                    <label className="text-left p-2"> <i className="bi bi-person-fill"></i> First Name </label>
                    <input onBlur={handleFocus} focused={focused.toString()} pattern="^[A-Za-z\s]{4,16}$" aria-describedby="userHelpBlock" required ref={userRef} name="name" value={stateValue} onChange={handleInputChange} type="text" className="form-control input  w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                    <div id="userHelpBlock" className="form-text formtext text-danger">Username must be of a string 4-20 characters and must not include special characters(#$@&*%) and numbers.</div>
                  </div>
                  <div className="col-sm col-md col-lg text-left">
                    <label className="text-left p-2"> <i className="bi bi-envelope-fill"></i> Email</label>
                    <input onBlur={handleFocus1} focused={focused1.toString()} required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" aria-describedby="emailHelpBlock" name="useremail" value={investEmail} onChange={handleInputChange1} type="email" className="form-control w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900  " />
                    <div id="emailHelpBlock" className="form-text  formtext text-danger">Inserted email is invalid, Please provide vaild email.</div>
                  </div>
                </div>
                {/* End of 1st Section Row1 */}

                {/* 2nd Section Row 2 */}
                <div className="row">
                  <div className="col-sm col-md col-lg text-left">
                    <label className="text-left p-2"> <i className="bi bi-geo-alt-fill"></i> Address/Location</label>
                    <input onBlur={handleFocus2} focused={focused2.toString()} pattern="^[A-Za-z0-9\s]+$" aria-describedby="addressHelpBlock" name="address" required value={investAddress} onChange={handleInputChange2} type="text" className="form-control w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                    <div id="addressHelpBlock" className="form-text  formtext text-danger">Insert a vaild address pleas.</div>
                  </div>
                  <div className="col-sm col-md col-lg text-left">
                    <label className="text-left p-2"> <i className="bi bi-telephone-fill"></i> Phone </label>
                    <input onBlur={handleFocus3} focused={focused3.toString()} pattern="^[0-9]*$" required aria-describedby="phoneHelpBlock" name="phone" value={investPhone} onChange={handleInputChange3} type="text" className="form-control w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900  " />
                    <div id="phoneHelpBlock" className="form-text  formtext text-danger">Only numbers or intergers allowed, please insert a vaild number</div>
                  </div>
                </div>
                {/* End of 2nd Section Row2 */}

                {/* 3rd Section Row3 */}
                <div className="row">
                  <div className="col-sm col-md col-lg text-left">
                    <label className="text-left p-2"> <i className="bi bi-people-fill"></i> Company Name </label>
                    <input onBlur={handleFocus4} focused={focused4.toString()} required pattern="^[A-Za-z0-9\s]{2,20}$" aria-describedby="companyHelpBlock" name="company" value={investCompany} onChange={handleInputChange4} type="text" className="form-control w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                    <div id="companyHelpBlock" className="form-text formtext text-danger">It must be of a string 2-20 characters.</div>
                  </div>
                  <div className="col-sm col-md col-lg text-left">
                    <label htmlFor="" className="text-left p-2"><i className="bi bi-person-check-fill"></i> Select your role </label>
                    <select required aria-describedby="HelpBlock" name="role" onChange={handleInputChange6} className="form-control  pt-1 w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 ">
                      <option hidden className="text-primary">Select role ...</option>
                      <option value="Investor">Investor</option>
                      <option value="Entreprenuer">Entreprenuer</option>
                    </select>
                    {/* <div id="HelpBlock" class="form-text">{errors.role?.message}</div> */}
                  </div>
                </div>
                {/* End of 3rd Section Row3 */}
                <br /> {/* 4th Section Row4 */}
                <div className="row">
                  <div className="col-sm col-md col-lg text-left">
                    <label className="text-left p-2"> <i className="bi bi-key-fill"></i> Password</label>
                    <input onBlur={handleFocus5} focused={focused5.toString()} required pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&:;])[A-Za-z\d@$!%*#?&:;]{8,20}$" aria-describedby="passwordHelpBlock" name="newPassword" value={investPassword} onChange={handleInputChange5} type="password" className="form-control w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                    <div id="passwordHelpBlock" className="form-text formtext text-danger">Minimum 8-20 characters, at least one letter, one number and one special character</div>
                  </div>
                  <div className="col-sm col-md col-lg text-left">
                    <label className="text-left p-2"> <i className="bi bi-key-fill"></i> Confirm Password</label>
                    <input onBlur={handleFocus6} focused={focused6.toString()} required pattern={investPassword} aria-describedby="cHelpBlock" name="confirmPassword" type="password" className="form-control w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900  " />
                    <div id="cHelpBlock" className="form-text formtext text-danger">The two passwords does not match!</div>
                  </div>
                </div>
                {/* End of 4th Section Row4*/}
                <br /> {/* 5th Section Row4 */}
                <div className="row">
                  <div className="col-sm col-md col-lg text-left">
                    <br />
                    <button type="submit" onClick={onSubmit} className="btn bg-primary login-with-google-btn btn-block form-control"> <i className="bi bi-arrow-right-circle-fill text-light"></i> Sign Up </button>
                    <p className="pl-0 pt-4 text-xs font-medium text-blue-600"> Already a member, please sign in here.</p>
                  </div>
                </div>
                {/* End of 5th Section Row4*/} </form>
            </div>
            <div className="col-sm col-md col-lg">&ensp;</div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default InvestorsRegistration;
