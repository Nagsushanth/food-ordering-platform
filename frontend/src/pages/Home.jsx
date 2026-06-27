import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FoodCard from "../components/FoodCard";
import Restaurants from "../components/Restaurants";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Restaurants />
      <Features />
      <Footer />
    </>
  );
}

export default Home;