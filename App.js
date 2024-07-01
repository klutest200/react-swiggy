import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";

const Main = ()=>{
    return (
        <>
        <Navbar/>
        <CardContainer/>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>)