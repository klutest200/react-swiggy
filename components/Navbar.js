import { useState } from "react";

const Navbar = ()=>{

    let [btnName,setBtnName] = useState("Login");
    console.log("NAVBAR RENDERED")
    return <nav id="navbar">
    <div id="logo">
        <img width="60" src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png"/>
    </div>
    <ul id="links">
        <li>Home</li>
        <li>Offers</li>
        <li>Search <i className="fa-solid fa-magnifying-glass"></i></li>
        <li>Cart</li>
        <button onClick={()=>{
            btnName = btnName==="Login"?"Logout":"Login";
            setBtnName(btnName)
            console.log(btnName)
        }}
        className={btnName=="Login"?"btn online":"btn offline"}
        >{btnName}</button>
    </ul>
    </nav>
}

export default Navbar;


// virtual DOM - representation of Actual DOM - object
// Reconciliation process( React Fiber)