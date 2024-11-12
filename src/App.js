import React from "react";
import Navbar from "./Components/Navbar";
import SearchDish from "./Components/SearchDish";
import Pages from "./Pages/Pages";


function App() {
  return (
    <div className='App'>
      <Navbar />
      <SearchDish />
      <Pages />
    </div>
  );
}

export default App;
