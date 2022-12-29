import React from "react";
import data from './data.json';
import Navbar from './components/Navbar.js';
import Card from './components/Card';

export default function App() {
  const tryout = data.map( item => 
      <Card 
        key={item.id}
        {...item}
      />
    );
  return(
    <>
      <Navbar />
      {/* SearchBar */}
      <div className="card__container">
        <section className="card__list">
          {tryout}
        </section>
      </div>
    </>
  )
}