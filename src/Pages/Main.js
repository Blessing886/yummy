import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import SearchDish from '../Components/SearchDish';
import RecipeDetails from '../Components/RecipeDetails';
import SuperDelicious from '../Components/SuperDelicious';
import PopularCategory from '../Components/PopularCategories';

function Main() {

  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<SearchDish />} />
            <Route path='/recipe/:id' element={<RecipeDetails />} />
            <Route path='/super-delicious' element={<SuperDelicious />} />
            <Route path='/popular-categories' element={<PopularCategory />} />
        </Routes>
    </div>
  )
}

export default Main;