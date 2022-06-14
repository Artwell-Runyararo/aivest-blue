import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>;

const WelcomeContent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm col-md col-lg">&ensp;</div>
        <div className="col-sm col-md col-lg pt-2  text-light">
          <br />
          <h1 className="display-5 fw-bolder"> Source Of Venture Funding</h1>
          {/* <h4 style={{ fontWeight: "bolder" }} className="display-6">
            The most trusted Investor entreprenure network!!!
          </h4> */}
          <p className="p-2 text-xs text-gray-100  text-center">
          Get connected to the right financing for your business. Entrpreneurs are being funded, Why shouldnt you?
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="col-sm col-md col-lg">&ensp;</div>
      </div>
    </div>
  );
};

export default WelcomeContent;
