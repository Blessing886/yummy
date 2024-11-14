import React from "react";
import Main from "./Pages/Main";


function App() {
  return (
    <div className='App'>
      <Main />
      <div>
        <p className="main-content">Unleash Your Inner Chef</p>
        <div className="main-image">
        <img src="https://media.istockphoto.com/id/1996314747/photo/woman-smelling-food-cooking-in-a-pot-on-her-kitchen-stove.webp?a=1&b=1&s=612x612&w=0&k=20&c=R8gkqEreyZH4YPuZfNxIPhm8kJwKGzP1ls7COcCTySs="
        alt="lady cooking" className="image-item" />
        <img src="https://plus.unsplash.com/premium_photo-1728412897938-d70e9c5becd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlY2lwZXN8ZW58MHx8MHx8fDA%3D"
        alt="prep" className="image-item" />
        </div>
      </div>
    </div>
  );
}

export default App;
