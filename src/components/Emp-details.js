import data from "./data";
import {useParams} from "react-router-dom";

function Empdetails() {

    const params= useParams();
    return (
         <>
        <div className="container">
            <h1 className="text-centre m-3">Employee Details</h1>
                <h1>ur id : {params.id}</h1>
            
            </div>
    </> );
}

export default Empdetails;