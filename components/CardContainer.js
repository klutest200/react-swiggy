import RestaurantCard from "./RestaurantCard"
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";



const CardContainer = ()=>{
    //local state variable 
    //hooks - useState()
    let [restaurants,setRestaurants] = useState([]);

    console.log("component rendered")

    async function fetchRestaurants(){
        let response = await fetch('URL');
        let jsonData = await response.json();
        setRestaurants();
    }   

    useEffect(()=>{
        setTimeout(()=>{
            fetchRestaurants();
        },2000)
       
    },[]);
    if(restaurants.length===0){
        return <Shimmer/>
    }
    return (
        <div>
            <div id="filter">
            <button id="btn" className="btn" onClick={()=>{
                setRestaurants(restaurants.filter(obj=>obj.info.avgRating>4.5))
            }}>Filter</button>
            
        </div>
        <div id="card-container">
            {restaurants.map((obj)=>{
                return <RestaurantCard key={obj.info.id}  {...obj.info}/>
            })}
            
        </div>
        </div>
    )
}
export default CardContainer;
