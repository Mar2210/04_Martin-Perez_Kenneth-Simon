import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./Api";
import'./index.css';

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const { idMeal } = useParams();

  useEffect(() => {
    api.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => {
        setRecipe(response.data.meals[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idMeal]);

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
      <p>{recipe.strIngredient}</p>

    </div>
  );
};

export default RecipeDetails;
