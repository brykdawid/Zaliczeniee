import React from 'react';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <img src={recipe.image} alt={recipe.label} />
    <h2>{recipe.label}</h2>
    <p>{recipe.source}</p>
    <a href={recipe.url} target="_blank" rel="noopener noreferrer">
      Przejdź do przepisu
    </a>
  </div>
);

export default RecipeCard;
