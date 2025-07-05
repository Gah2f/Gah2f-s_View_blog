import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedArticles from "./components/FeaturedArticles";
import LatestArticles from "./components/LatestArticles";
import Proflie from "./components/Proflie";
import Topics from "./components/Topics";
import Populartages from "./components/Populartages";
import Subscribe from "./components/Subscribe";
import RecentPost from "./components/RecentPost";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 md:pr-8">
          <Hero />
          <Categories />
          <FeaturedArticles />
          <LatestArticles />
        </div>

        <div className="w-full md:w-1/4 mt-8 md:mt-0">
          <Proflie />
          <Topics/>
          <Populartages/>
          <Subscribe/>
          <RecentPost/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
