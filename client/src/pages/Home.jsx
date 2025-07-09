import React from "react";
import Nav from "../components/Nav.jsx";
import Hero from '../components/Hero.jsx'
import Categories from '../components/Categories.jsx'
import FeaturedArticles from '../components/FeaturedArticles.jsx'
import LatestArticles from '../components/LatestArticles.jsx'
import Proflie from '../components/Proflie.jsx'
import Topics from '../components/Topics.jsx'
import Populartages from '../components/Populartages.jsx'
import Subscribe from '../components/Subscribe.jsx'
import RecentPost from '../components/RecentPost.jsx'
import Footer from '../components/Footer.jsx'


function Home() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 md:pr-8">
          <Hero />
          <Categories/>
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

export default Home;
