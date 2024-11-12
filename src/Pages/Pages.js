import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import PopularCategories from '../Components/PopularCategories'
import SuperDelicious from '../Components/SuperDelicious'

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/popular-categories' element={<PopularCategories />} />
        <Route path='/super-delicious' element={<SuperDelicious/>} />
      </Routes>
  )
}

export default Pages