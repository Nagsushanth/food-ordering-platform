import "../styles/Categories.css";

function Categories() {
  return (
    <section className="categories">

      <h2>Popular Categories</h2>

      <div className="category-container">

        <div className="category-card">🍕 Pizza</div>

        <div className="category-card">🍔 Burger</div>

        <div className="category-card">🍗 Chicken</div>

        <div className="category-card">🍜 Chinese</div>

        <div className="category-card">🥗 Healthy</div>

        <div className="category-card">🍰 Desserts</div>

      </div>

    </section>
  );
}

export default Categories;