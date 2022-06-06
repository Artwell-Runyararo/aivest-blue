import React, { useEffect, useState, useRef } from "react";
import "../Fonts/Font.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './pages.css'
import { Tabs, Tab } from "react-bootstrap";
import axios from "axios";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />;

const Entreprenuer = () => {
    //  users variables declared for storing input from form 
    const [total_funding, setState] = useState("");
    const [founded_year, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [predictMessge, setPredict] = useState("");
    const [company, setCompany] = useState("");
    const [targetMarket, setTargetMarket] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");

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
    const Submit = async () => {
        const formdata = new FormData();
        formdata.append('avatar', userInfo.file);

        axios.post("http://localhost:4000/imageupload", formdata, {
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => {
            console.warn(res);
            if (res.data.success === 1) {
                setSuccess("Image upload successfully")
            }
        })
    }


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
                                                                            {/* { category.map(items=><option key={items}>{items}</option>)} */}
                                                                        </select>
                                                                        {/* <div id="HelpBlock" class="form-text">{errors.role?.message}</div> */}
                                                                    </div>
                                                                    <div className="col-sm col-md col-lg text-left">
                                                                        <label className="text-left p-2"> <i className="bi bi-geo-alt"></i>Buiness Address/Location </label>
                                                                        <input onBlur={handleFocus4} focused={focused4.toString()} pattern="^[A-Za-z\s]{4,16}$" aria-describedby="addressHelpBlock" required ref={userRef} name="address" value={address} onChange={handleInputChange5} type="text" className="form-control input  w-full text-sm leading-6  rounded-md py-2 pl-10  bg-slate-900 " />
                                                                        <div id="addressHelpBlock" className="form-text formtext text-danger">Address must be of a string 4-20 characters and must not include special characters(#$@&*%) and numbers.</div>
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
                                                            {/* Second Side */}
                                                            <div className="col-sm col-md col-lg">
                                                                {isSuccess !== null ? <h4>{isSuccess}</h4> : null}
                                                                <div className="form-group">
                                                                    <input type="file" name="avatar" onChange={handleInputChangeUpload} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <button type="submit" className="btn btn-dark" name="upload_file" onClick={() => Submit()}>Save</button>
                                                                </div>

                                                                <div className="form-group">
                                                                 {userInfo.filepreview !== null ? <img className="img-fluid previewing" src={userInfo.filepreview} alt="UploadImage" /> : null}
                                                                </div>
                                                            </div>
                                                            {/* End of Second Side */}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
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
