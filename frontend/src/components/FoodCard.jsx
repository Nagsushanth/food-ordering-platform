import "../styles/FoodCard.css";

import pizza from "../assets/images/pizza.jpg";

function FoodCard({ foods }) {
  return (
    <section className="foods">
      <h2>Popular Foods</h2>

      <div className="food-grid">
        {foods.map((food) => (
          <div className="food-card" key={food.id}>
            <img
              src={pizza}
              alt={food.name}
            />

            <div className="food-info">
              <h3>{food.name}</h3>

              <p>{food.description}</p>

              <h4>₹{food.price}</h4>

              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FoodCard;