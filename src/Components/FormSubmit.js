import React, { useState } from 'react'

function FormSubmit() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = {
            title, image, category,
            ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
            instructions,
        };

        fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecipe),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('Recipe added:', data);
            setTitle('')
            setImage('')
            setCategory('')
            setIngredients('')
            setInstructions('')
        })
      
    };

  return (
    <div className='submit-container'>
        <h2>Submit a Recipe</h2>
        <form onSubmit={handleSubmit}>
          <label> Title
            <input
            type='text'
            value={title}
            placeholder='Enter recipe'
            onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label> Image URL
            <input
            type='text'
            value={image}
            placeholder='Enter image URL'
            onChange={(e) => setImage(e.target.value)} />
          </label>
          <label> Category
            <input
            type='text'
            value={category}
            placeholder='Enter category'
            onChange={(e) => setCategory(e.target.value)} />
          </label>
          <label> Ingredients
            <input
            type='text'
            value={ingredients}
            placeholder='Enter ingredients'
            onChange={(e) => setIngredients(e.target.value)} />
          </label>
          <label> Instructions
            <input
            type='text'
            value={instructions}
            placeholder='Enter instructions'
            onChange={(e) => setInstructions(e.target.value)} />
          </label>
          <button type='submit'>Submit Recipe</button>
        </form>
    </div>
  )
}

export default FormSubmit