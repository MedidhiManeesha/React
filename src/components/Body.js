import JewelsCard from '../components/JewelsCard';
import {useState} from 'react';
import resList from '../utils/mockData';

const Body = () => {
let [listOfRestaurants, setListOfRestaurants] = useState(resList);
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
