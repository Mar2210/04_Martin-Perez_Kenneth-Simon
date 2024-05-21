import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h1>Recetas</h1>
      <ul>
        {recipes.map((recipe, idMeal) => (
          <li key={idMeal}>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <Link to={`/Detalles/${recipe.idMeal}`}>Detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
