import React, {useEffect, useState} from 'react';

function PopularCategories() {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/categories')
    .then(res => res.json())
    .then(data => setCategories(data));

    fetch('http://localhost:8000/recipes')
    .then(res => res.json())
    .then(data => setRecipes(data));
  }, []);

  return (
    <div className='popular-categories'>
      <h2>Popular Categories</h2>
      <div className='category-container'>
      {categories.map((category) => (
      <div key={category.id} className='category-section'>
        <h3>{category.name}</h3>
        <ul className='recipe-list'>
          {recipes
          .filter(recipe => recipe.category === category.name)
          .map(recipe => (
            <li key={recipe.id} className='recipe-item'>
              <img className='recipe-image' src={recipe.image} alt={recipe.title} />
              <p>{recipe.title}</p>
            </li>
          ))}
        </ul>
      </div>
      ))}
      </div>
    </div>
  )
}

export default PopularCategories;