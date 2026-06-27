import heroBanner from "../assets/images/hero-banner.jpg";
import "../styles/Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroBanner})`,
      }}
    >
      <div className="hero-content">

        <span className="tagline">🍔 India's Favorite Food Delivery</span>

        <h1>
          Delicious Food
          <br />
          Delivered To
          <br />
          Your Doorstep
        </h1>

        <p>
          Order from 1000+ restaurants with lightning-fast delivery and exciting offers.
        </p>

        <div className="location">
          📍 Delivering to <strong>Bangalore</strong>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Pizza, Burger, Biryani..."
          />
          <button>Search</button>
        </div>

        <div className="popular-tags">
          <span>🍕 Pizza</span>
          <span>🍔 Burger</span>
          <span>🍛 Biryani</span>
          <span>🥗 Salad</span>
        </div>

        <div className="hero-buttons">
          <button className="primary-btn">Order Now</button>
          <button className="secondary-btn">View Menu</button>
        </div>

      </div>
    </section>
  );
}

export default Hero;