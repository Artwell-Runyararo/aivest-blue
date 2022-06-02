import React from "react";
import "./Registraton.css"
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-gray-50 p-5">
        <div className="col-sm col-md col-lg p-5">
          <h1 className="text-left text-7xl	 text-slate-900 font-black">
            A<b className="text-cyan-500">i</b>Vest
          </h1>
          <p className="text-left pt-3 text-sm   text-slate-500"> If you are an entrepreneure with a great business idea wondering whether it will be successful of noto, you are at the right place. Aivest allow you to check the probsbility of success of the business.It also links different entrepreneures with their potential investors</p>
          <div className="d-flex justify-start ">
            <span style={{ textDecoration: "none" }} className="text-xs  rounded-md bg-primary w-50 login-with-google-btn  text-light p-3">
             <i className="bi bi-bell-fill"></i> Get registered today
            </span>
          </div>
        </div>
       
      </div>

      <div className="row bg-gray-50 pt-5 p-0 m-0">
        <div className="col-sm col-md col-lg  p-0 m-0">
          <p className="text-center text-xs  text-slate-500">
            &copy; 2022 All rights reserved by Aivest Company Zimbabwe.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
