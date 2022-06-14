import React, { useRef, useEffect } from "react";
import "./Fonts/Font.css";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Registraton.css"
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

const Contact = () => {

  // Settting input field to focus
  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);
  // End of Settting input field to focus
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm col-md col-lg">&ensp;</div>
          <div className="col-sm col-md col-lg-6  text-light">
            <br />
            <br />
            <h1 style={{ fontWeight: "bolder" }} className="display-5">Contact Us</h1>
            <p className="p-2 text-xs text-gray-100  text-center"> For any queries please send us a message</p>
            <br />
            <br />
            <br />
            <br />
            <br />
          
          </div>
          <div className="col-sm col-md col-lg">&ensp;</div>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="container-fluid">
          <div className="row bg-white ">
            <div className="col-sm col-md col-lg-2 ">&ensp;</div>
            <div className="col-sm col-md col-lg rounded-md mt-5 mb-5 p-5 border-1 text-slate-500">
              <div className="text-xs p-1">
                <strong className="mt-6 text-center text-3xl font-extrabold text-gray-900">Drop your message here</strong>
                <p className="mt-2 text-center text-xs text-gray-600"> And{' '}
                  <span style={{ textDecoration: 'none !important' }} className="font-medium text-primary hover:text-green-500"> our team will responed to you quickly</span>
                </p>
              </div>
              <br />
              <form>
                {/* 1st Section Row1 */}
                <div className="row">
                  <div className="col-sm col-md col-lg text-left">
                    <label className="text-left p-2"><i class="bi bi-person-fill"></i> First Name</label>
                    <input ref={userRef} type="text" className="form-control bg-slate-900 " />
                  </div>
                  <div className="col-sm col-md col-lg text-left">
                    <label className="text-left p-2"><i class="bi bi-envelope-fill"></i> Email</label>
                    <input type="text" class="form-control " />
                  </div>
                </div>
                {/* End of 1st Section Row1 */}
                <br />
                {/* 2nd Section Row 2 */}
                <div className="row">
                  <div className="col-sm col-md col-lg text-left">
                    <label className="text-left p-2"><i class="bi bi-pen-fill"></i> Subject</label>
                    <input type="text" className="form-control  bg-slate-900" />
                  </div>
                  <div className="col-sm col-md col-lg text-left">
                    <label className="text-left p-2"><i class="bi bi-telephone-fill"></i> Phone</label>
                    <input type="text" class="form-control " />
                  </div>
                </div>
                {/* End of 2nd Section Row2 */}
                <br />
                {/* 3rd Section Row3 */}
                <div className="row">
                  <div className="col-sm col-md col-lg text-left">
                    <label className="text-left p-2"><i class="bi bi-chat-left-fill"></i> Message</label>
                    <textarea className="form-control  bg-slate-900"></textarea>
                  </div>
                </div>
                {/* End of 3rd Section Row3 */}
                <br />
                {/* 4th Section Row4 */}
                <div className="row">
                  <div className="col-sm col-md col-lg text-left">
                    <button className="btn bg-primary login-with-google-btn text-light  w-50"><strong>Send</strong></button>
                  </div>
                </div>
                {/* End of 4th Section Row4*/}
              </form>
            </div>
            <div className="col-sm col-md col-lg-2 ">&ensp;</div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
