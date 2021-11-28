import React from "react";
interface IProps{
    name:string;
    age:number;
}


let Example1:React.FC <IProps> = ({name,age}) => {
    return(
        <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <h2>Hello Srinivas</h2>
                                </div>
                                <div className="card-body bg-light">
                                  <h2>Hello{name}{age}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
export default Example1;