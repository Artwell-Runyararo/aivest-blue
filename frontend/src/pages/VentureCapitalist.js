import React, { useEffect, useState, useRef } from "react";
import "../Fonts/Font.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './pages.css'
import { Tabs, Tab } from "react-bootstrap";
import axios from "axios";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />;

const Venturecapitalist = () => {


    //  users variables declared for storing input from form 
    const [total_funding, setState] = useState("");
    const [founded_year, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [predictMessge, setPredict] = useState("");
    const [company, setCompany] = useState("");
    const [targetMarket, setTargetMarket] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [userId, setID] = useState("");


    const [messagesR, setMessagesReceived] = useState("");
    const converted = Object.values(messagesR);
    const [messageUpdate, setUpdatemessage] = useState("");
    const [statusUpdate, setUpdatestatus] = useState("");



    const [variable1, setVariable1] = useState("");
    const [variable2, setVariable2] = useState("");
    const [variable3, setVariable3] = useState("");
    const [variable4, setVariable4] = useState("");
    const [variable5, setVariable5] = useState("");
    const [variable6, setVariable6] = useState("");


    // Checking the currect user account
    // Load...////
    useEffect(() => {
        axios.get(`http://localhost:4000/login`).then((response) => {
            if (response.data.loggedIn === true) {
                // console.log(response)
                setLoginStatus(response.data.user[0].ai_role);
                setID(response.data.user[0].id);
            }
        })
    }, []);
    // //////
    // Getting user inputs from form field
    const handleInputChange = (event) => {
        setState(event.target.value);
    };
    const handleInputChange1 = (event) => {
        setEmail(event.target.value);
    };
    const handleInputChange2 = (event) => {
        setCategory(event.target.value);
    };
    const handleInputChange3 = (event) => {
        setCompany(event.target.value);
    };
    const handleInputChange4 = (event) => {
        setTargetMarket(event.target.value);
    };
    const handleInputChange5 = (event) => {
        setAddress(event.target.value);
    };
    const handleInputChange6 = (event) => {
        setDescription(event.target.value);
    };



    const handleInputChange100 = (event) => {
        setVariable1(event.target.value);
    };
    const handleInputChange101 = (event) => {
        setVariable2(event.target.value);
    };
    const handleInputChange102 = (event) => {
        setVariable3(event.target.value);
    };
    const handleInputChange103 = (event) => {
        setVariable4(event.target.value);
    };
    const handleInputChange104 = (event) => {
        setVariable5(event.target.value);
    };
    const handleInputChange105 = (event) => {
        setVariable6(event.target.value);
    };
    // Settting input field to focus
    const userRef = useRef();

    useEffect(() => {
        userRef.current.focus();
    }, []);
    // End of Settting input field to focus
    // Inputs message error focus
    const [focused, setFocused] = useState(false)
    const [focused1, setFocused1] = useState(false)
    const [focused2, setFocused2] = useState(false)
    const [focused3, setFocused3] = useState(false)
    const [focused4, setFocused4] = useState(false)
    const [focused5, setFocused5] = useState(false)

    const [focused6, setFocused6] = useState(false)
    const [focused7, setFocused7] = useState(false)
    const [focused8, setFocused8] = useState(false)
    const [focused9, setFocused9] = useState(false)
    const [focused10, setFocused10] = useState(false)
    const [focused11, setFocused11] = useState(false)

    const handleFocus = (e) => {
        setFocused(true)
    }
    const handleFocus1 = (e) => {
        setFocused1(true)
    }
    const handleFocus2 = (e) => {
        setFocused2(true)
    }
    const handleFocus3 = (e) => {
        setFocused3(true)
    }
    const handleFocus4 = (e) => {
        setFocused4(true)
    }
    const handleFocus5 = (e) => {
        setFocused5(true)
    }




    const handleFocus6 = (e) => {
        setFocused6(true)
    }
    const handleFocus7 = (e) => {
        setFocused7(true)
    }
    const handleFocus8 = (e) => {
        setFocused8(true)
    }
    const handleFocus9 = (e) => {
        setFocused9(true)
    }
    const handleFocus10 = (e) => {
        setFocused10(true)
    }
    const handleFocus11 = (e) => {
        setFocused11(true)
    }


    // Getting the data from API
    // Submitting the values to the server
    const onSubmit = () => {
        axios.post("http://localhost:4000/predict", {
            inputCompany: company,
            inputMarket: targetMarket,
            inputTotalFunding: total_funding,
            inputYear: founded_year,
            inputCategory: category,
            inputAddress: address,
            inputDescription: description,
            inputRole: loginStatus,
            inputId: userId,
            inputVariable1: variable1,
            inputVariable2: variable2,
            inputVariable3: variable3,
            inputVariable4: variable4,
            inputVariable5: variable5,
            inputVariable6: variable6,
        }).then((response) => {
            console.log(response.data.predicted_business);
            if (response.data.predicted_business === 1) {
                // The id "taget" is in the Cards component, which is where the results will be shown 
                setPredict("The business in the next future will be successful");
            } else if (response.data.predicted_business === 0 || response.data.predicted_business < 1) {
                setPredict("The business in the next future will be unsuccessful.");
            }
        });
    };
    // Upload image into database
    const [isSuccess, setSuccess] = useState(null);
    const [userInfo, setuserInfo] = useState({
        file: [],
        filepreview: null,
    })
    const handleInputChangeUpload = (event) => {
        setuserInfo({
            ...userInfo,
            file: event.target.files[0],
            filepreview: URL.createObjectURL(event.target.files[0]),
        })
    }
    // Submitting Image
    const Submit = async () => {
        const formdata = new FormData();
        formdata.append('avatar', userInfo.file);

        axios.post("http://localhost:4000/imageupload", formdata, {
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => {
            console.warn(res);
            if (res.data.success === 1) {
                setSuccess("Business plan upload successfully")
            }
        })
    }
    // The End of Uploading the image

    const [mailUp, setMailUp] = useState("");
    // Getting data from server for messages received
    useEffect(() => {
        axios.post(`http://localhost:4000/get`, {
            inputMessageUserId: userId,
        }).then((response) => {
            if (response.data) {
                setMessagesReceived(response.data)
                setMailUp(response.data[0].emailmessage)
            }
        })
    });
    // The End of Getting data from server for messages received


    useEffect(() => {
        setUpdatemessage('Your request has been confirmed now you can communicate');
        setUpdatestatus('1');
    }, []);
    const [notification, setNotification] = useState();
    // On Confirming the message
    const onConfirm = () => {
        axios.post("http://localhost:4000/confirm", {
            messageupdate: messageUpdate,
            statusupdate: statusUpdate,
            updataid: userId,
            updateEmail: mailUp,
        }).then((response) => {
            console.log(response.data);
            if (response.data) {
                // The id "taget" is in the Cards component, which is where the results will be shown 
                setNotification("Confirmed")
            } else {
                setNotification("Something went wrong")
            }
        });
    }


    return (
        <>
            {/* Top Header */}
            <div className="bg-image ">
                <div className="container-fluid">
                    <div className="row bg-picture3">
                        <div className="col-sm col-md col-lg bg-image  p-5 text-light">
                            <br />
                            <br />
                            <h1 style={{ fontWeight: "bolder" }} className="display-5">Investors</h1>
                            <p className="p-2 text-xs text-gray-100  text-center">Connecting you to Entreprenures with great and better bussiness plan</p>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Top Header */}

            {/* Tab */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm col-md col-lg p-0">
                        <div style={{ display: 'block' }}>
                            <Tabs className="myClass bg-light rouded-0 border-0" defaultActiveKey="first">
                                <Tab eventKey="first" title="Make Proposals">
                                    <div className="container-fluid">
                                        <div className="row bg-white pt-0">
                                            <div className="col-sm col-md col-lg rounded-md mt-5 pt-5 border-1 text-slate-500">

                                                <div className="text-slate-800 font-bold text-2xl">{predictMessge}</div>
                                                <div className="text-xs p-1">
                                                    <strong className="mt-6 text-center text-3xl font-extrabold text-gray-900">Predict Your Business</strong>
                                                    <p className="mt-2 text-center text-xs text-gray-600"> And{' '}
                                                        <span style={{ textDecoration: 'none !important' }} className="font-medium text-primary hover:text-green-500"> be part of the world leaders in business</span>
                                                    </p>
                                                </div>

                                                <br /> {/* <p>{stateValue}</p> */}
                                                <form >
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            {/* First Side */}
                                                            <div className="col-sm col-md col-lg">
                                                                {/* Other Sections */}
                                                                <div className="row">
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label className="text-left p-2"><i className="bi bi-building"></i>Company name </label>
                                                                        <input onBlur={handleFocus2} focused={focused2.toString()} pattern="^[A-Za-z\s]{4,16}$" aria-describedby="companyHelpBlock" required ref={userRef} name="company" value={company} onChange={handleInputChange3} type="text" className="form-control input  w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                                                                        <div id="companyHelpBlock" className="form-text formtext text-danger">Company name must be of a string 4-20 characters and must not include special characters(#$@&*%) and numbers.</div>
                                                                    </div>
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label className="text-left p-2"><i className="bi bi-bullseye"></i> Market Target </label>
                                                                        <input onBlur={handleFocus3} focused={focused3.toString()} pattern="^[A-Za-z\s]{4,16}$" aria-describedby="targetHelpBlock" required ref={userRef} name="mtarget" value={targetMarket} onChange={handleInputChange4} type="text" className="form-control input  w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                                                                        <div id="targetHelpBlock" className="form-text formtext text-danger">Market target must be of a string 4-20 characters and must not include special characters(#$@&*%) and numbers.</div>
                                                                    </div>
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label className="text-left p-2"><i className="bi bi-activity"></i> How big is the market opportunity in % ?</label>
                                                                        <input onBlur={handleFocus6} focused={focused6.toString()} pattern="^[0-9]*$" aria-describedby="targetHelpBloc" required ref={userRef} name="variable1" value={variable1} onChange={handleInputChange100} type="text" className="form-control input  w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                                                                        <div id="targetHelpBloc" className="form-text formtext text-danger">Only numbers or intergers allowed, please insert a vaild number</div>
                                                                    </div>
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label className="text-left p-2"><i className="bi bi-alarm"></i> Why is this the right time for this product or service?</label>
                                                                        <input onBlur={handleFocus7} focused={focused7.toString()} pattern="^[A-Za-z\s]{4,200}$" aria-describedby="argetHelpBlock" required ref={userRef} name="variable2" value={variable2} onChange={handleInputChange101} type="text" className="form-control input  w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                                                                        <div id="argetHelpBlock" className="form-text formtext text-danger">Product or Service must be of a string 4-200 characters and must not include special characters(#$@&*%) and numbers.</div>
                                                                    </div>
                                                                </div>
                                                                {/* End of other Sections */}

                                                                {/* 1st Section Row1 */}
                                                                <div className="row">
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label className="text-left p-2"> <i className="bi bi-bank2"></i> Enter your total funding </label>
                                                                        <input onBlur={handleFocus} focused={focused.toString()} pattern="^[0-9]*$" aria-describedby="fundHelpBlock" required ref={userRef} name="funding_total_usd" value={total_funding} onChange={handleInputChange} type="text" className="form-control input  w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                                                                        <div id="fundHelpBlock" className="form-text formtext text-danger">Only numbers or intergers allowed, please insert a vaild year</div>
                                                                    </div>
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label className="text-left p-2"> <i className="bi bi-calendar-fill"></i> Enter your founding year</label>
                                                                        <input onBlur={handleFocus1} focused={focused1.toString()} required pattern="^[0-9]*$" aria-describedby="yearlHelpBlock" name="founded_year" value={founded_year} onChange={handleInputChange1} type="text" className="form-control w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900  " />
                                                                        <div id="yearlHelpBlock" className="form-text  formtext text-danger">Only numbers or intergers allowed, please insert a vaild year</div>
                                                                    </div>
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label className="text-left p-2"><i className="bi bi-people"></i> How many actual customers do you have</label>
                                                                        <input onBlur={handleFocus8} focused={focused8.toString()} pattern="^[0-9]*$" aria-describedby="tagetHelpBlock" required ref={userRef} name="variable3" value={variable3} onChange={handleInputChange102} type="text" className="form-control input  w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                                                                        <div id="tagetHelpBlock" className="form-text formtext text-danger">Only numbers or intergers allowed, please insert a vaild number</div>
                                                                    </div>
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label className="text-left p-2"><i className="bi bi-receipt"></i>How many actual sales have you made?</label>
                                                                        <input onBlur={handleFocus9} focused={focused9.toString()} pattern="^[0-9]*$" aria-describedby="targetHelplock" required ref={userRef} name="variable4" value={variable4} onChange={handleInputChange103} type="text" className="form-control input  w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                                                                        <div id="targetHelplock" className="form-text formtext text-danger">Only numbers or intergers allowed, please insert a vaild number</div>
                                                                    </div>
                                                                </div>
                                                                {/* End of 1st Section Row1 */}
                                                                {/* Row3 */}
                                                                <div className="row">
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label htmlFor="" className="text-left p-2"><i className="bi bi-person-check-fill"></i> Select your category </label>
                                                                        <select onChange={handleInputChange2} value={category} required aria-describedby="HelpBlock" name="category_list" className="form-control  pt-1 w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 ">
                                                                            <option hidden className="text-primary">Select category ...</option>
                                                                            <option value="category_list_software" className="text-secondary">Software</option>
                                                                            <option value="category_list_biotechnology" className="text-secondary">Biotechnology</option>
                                                                            <option value="category_list_health care" className="text-secondary">Health care</option>
                                                                            <option value="category_list_manufacturing" className="text-secondary">Manufacturing</option>
                                                                            <option value="category_list_clean technology" className="text-secondary">Technology</option>
                                                                            <option value="category_list_e-commerce" className="text-secondary">E-commerce</option>
                                                                            <option value="category_list_enterprise software" className="text-secondary">Enterprise software</option>
                                                                            <option value="category_list_hardware + software" className="text-secondary">Hardware + Software</option>
                                                                            <option value="category_list_mobile" className="text-secondary">Moblie</option>
                                                                            <option value="category_list_semiconductors" className="text-secondary">Semiconductors</option>
                                                                            <option value="category_list_other" className="text-secondary">Other</option>                   
                                                                            {/* { category.map(items=><option key={items}>{items}</option>)} */}
                                                                        </select>
                                                                        {/* <div id="HelpBlock" class="form-text">{errors.role?.message}</div> */}
                                                                    </div>
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label className="text-left p-2"> <i className="bi bi-geo-alt"></i>Buiness Address/Location </label>
                                                                        <input onBlur={handleFocus4} focused={focused4.toString()} pattern="^[A-Za-z\s]{4,16}$" aria-describedby="addressHelpBlock" required ref={userRef} name="address" value={address} onChange={handleInputChange5} type="text" className="form-control input  w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                                                                        <div id="addressHelpBlock" className="form-text formtext text-danger">Address must be of a string 4-20 characters and must not include special characters(#$@&*%) and numbers.</div>
                                                                    </div>
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label className="text-left p-2"><i className="bi bi-bar-chart"></i> Has growth been linear and consistent?</label>
                                                                        <input onBlur={handleFocus10} focused={focused10.toString()} pattern="^[A-Za-z\s]{4,16}$" aria-describedby="targetelpBlock" required ref={userRef} name="variable5" value={variable5} onChange={handleInputChange104} type="text" className="form-control input  w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                                                                        <div id="targetelpBlock" className="form-text formtext text-danger">Growth must be of a string 4-20 characters and must not include special characters(#$@&*%) and numbers.</div>
                                                                    </div>
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label className="text-left p-2"><i className="bi bi-activity"></i> What percentage of the market share do you hope to get??</label>
                                                                        <input onBlur={handleFocus11} focused={focused11.toString()} pattern="^[0-9]*$" aria-describedby="targetHlpBlock" required ref={userRef} name="variable6" value={variable6} onChange={handleInputChange105} type="text" className="form-control input  w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                                                                        <div id="targetHlpBlock" className="form-text formtext text-danger">Only numbers or intergers allowed, please insert a vaild number</div>
                                                                    </div>
                                                                </div>
                                                                {/* End of row3 */}
                                                                <br />
                                                                {/* 5th Section Row4 */}

                                                                {/* Other Sections */}
                                                                <div className="row">
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label className="text-left p-2"><i className="bi bi-card-text"></i> More about your business/ Business Desciption </label>
                                                                        <textarea onBlur={handleFocus5} focused={focused5.toString()} pattern="^[A-Za-z\s]{4,16}$" aria-describedby="desciHelpBlock" required ref={userRef} name="desci" value={description} onChange={handleInputChange6} type="text" className="form-control input  w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                                                                        <div id="desciHelpBlock" className="form-text formtext text-danger">Desciption must be of string characters and must not include special characters(#$@&*%) and numbers.</div>
                                                                    </div>
                                                                </div>
                                                                {/* End  of Other Sections */}
                                                                <div className="row">
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <br />
                                                                        <button type="button" onClick={onSubmit} className="btn bg-primary login-with-google-btn btn-block form-control"><i className="bi bi-arrow-counterclockwise text-light"></i> Procces</button>
                                                                        <p className="pl-0 pt-4 text-xs font-medium text-blue-600">&ensp;</p>
                                                                    </div>
                                                                </div>
                                                                {/* End of 5th Section Row4*/}
                                                            </div>
                                                            {/* End of First Side */}

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="second" title="Business plan">
                                    <div className="container-">
                                        <div className="row">
                                            {/* Second Side */}
                                            <div style={{ borderRadius: "10px" }} className="col-sm col-md col-lg bg-light p-5 ">
                                                <div className="text-slate-900 font-bold text-2xl p-5">Upload your business plan</div>
                                                {isSuccess !== null ? <h4>{isSuccess}</h4> : null}
                                                <div className="form-group">
                                                    <input className="" type="file" name="avatar" onChange={handleInputChangeUpload} />
                                                </div>
                                                <div className="form-group p-4">
                                                    <button type="submit" className="btn btn-primary btn-block w-50" name="upload_file" onClick={() => Submit()}>Save</button>
                                                </div>

                                                <div className="form-group">
                                                    {userInfo.filepreview !== null ? <img className="img-fluid previewing" src={userInfo.filepreview} alt="Uploaded" /> : null}
                                                </div>
                                            </div>
                                            {/* End of Second Side */}
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="third" title="Feedbacks">
                                <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-sm col-md col-lg">
                                                <br />
                                                <div className="container">
                                                    <div className="row border-1 rounded-3">
                                                        <div className="col-sm col-md col-lg p-5 pt-4">
                                                            <h2 className="text-slate-900 text-left"><strong>Requests</strong></h2>
                                                            <div className="bg-slate-400 w-25 p-1 small"></div>
                                                            <br />
                                                          
                                                            {
                                                                converted.map((info, indexdata) => {
                                                                    return <div key={indexdata} id="toast-interactive" className="w-full max-w-xl p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 mb-2" role="alert">
                                                                        <div className="flex">
                                                                            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
                                                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>
                                                                            </div>
                                                                            <div className="ml-3 text-sm font-normal">
                                                                                <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">New Notifications from <i className="text-green-500 fw-normal">{info.emailmessage}</i></span>
                                                                                <div className="mb-2 text-xs font-normal">{info.mail}</div>
                                                                                <div className="grid grid-cols-2 gap-2">
                                                                                    <div>
                                                                                        <button onClick={onConfirm} className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Confirm</button>
                                                                                    </div>
                                                                                    <div>
                                                                                        <button className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Cancel</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-interactive" aria-label="Close">
                                                                                <span className="sr-only">Close</span>
                                                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                })
                                                            }
                                                        </div>
                                                        <div className="col-sm col-md col-lg bg-picture3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="forth" title="Investors">
                                    Hii, I am 4th tab content
                                </Tab>
                                <Tab eventKey="fifth" title="Settings">
                                    Hii, I am 5th tab content
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Tab */}
        </>
    );
};

export default Venturecapitalist;
