import JewelsCard from '../components/JewelsCard';
import resList from '../utils/mockData';

const Body = () => {
    return (
    <div className="body">
            <div className="search">Search</div>
            <div className="jewel-container">
            {resList.map((restaurant) => (
            <JewelsCard resData={restaurant}/>
            ))}
            </div>
    </div>
    );
};

export default Body
