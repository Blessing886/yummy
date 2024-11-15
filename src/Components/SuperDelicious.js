import React, { useEffect, useState } from 'react'

function SuperDelicious() {
    const [superDel, setSuperDel] = useState([])

    useEffect(() => {
        fetch('https://yummy-app-back-end.onrender.com/recipes')
        .then(res => res.json())
        .then(data => {
            setSuperDel(data.slice(0, 3));
        })
    }, []);
  return (
    <div className='super-delicious'>
        <h2>Super Delicious</h2>
        <div className='super-del-container'>{superDel.map((dish) => (
          <div key={dish.id} className='dish-card'>
            <img className='dish-image' src={dish.image} alt={dish.title} />
            <h3>{dish.title}</h3>
            <p>{dish.category}</p>
          </div>
        ))}
        </div>
        
    </div>
  )
}

export default SuperDelicious