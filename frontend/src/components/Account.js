import React, { useEffect, useState } from "react";
import "./Fonts/Font.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Background.css"
import Entreprenuer from "../pages/Entreprenuer";
import Venturecapitalist from "../pages/VentureCapitalist";
import ErrorNot from "../pages/Error";
import axios from "axios";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />;

const MyAccount = () => {

    const [role, setRole] = useState('');
    axios.defaults.withCredentials = true;
    // Getting response about user logged in
    useEffect(() => {
        axios.get(`http://localhost:4000/login`).then((response) => {
            if (response.data.loggedIn === true) {
                // console.log(response)
                setRole(response.data.user[0].ai_role);
            }
        })
    }, [])

    return (
        <div className="bg-white account">
            {role === "" && <ErrorNot />}
            {role === "Investor" && <Venturecapitalist />}
            {role === "Entreprenuer" && <Entreprenuer />}
        </div>
    );
};

export default MyAccount;
