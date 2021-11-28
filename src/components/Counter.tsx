/*
import React, {useState} from "react";
interface IEmployee {
    name:string;
    age:number;
    designation:string;
}

interface IProps{}
interface IState{
    employees:IEmployee[]
}

let Counter:React.FC<IProps> =()=>{
    let [state,setState]= useState<IState>({
        employees:[
            {
                name:'Srinivas',
                age:24,
                designation:"Software"
            },
            {
                name:"Haridwaj",
                age:26,
                designation:"Angular Developer"
            }

        ]
    })
    return(
        <React.Fragment>
            <h2>Basic Component</h2>
            <pre>{JSON.stringify(state.employees)}</pre>
        </React.Fragment>
    )
}
export default Counter;*/
import React, {useState} from "react";
interface IEmployee{
    name:string;
    age:number;
    address:string
}
interface IState{
    employees:IEmployee[]
}
interface IProps{}
let Counter:React.FC<IProps>=()=>{
    let [state,setState]=useState<IState>({
        employees:[
            {
                name:'Srinivas',
                age:25,
                address:'Warangal'
            },{
            name:'Haridwaj',
                age:36,
                address:"Hyderabad"

            }
        ]
    })
    return(
        <React.Fragment>
            <pre>{JSON.stringify(state.employees)}</pre>
        </React.Fragment>
    )
}
export default Counter;
