import CDN_URL from '../../src/utils/constants'


const styleCard = {
    backgroundColor: "#f0f0f0",
}

const JewelsCard = (props) =>{
    const {resData} = props;
    const {name, cloudinaryImageId, cuisines, avgRating, costForTwo} = resData.info;
    return (
        <div className="jewel-card " style={styleCard}>
            <img className="gold-card"
            src={CDN_URL+cloudinaryImageId}
            alt="bangle" />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
    );
};

export default JewelsCard