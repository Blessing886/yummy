import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SearchDish() {
  const [searchMeal, setSearchMeal] = useState('');
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const filterRecipes = recipes
  .filter((recipe) => recipe.title.toLowerCase().includes(searchMeal.toLowerCase()));

  const handleRecipeClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`);
  }

  useEffect(() => {
    fetch("http://localhost:8000/recipes")
    .then((res) => res.json())
    .then((data) => setRecipes(data));
  }, []);

  return (
    <div className='search-input'>
      <input
       //id='searchInput'
       type='text'
       value={searchMeal}
       placeholder='search here...'
       onChange={(e) => setSearchMeal(e.target.value)}
      />
      <button>Search</button>
      
      {searchMeal && (filterRecipes.length > 0 ? (
        filterRecipes.map((recipe) => (
          <article className='recipe-item' key={recipe.id} onClick={() => handleRecipeClick(recipe)}>
           <img className='recipe-image' src={recipe.image} alt={recipe.title} />
           <h3>{recipe.title}</h3>
           <p>{recipe.category}</p>
          </article>
        ))
      ) : (<p>No recipes found</p>
        ))}
      </div>
  )
}

export default SearchDish