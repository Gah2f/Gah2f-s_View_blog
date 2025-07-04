import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Categories from "./components/Categories";

function App() {
  return (
    <div>
      <Nav />
      <div className="w-full md:w-3/4 md:pr-8">
        <Hero />
        <Categories/>
      </div>
    </div>
  );
}

export default App;
