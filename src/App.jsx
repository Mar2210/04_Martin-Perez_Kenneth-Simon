import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import RecipeList from "./RecipeList";
import api from "./Api";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken")
      .then((response) => {
        setRecipes(response.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} />} />
        <Route path="/Detalles/:idMeal" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
