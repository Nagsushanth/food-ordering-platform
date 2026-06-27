import "../styles/Features.css";

function Features() {

const features = [

{
icon:"🚚",
title:"Fast Delivery",
desc:"Get your food delivered in under 30 minutes."
},

{
icon:"🍔",
title:"1000+ Restaurants",
desc:"Choose from thousands of restaurants near you."
},

{
icon:"💳",
title:"Secure Payments",
desc:"Safe and secure online transactions."
},

{
icon:"🎁",
title:"Daily Offers",
desc:"Exclusive discounts and cashback every day."
}

];

return(

<section className="features">

<h2>Why Choose FoodHub?</h2>

<div className="feature-grid">

{features.map((item,index)=>(

<div className="feature-card" key={index}>

<h1>{item.icon}</h1>

<h3>{item.title}</h3>

<p>{item.desc}</p>

</div>

))}

</div>

</section>

);

}

export default Features;