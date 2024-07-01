import { BASE_URL } from "../utils/config";

const RestaurantCard = ({
    name,
    cloudinaryImageId,
    areaName,
    cuisines,
    avgRating
})=>{
    return <div className="card">
        <div className="image">
            <img width="200" src={BASE_URL+cloudinaryImageId}/>
        </div>
        <div className="details">
            <p className="title">{name}</p>
            <p className="rating">{avgRating}</p>
            <p className="cuisines">{cuisines.join(",")}</p>
            <p className="loc">{areaName}</p>
        </div>
    </div>
}
export default RestaurantCard;