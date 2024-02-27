import React from "react";
import ReactDOM from "react-dom/client";
import logo from './img/logo.png';
const Header = () =>{
    return(
        <div className="header">

            <div className="logo-container">
                <img className="logo" src={logo} alt="" />
            </div> 

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const AppLayout =  () => {
    return (
        <div className="app">
            <div className="header">
                <Header />
            </div>
            
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)







