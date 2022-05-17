import React, { useEffect, useState, useRef } from "react";
import "../Fonts/Font.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './pages.css'
import { Tabs, Tab } from "react-bootstrap";
// import axios from "axios";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />;

const Entreprenuer = () => {


    //  users variables declared for storing input from form 
    const [categoryValue, setCategory] = useState("");
    const [totalFund, setFund] = useState("");
    const [foundingYear, setYear] = useState("");

    // Getting user inputs from form field
    const handleInputChange = (event) => {
        setCategory(event.target.value);
    };
    const handleInputChange1 = (event) => {
        setFund(event.target.value);
    };
    const handleInputChange2 = (event) => {
        setYear(event.target.value);
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
    // const [focused2, setFocused2] = useState(false)

    const handleFocus = (e) => {
        setFocused(true)
    }
    const handleFocus1 = (e) => {
        setFocused1(true)
    }
    // const handleFocus2 = (e) => {
    //     setFocused2(true)
    // }

    // Submitting the values to the server
    // const onSubmit = () => {
    //     axios.post("http://localhost:4000/addInvestors", {
    //         inputUserName: stateValue,
    //         inputInvestorsEmail: investEmail,
    //         inputInvestorsAddress: investAddress,
    //         inputInvestorsPhone: investPhone,
    //         inputInvestorsCompany: investCompany,
    //         inputInvestorsPassword: investPassword,
    //         inputRole: role,
    //     }).then((response) => {
    //         console.log(response);
    //     });
    // };

    return (
        <>
            {/* Top Header */}
            <div className="bg-image ">
                <div className="container-fluid">
                    <div className="row bg-picture">
                        <div className="col-sm col-md col-lg bg-image  p-5 text-light">
                            <br />
                            <br />
                            <h1 style={{ fontWeight: "bolder" }} className="display-5">The Leading Business</h1>
                            <p className="p-2 text-xs text-gray-100  text-center"> Sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.</p>
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
                            <Tabs className="myClass bg-light rouded-0 border-0" defaultActiveKey="second">
                                <Tab eventKey="first" title="Make Proposals">
                                    <div className="container-fluid">
                                        <div className="row bg-white p-5 pt-0">
                                            <div className="col-sm col-md col-lg">&ensp;</div>
                                            <div className="col-sm col-md col-lg-8 rounded-md mt-5 p-5 border-1 text-slate-500">
                                                <div className="text-xs p-1">
                                                    <strong className="mt-6 text-center text-3xl font-extrabold text-gray-900">Business Proposal</strong>
                                                    <p className="mt-2 text-center text-xs text-gray-600"> And{' '}
                                                        <span style={{ textDecoration: 'none !important' }} className="font-medium text-primary hover:text-green-500"> be part of the world leaders in business</span>
                                                    </p>
                                                </div>
                                                <br /> {/* <p>{stateValue}</p> */}
                                                <form >
                                                    {/* 1st Section Row1 */}
                                                    <div className="row">
                                                        <div className="col-sm col-md col-lg text-left">
                                                            <label className="text-left p-2"> <i className="bi bi-telephone-fill"></i> Enter Business Total Funding </label>
                                                            <input onBlur={handleFocus} focused={focused.toString()} pattern="^[0-9]*$" required aria-describedby="phoneHelpBlock" name="phone" value={totalFund} onChange={handleInputChange} type="text" className="form-control w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900  " />
                                                            <div id="phoneHelpBlock" className="form-text  formtext text-danger">Only numbers or intergers allowed, please insert a vaild year</div>
                                                        </div>
                                                        <div className="col-sm col-md col-lg text-left">
                                                            <label className="text-left p-2"> <i className="bi bi-telephone-fill"></i> Enter Business Founding Year </label>
                                                            <input onBlur={handleFocus1} focused={focused1.toString()} pattern="^[0-9]*$" required aria-describedby="phoneHelpBlock" name="phone" value={foundingYear} onChange={handleInputChange1} type="text" className="form-control w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900  " />
                                                            <div id="phoneHelpBlock" className="form-text  formtext text-danger">Only numbers or intergers allowed, please insert a vaild year</div>
                                                        </div>
                                                        <div className="col-sm col-md col-lg text-left">
                                                            <label htmlFor="" className="text-left p-2"><i className="bi bi-person-check-fill"></i> Select your category </label>
                                                            <select required aria-describedby="HelpBlock" name="role" onChange={handleInputChange2} className="form-control  pt-1 w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 ">
                                                                <option hidden className="text-primary">Select category ...</option>
                                                                <option value={categoryValue}>Investor</option>
                                                                <option value="Entreprenuer">Entreprenuer</option>
                                                            </select>
                                                            {/* <div id="HelpBlock" class="form-text">{errors.role?.message}</div> */}
                                                        </div>
                                                    </div>
                                                    {/* End of 1st Section Row1 */}

                                                    {/* End of 4th Section Row4*/}
                                                    <br /> {/* 5th Section Row4 */}
                                                    <div className="row">
                                                        <div className="col-sm col-md col-lg text-left">
                                                            <br />
                                                            {/* onClick={onSubmit}  */}
                                                            <button type="submit" className="btn bg-primary login-with-google-btn btn-block form-control"> <i className="bi bi-arrow-right-circle-fill text-light"></i> Sign Up </button>
                                                            <p className="pl-0 pt-4 text-xs font-medium text-blue-600"> Already a member, please sign in here.</p>
                                                        </div>
                                                    </div>
                                                    {/* End of 5th Section Row4*/}
                                                </form>
                                            </div>
                                            <div className="col-sm col-md col-lg">&ensp;</div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="second" title="Proposals">
                                    Hii, I am 2nd tab content
                                </Tab>
                                <Tab eventKey="third" title="Feedbacks">
                                    Hii, I am 3rd tab content
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

export default Entreprenuer;
