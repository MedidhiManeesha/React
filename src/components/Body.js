import JewelsCard from '../components/JewelsCard';
import {useEffect, useState} from 'react';
import resList from '../utils/mockData';

const Body = () => {
let [listOfRestaurants, setListOfRestaurants] = useState(resList);

useEffect(()=>{
    fetchData();
},[]);

const fetchData = async () =>{
    const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(json);
}

return (
    <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                const filteredItems = listOfRestaurants.filter((res)=> res.info.avgRating >= 4.5)
                setListOfRestaurants(filteredItems)
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="jewel-container">
            {listOfRestaurants.map((restaurant) => (
            <JewelsCard key={restaurant.info.id} resData={restaurant}/>
            ))}
            </div>
    </div>
    );
};

export default Body
