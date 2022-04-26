import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "bootstrap";
import './BusinessInvestors.css'

const BusinessInvestors = () =>{
    return(
        <div className="container-fluid p-5 bg-gray-60">
            <div className="row  p-5">
                <div className="col-sm col-md col-lg  text-slate-500">
                   <div className="card p-5 border-0 bg-gray-60 drop-shadow-2xl rounded-2xl">
                   <span className="text-left"><i className="bi bi-patch-check-fill text-green-500 "></i>Verified Investor</span>
                       <div className="card-body">
                       <h3 className="card-title text-slate-900 font-bold">Business Opportunity</h3>
                       <br/>
                           <p className="text-xs">Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada.</p>
                       </div>
                    <span className="d-flex justify-end"><a href="##" style={{textDecoration:"none"}} className="text-xs  rounded-sm bg-cyan-500 text-gray-50 p-2">Read more <i className="bi bi-arrow-right"></i></a></span>
                   </div>
                </div>
                <div className="col-sm col-md col-lg   text-slate-500">
                   <div className="card p-5 border-0  bg-gray-60 drop-shadow-2xl  rounded-2xl">
                   <span className="text-left"><i className="bi bi-patch-check-fill text-green-500 "></i>Verified Investor</span>
                       <div className="card-body">
                       <h3 className="card-title text-slate-900 font-bold">Business Opportunity</h3>
                       <br/>
                           <p className="text-xs">Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada.</p>
                       </div>
                       <span className="d-flex justify-end"><a href="##" style={{textDecoration:"none"}} className="text-xs  rounded-sm bg-cyan-500 text-gray-50 p-2">Read more <i className="bi bi-arrow-right"></i></a></span>
                   </div>
                </div>
                <div className="col-sm col-md col-lg   text-slate-500 ">
                   <div className="card p-5 border-0  bg-gray-60 drop-shadow-2xl  rounded-2xl">
                   <span className="text-left"><i className="bi bi-patch-check-fill text-green-500 "></i>Verified Investor</span>
                       <div className="card-body">
                       <h3 className="card-title text-slate-900 font-bold">Business Opportunity</h3>
                       <br/>
                           <p className="text-xs">Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada.</p>
                       </div>
                       <span className="d-flex justify-end"><a href="##" style={{textDecoration:"none"}} className="text-xs  rounded-sm bg-cyan-500 text-gray-50 p-2">Read more <i className="bi bi-arrow-right"></i></a></span>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default BusinessInvestors
