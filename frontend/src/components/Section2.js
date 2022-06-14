import React from "react";
import './Background.css'
import "bootstrap/dist/css/bootstrap.min.css";

const Glass = () => {
  return (
    <div className="container-fluid  bg-gray-100">
      <div className="row p-5">
        <div className="col-sm col-md col-lg p-5">
          <h1 className="text-4xl  text-left  text-slate-900 font-black">
            Investors
          </h1>
          <div className="bg-sky-500 w-50 p-1 small"></div>
          <br/>
          <div className="bg-picture2 h-100 p-5">&ensp;</div>
        </div>
        <div className="col-sm col-md col-lg p-5 mt-5  bg-neutral-50 drop-shadow-lg text-slate-500  rounded-lg">
        <div className="text-left text-xs pb-3"><i className="bi bi-gear-fill text-cyan-500"></i>Verified Artificial Intellijence System</div>
          <h6 className="text-slate-900 text-4xl text-left font-black">
            Are you an enterprenuer …? Looking for investors
          </h6>
          <p className="text-left text-xs pt-3 text-slate-500">
        Aivest is platform which allows entreprenures to pitch their business ideas and the system will check if the business will succeed or not, it will go on to suggest an investor that best suites the idea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Glass;
