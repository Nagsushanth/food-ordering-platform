import { useEffect, useState } from "react";
import api from "../api/api";
import FoodCard from "../components/FoodCard";

function Menu() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    api
      .get("/api/menu")
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <FoodCard foods={foods} />
    </div>
  );
}

export default Menu;