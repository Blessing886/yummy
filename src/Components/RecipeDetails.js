import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/recipes/${id}`)
        .then((res) => res.json())
        .then((data) => setRecipe(data));
    }, [id]);
    if (!recipe) {
        return <p>Loading...</p>
    }

  return (
    <div className='recipe-details'>
        <h2>{recipe.title}</h2>
        <img className='recipe-image' src={recipe.image} alt={recipe.title} />
        <p><strong>Category:</strong> {recipe.category}</p>
        <p><strong>Ingredients:</strong></p>
        <ul>
            {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
        <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  )
}

export default RecipeDetails