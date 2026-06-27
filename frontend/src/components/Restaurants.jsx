import "../styles/Restaurants.css";

function Restaurants() {

const restaurants = [

{
id:1,
name:"Domino's Pizza",
rating:"⭐ 4.8",
time:"25 mins",
cuisine:"Pizza • Italian"
},

{
id:2,
name:"Burger King",
rating:"⭐ 4.6",
time:"20 mins",
cuisine:"Burger • Fast Food"
},

{
id:3,
name:"Paradise Biryani",
rating:"⭐ 4.9",
time:"35 mins",
cuisine:"Biryani • Indian"
}

];

return(

<section className="restaurants">

<h2>Featured Restaurants</h2>

<div className="restaurant-grid">

{restaurants.map((restaurant)=>(

<div className="restaurant-card" key={restaurant.id}>

<h3>{restaurant.name}</h3>

<p>{restaurant.rating}</p>

<p>{restaurant.time}</p>

<span>{restaurant.cuisine}</span>

</div>

))}

</div>

</section>

);

}

export default Restaurants;