import { Link } from "react-router-dom";
import data from "./data";
import Empdetails from "./Emp-details";


function AllEmp() {
    return ( 
    <>
   <div className="container">
            <h1 className="text-centre m-3">All Employees</h1>
            <div className="row">
                {data.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card m-2" style={{width:300}}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <img src={item.image} className="card-img-top" alt="..."  style={{height: 41,width: 51}} />
                                <a  className="btn btn-primary m-3" href={<Empdetails/>}
                                        style={{width:74,height:38,right: -133,top: 24,position:"relative"}}> Details</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>)}

export default AllEmp;