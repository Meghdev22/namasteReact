import React from 'react';
import ReactDOM from 'react-dom/client';

// Component we will have:
// Header - logo, navItems
// Body - cards, searchBar, RestaurantContainer, RestaurantCards= img/ Name of Restaurants/ starRatings/ cuisine/ DeliveryTime
// Footer - Copyright, Links, Address, Contact


const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" />    
            </div> 
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const styleCard = {
    backgroundColor: "#f0f0f0",
}
const RestaurantCard = (props) => {
    const {resName, cuisine} = props;
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b4817ea5bb972089f419c6f14e5a0bdd" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.3 Stars</h4>
            <h4>50 - 55 minutes</h4>
        </div>
    )
};

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Food" cuisine="Asian, Tibetan, Chinese"/>
                <RestaurantCard resName="KFC" cuisine="Asian, Tibetan, Chinese"/>
            </div>
        </div>
    )
};

const Footer = () => {
    return(
        <div className="footer">
            <h5>This is footer</h5>
        </div>
    )
};

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
};

// JSX - HTML like or XML like syntax
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);