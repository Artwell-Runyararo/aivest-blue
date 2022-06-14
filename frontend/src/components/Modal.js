import React, { useEffect, useState, useRef } from "react";
import "../Fonts/Font.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import './pages.css'
// import { Tabs, Tab } from "react-bootstrap";
import axios from "axios";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />;


const Modal = (props) => {

    let modelStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }
    const [message, setMessage] = useState("")
    const [mail, setMail] = useState("")
    const [status, setStatus] = useState("")
    const [foreign, setForeign] = useState("")
    const [display, setDisplay] = useState("")


    const handleInputChange = (event) => {
        setMessage(event.target.value);
        setMail('Confirm the request and get connected');
        setStatus('0');
        setForeign(props.idnum)
        
    };

    // Settting input field to focus
    const userRef = useRef();

    useEffect(() => {
        userRef.current.focus();
    }, []);
    // End of Settting input field to focus
    // Inputs message error focus
    const [focused, setFocused] = useState(false)
    const handleFocus = (e) => {
        setFocused(true)
    }

    const onMessage = () => {

        axios.post("http://localhost:4000/message", {
            inputMesage: message,
            inputMail: mail,
            inputForeign: foreign,
            inputStatus: status,
        }).then((response) => {
            console.log(response.data);
            if (response.data) {
                // The id "taget" is in the Cards component, which is where the results will be shown 
                setDisplay(response.data);
            } else {
                setDisplay("Network error please try again.");
            }
        });
    }


//     const [show, setShow] = useState(true)

//   // On componentDidMount set the timer
//   useEffect(() => {
//     const timeId = setTimeout(() => {
//       // After 3 seconds set the show value to false
//       setShow(false)
//     }, 3000)

//     return () => {
//       clearTimeout(timeId)
//     }
//   }, []);

//   // If show is false the component will return null and stop here
//   if (!show) {
//     return null;
//   }

    return (
        <>
            <div className="modal show fade" style={modelStyle}>
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-body text-left p-5 pt-4">
                            <h4 className="modal-title fw-bolder text-slate-900 text-uppercase pb-3" id="exampleModalLabel"><strong>Company overview</strong></h4>
                            <br />
                            <h6 className="fw-bold text-slate-400">About {props.companyname}</h6>
                            <div className="container-fluid  p-0 m-0">
                                <div className="row m-0">
                                    <div className="col-sm col-md col-lg p-0 m-0">
                                        <div className="bg-gray-50 pt-4 pb-4 rounded-3">
                                            <p className="p pl-4 pt-2 pb-2 m-0 bg-slate-100 text-slate-400">Company name: &ensp;&ensp;&ensp;     <span className="text-slate-500">{props.companyname}</span></p>
                                            <p className=" pl-4 pt-2 pb-2 m-0 text-slate-400">Industry: &ensp;&ensp;&ensp;         <span className="text-slate-500">{props.category}</span></p>
                                            <p className=" pl-4 pt-2 pb-2 m-0 bg-slate-100 text-slate-400">Founded: &ensp;&ensp;&ensp;          <span className="text-slate-500">{props.yearFund}</span></p>
                                            <p className=" pl-4 pt-2 pb-2 m-0 text-slate-400">Address/Location: &ensp;&ensp;&ensp; <span className="text-slate-500">{props.location}</span></p>
                                            <p className=" pl-4 pt-2 pb-2 m-0 bg-slate-100 text-slate-400">Role: &ensp;&ensp;&ensp; <span className="fw-bold text-cyan-500">{props.role}</span></p>
                                        </div>
                                        <br />
                                        <h6 className="fw-bold text-slate-400 pt-4">More from {props.companyname}</h6>
                                        <p classname="p-5"><div className="card border-0 bg-gray-60 drop-shadow-2xl ">
                                            <div className="card-body">
                                                {props.description}
                                            </div>
                                        </div></p>
                                    </div>
                                    <div className="col-sm col-md col-lg m-1">

                                        <div className="pb-2">
                                            <span className="bg-green-100 text-green-500 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                                                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                                                Business rated successful
                                            </span>
                                        </div>
                                        <p>Request more information from {props.companyname}</p>
                                        <p className="text-green-500">{display}</p>
                                        <form action="">

                                            <div className="row p-3 bg-gray-50 rounded-3">
                                                <div className="form-group  col-sm col-md col-md ">
                                                    <label htmlFor=""><i className="bi bi-envelope text-cyan-500"></i> Email</label>
                                                    <input type="email" onBlur={handleFocus} focused={focused.toString()} ref={userRef} onChange={handleInputChange} value={message} required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" aria-describedby="emailBlock" className="form-control text-sm leading-6 " />
                                                    <div id="emailBlock" className="form-text  formtext text-danger">Inserted email is invalid, Please provide vaild email.</div>
                                                </div>
                                                <div className="form-group  col-sm col-md col-md pt-2">
                                                    <button type="button" onClick={onMessage} className="login-with-google-btn3" > <i className="bi bi-send text-cyan-500"></i>Get connected</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">

                            <strong className="text-slate-900 fw-bold text-2xl">A<b className="text-cyan-500">i</b>Vest</strong>
                            <button type="button" onClick={props.hide} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;