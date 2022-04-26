import React from "react";
import "../Fonts/Font.css";
import Footer from "../components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />;

const ErrorNot = () => {

    return (
        <>
            <div className="pt-5">
                <h1 className=" text-slate-900 font-black">AiVest</h1>
                <p className="text-xs font-medium">Please <b className="text-blue-600">sign in</b> or create a new account if your new member and enjoy.</p>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>
        </>
    );
};

export default ErrorNot;
