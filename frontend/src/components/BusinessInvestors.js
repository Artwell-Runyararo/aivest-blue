import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "bootstrap";
import './BusinessInvestors.css'
import Modal from './Modal'
import axios from "axios";
const BusinessInvestors = () => {

    const [loginStatus, setLoginStatus] = useState("");
    const [userData, setData] = useState([]);
    // const [userRole, setRole] = useState("");
    // const [userDescrip, setDescrip] = useState("");
    const converted = Object.values(userData)

    // console.log(userData)
    // Checking the currect user account
    // Load...////
    useEffect(() => {
        axios.get(`http://localhost:4000/login`).then((response) => {
            if (response.data.loggedIn === true) {
                // console.log(response)
                setLoginStatus(response.data.user[0].ai_role);
            }
        })
    }, []);
    // //////
    // Send data of current user to the server and get back the results

    useEffect(() => {
        axios.post(`http://localhost:4000/api_url`, {
            inputDataRole: loginStatus,
        }).then((response) => {
            if (response.data) {
                // console.log(response)
                // setRole(response.data[0].role);
                // setDescrip(response.data[1].description);
                setData(response.data)

            }
        })
    });
    // Modal Box sending data and to Open
    const [model, setModel] = useState(false);
    const [tempdata, setTempdata] = useState([]);

    const getData = (role, category, description) => {
        let tempData = [role, category, description];
        // console.warn(tempData);
        setTempdata(item => [1, ...tempData]);
        return setModel(true);
    }
    return (
        <div className="container-fluid p-5 bg-gray-60">
            <div className="row  p-5">
                {
                    converted.slice(0, 3).map((infoData, indexdata) => {
                        return <div key={indexdata} className="col-sm col-md col-lg  text-slate-500">
                            <div className="card overflow-hidden h-100 p-5 border-0 bg-gray-60 drop-shadow-2xl rounded-2xl">
                                <span key={indexdata} className="text-left"><i className="bi bi-patch-check-fill text-green-500 "></i> Verified {infoData.role} </span>
                                <div className="card-body">
                                    <h3 key="{infoData}" className="card-title text-slate-900 font-bold">Business Opportunity</h3>
                                    <br />
                                    <p key={indexdata} className="text-xs">{infoData.description} </p>
                                </div>
                                <button className="btn d-flex justify-end text-xs  rounded-sm fw-bold p-2" onClick={() => getData(infoData.role, infoData.category, infoData.description)} > Read more <i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    })
                }
                {
                    model === true ? <Modal role={tempdata[1]} category={tempdata[2]} description={tempdata[3]} hide={() => setModel(false)} />: ''
                }
                {/* <div className="col-sm col-md col-lg   text-slate-500">
                    <div className="card p-5 border-0  bg-gray-60 drop-shadow-2xl  rounded-2xl">
                        <span className="text-left"><i className="bi bi-patch-check-fill text-green-500 "></i>Verified Investor</span>
                        <div className="card-body">
                            <h3 className="card-title text-slate-900 font-bold">Business Opportunity</h3>
                            <br />
                            <p className="text-xs">Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada.</p>
                        </div>
                        <span className="d-flex justify-end"><a href="##" style={{ textDecoration: "none" }} className="text-xs  rounded-sm bg-cyan-500 text-gray-50 p-2">Read more <i className="bi bi-arrow-right"></i></a></span>
                    </div>
                </div>
                <div className="col-sm col-md col-lg   text-slate-500 ">
                    <div className="card p-5 border-0  bg-gray-60 drop-shadow-2xl  rounded-2xl">
                        <span className="text-left"><i className="bi bi-patch-check-fill text-green-500 "></i>Verified Investor</span>
                        <div className="card-body">
                            <h3 className="card-title text-slate-900 font-bold">Business Opportunity</h3>
                            <br />
                            <p className="text-xs">Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada.</p>
                        </div>
                        <span className="d-flex justify-end"><a href="##" style={{ textDecoration: "none" }} className="text-xs  rounded-sm bg-cyan-500 text-gray-50 p-2">Read more <i className="bi bi-arrow-right"></i></a></span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default BusinessInvestors
