import React, { useEffect, useState } from 'react'

function SuperDelicious() {
    const [superDel, setSuperDel] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/recipes')
        .then(res => res.json())
        .then(data => {
            setSuperDel(data.slice(0, 3));
        })
    }, []);
  return (
    <div>
        <h2>Super Delicious</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
            {superDel.map((dish) => (
                <div key={dish.id} style={{ border: '1px solid #ccc', padding: '10px', width: '150px' }}>
                    <img src={dish.image} alt={dish.title} style={{ width: '100%', height: 'auto' }} />
                    <h3>{}dish.title</h3>
                    <p>dish.category</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SuperDelicious