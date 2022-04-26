import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Glass = () => {
  return (
    <div className="container-fluid  bg-gray-100">
      <div className="row p-5">
        <div className="col-sm col-md col-lg p-5">
          <h1 className="text-6xl  text-left  text-slate-900 font-black">
            Investores
          </h1>
          <div className="bg-sky-500 w-50 p-1 small"></div>
        
        </div>
        <div className="col-sm col-md col-lg p-5 mt-5  bg-neutral-50 drop-shadow-lg text-slate-500  rounded-lg">
        <div className="text-left text-xs pb-3"><i className="bi bi-gear-fill text-cyan-500"></i>Verified Artificial Intellijence System</div>
          <h6 className="text-slate-900 text-4xl text-left font-black">
            Are you an enterprenuer …? Looking for investors
          </h6>
          <p className="text-left text-xs pt-3 text-slate-500">
            Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus
            convallis quis ac lectus. Nulla porttitor accumsan tincidunt.
            Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat,
            accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus.
            Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
            neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
            Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus
            suscipit tortor eget felis porttitor volutpat.
          </p>
      
        </div>
      </div>
    </div>
  );
};

export default Glass;
