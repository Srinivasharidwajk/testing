import React from 'react';
import './App.css';
import Example1 from "./components/Example1";
import BasicSetup from "./components/BasicSetup";
import Counter from "./components/Counter";
import CounterExample from "./components/CounterExample";
import WishMessage from "./components/WishMessage";
import Product from "./components/HooksEventsAndFormBinding/Product";

/*function App() {
  return (
      <React.Fragment>
        <nav className="navbar navbar-dark navbar-expand-md bg-dark">
            <a href="" className="navbar-brand text-white px-3">React Hooks</a>
        </nav>
          <Example1/>
          <BasicSetup/>
      </React.Fragment>
  );
}*/
interface IProps{}
interface IState{}
let App:React.FC<IProps>=()=>{
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
                <a href="/" className="navbar-brand p-3">React Hooks</a>
            </nav>
            <Product/>
        </React.Fragment>
    )
}

export default App;

