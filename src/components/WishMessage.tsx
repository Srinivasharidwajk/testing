import React, {useState} from "react";
interface IProps{}
interface IState{
    message:string
}

let WishMessage:React.FC<IProps>=()=>{
    let[state,setState]=useState({
        message:"Hello"
    })
let goodMorning=()=>{
       setState({
           message: "GoodMorning"
       })
}
let goodAfternoon=(value:string)=>{
        setState({
            message: value
        })
}
let goodMorningAs=(value:string)=>{
        setState({
            message: value
        })
}

    return(
        <React.Fragment>
           <div className="container">
               <div className="row">
                   <div className="col">
                       <div className="card">
                           <div className="card-header bg-success text-white">
                               <h4>Wish Message</h4>
                           </div>
                           <div className="card-body bg-light">
                               <h3 className="display-2">{state.message}</h3>
                               <div>
                   {/*                <button onClick={goodMorning} className="btn btn-success btn-sm">GoodMorning</button>
                                   <button onClick={()=>{goodAfternoon('GoodAfternoon')}} className="btn btn-warning btn-sm">GoodAfterNoon</button>
                                   <button onClick={()=>{setState((state)=>({message:'GoodNight' }))}} className="btn btn-danger btn-sm">GoodEvening</button>
                 */}
                               <button onClick={goodMorning}>GoodMorning</button>
                               <button onClick={()=>{goodAfternoon('GoodAfterNoon')}}>GoodAfterNoon</button>
                                   <button onClick={()=>{setState((state)=>({message: 'GOOdDay'}))}}>GoodDay</button>
                               <button onClick={()=>{setState((state)=>({message: 'GoodNight'}))}}>GoodEvening</button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </React.Fragment>
    )
}
export default WishMessage;