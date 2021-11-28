import React, {useState} from "react";

interface IState{
    count:number;
}
interface IProps{}
let CounterExample:React.FC<IProps> =()=>{
    let[state,setState]=useState<IState>({
        count:0
    })
    let clickIncr=()=>{
        setState({
             count:state.count + 1
        })
    }
    let clickDecr=()=>{
        setState({
            count:state.count -1
        })
    }
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-success">
                                <h2 className="text-white">Counter</h2>
                            </div>
                            <div className="card-body bg-light">
                                <h5 className="display-2">{state.count}</h5>
                                <button onClick={clickIncr} className="btn btn-success btn-sm">Start</button>
                                <button onClick={clickDecr} className="btn btn-warning btn-sm">Stop</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
 export default CounterExample