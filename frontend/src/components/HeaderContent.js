import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

const WelcomeContent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm col-md col-lg">&ensp;</div>
        <div className="col-sm col-md col-lg-6 pt-2  text-light">
          <br />
          <h1 style={{ fontWeight: "bolder" }} className="display-5">
            Mauris blandit aliquet elit
          </h1>
          <p className="p-2 text-xs text-gray-100  text-center">
            Sollicitudin molestie malesuada. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget
            tincidunt nibh pulvinar a, Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin eget tortor risus.
          </p>
        </div>
        <div className="col-sm col-md col-lg">&ensp;</div>
      </div>
    </div>
  );
};

export default WelcomeContent;
