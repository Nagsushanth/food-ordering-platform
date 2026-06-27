import "../styles/Navbar.css";

import { Link } from "react-router-dom";

import {
  FaShoppingCart,
  FaUserCircle,
  FaSearch
} from "react-icons/fa";

function Navbar() {

  return (

<nav className="navbar">

<div className="logo">

🍔 FoodHub

</div>

<ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/menu">Menu</Link></li>
  <li><Link to="/restaurants">Restaurants</Link></li>
  <li><Link to="/offers">Offers</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>



<div className="nav-icons">

<FaSearch className="icon"/>

<div className="cart">

<FaShoppingCart className="icon"/>

<span>2</span>

</div>

<button>

<FaUserCircle/>

Login

</button>

</div>

</nav>

  );

}

export default Navbar;