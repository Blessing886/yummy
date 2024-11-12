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
        
    </div>
  )
}

export default SuperDelicious