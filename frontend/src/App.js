import React, { useEffect, useState } from "react";
import "./App.css";
import "./Fonts/Font.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/login";
import MyAccount from "./components/Account";
import InvestorsRegistration from "./components/InvestorsRegistration";
import NavigationBar from "./NavBar";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Background.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>;


function App() {

  const [loginStatus, setLoginStatus] = useState("");
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

  const online = loginStatus.length >0;
  return (
    <div className="App">
      <>
      <div className="container-fluid">
          <div className="row">
            <div className="col-sm col-md col-lg p-1 text-left">
              <i className="bi bi-microsoft pl-2 text-sky-500 "></i>
              <span className="text-xs text-slate-500">
                &ensp;Moving forward with artificial intellijence.
              </span>
            </div>
            <div className="col-sm col-md col-lg p-1 text-right">
              <span className="text-xs text-slate-500 pr-4">{online && <span>Active user: {loginStatus}</span> }</span>
            </div>
          </div>
        </div>
        <div className="bgGradient pt-3">
          <BrowserRouter>
            <div className="text-xs">
              <NavigationBar />
            </div>
            <div className="text-xs">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/InvestorsRegistration" element={<InvestorsRegistration />} />
                <Route path="/Account" element={<MyAccount />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </>
    </div>
  );
}

export default App;
