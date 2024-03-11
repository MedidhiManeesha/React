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

const resObj = {
    "info": {
      "id": "185544",
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
      "locality": "Khairatabad",
      "areaName": "Banjara Hills",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "6249",
      "avgRatingString": "4.6",
      "totalRatingsString": "5K+",
      "promoted": true,
      "adTrackingId": "cid=11858919~p=1~eid=0000018e-2e76-6c2e-08ba-eee40031010b~srvts=1710176496686~45995",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 6.1,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "6.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-12 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "shortDescription": "brand",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x"
                }
              }
            ]
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=185544",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  }

const Body = () => {
    return (
    <div className="body">
            <div className="search">Search</div>
            <div className="jewel-container">
                <JewelsCard orName="Bangles" price="4000"/>
                <JewelsCard orName="earrings" price="5000"/>
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









