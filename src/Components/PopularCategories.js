import React, {useEffect, useState} from 'react'

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
    <div>
      <h2>Popular Categories</h2>
      {categories.map((category) => (
      <div key={category.id}>
        <h3>{category.name}</h3>
        <ul>
          {recipes
          .filter(recipe => recipe.category === category.name)
          .map(recipe => (
            <li key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} style={{ width: '100px', height: '100px' }} />
              <p>{recipe.title}</p>
            </li>
          ))}
        </ul>
      </div>
      ))}
    </div>
  )
}

export default PopularCategories;