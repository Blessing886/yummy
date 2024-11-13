import React, { useEffect, useState } from 'react'

function SearchDish() {
  const [searchMeal, setSearchMeal] = useState('');
  const [recipes, setRecipe] = useState([]);

  const filterRecipes = recipes
  .filter((recipe) => recipe.title.toLowerCase().includes(searchMeal.toLowerCase()));

  useEffect(() => {
    fetch("http://localhost:8000/recipes")
    .then((res) => res.json())
    .then((data) => setRecipe(data))
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
          <article className='recipe-item' key={recipe.id}>
           <img className='recipe-image' src={recipe.image} alt={recipe.title} />
           <h3>{recipe.title}</h3>
           <p>{recipe.category}</p>
          </article>
        ))) : (<p>No recipes found</p>
        ))}
      </div>
  )
}

export default SearchDish