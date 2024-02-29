import React from "react";
import ReactDOM from "react-dom/client";
import logo from './img/logo.png';
const Header = () =>{
    return(
        <div className="header"> 
            <div className="logo-container">
                <img 
                className="logo" src={logo}
                />
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
        
    );
};

const styleCard = {
    backgroundColor: "#f0f0f0",
}

const JewelsCard = ({orName, price}) =>{
    return (
        <div className="jewel-card " style={styleCard}>
            <img className="gold-card"
            src="https://t3.ftcdn.net/jpg/05/25/54/06/240_F_525540629_QxKds12GbTjsbqv3WeMQTstCvpvgy6MC.jpg" 
            alt="bangle" />
                <h3>{orName}</h3>
                <h4>{price}</h4>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    );
};
const Body = () => {
    return (
    <div className="body">
            <div className="search">Search</div>
            <div className="jewel-container">
                <JewelsCard orName="Bangles" price="4000"/>
                <JewelsCard orName="earrings"/>
            </div>
    </div>
    );
};
const AppLayout =  () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)









