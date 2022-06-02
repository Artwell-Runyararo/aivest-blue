import React from "react";
import "./Fonts/Font.css";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm col-md col-lg">&ensp;</div>
          <div className="col-sm col-md col-lg-6   text-light">
            <br />
            <h1 style={{ fontWeight: "bolder" }} className="display-5">
              
            </h1>

            <h1 style={{ fontWeight: "bolder" }} className="display-5">
              About  Aivest
            </h1>
            <p className="p-2 text-xs text-gray-100  text-center">
              A Place Where Entrepreneures Meets Investors..
            </p>
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
          <div className="row pl-5">
            <div className="col-sm col-md col-lg pb-0 p-5 text-left">
           
              <h1>
                <strong className="text-slate-900 pl-5">Who is AiVest</strong>
              </h1>
            </div>
          </div>
          <div className="row pt-0 p-5">
            <div className="col-sm col-md col-lg text-left p-5 text-slate-500">
            
              <p>
              AiVest is a network that provides a platform for startup and existing business projects, ideas or
fundraising to connect with funding sources. AiVest gives you an opportunity to check the
probability of success of your business using machine learning and hence goes on to connect to you
the most appropriate angel investor for your business. AiVest is a portal which can be uses by both
investors and entrepreneurs for the benefit of their businesses.
              </p>
              <p>
       
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <div>
          <Footer/>
      </div>
    </>
  );
};

export default About;
