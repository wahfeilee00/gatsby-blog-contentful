import * as React from "react";
import { Layout } from "../components/Layout";
// import Images from "../examples/Images";
import { StaticImage } from "gatsby-plugin-image";
// import FetchData from "../examples/fetchData";
import AllRecipes from "../components/AllRecipes";

const Home = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/big.jpg"
            alt="food"
            placeholder="tracedSVG"
            layout="fullWidth"
            as="div"
          />
          <div className="hero-container">
            <h1>No Fluff</h1>
          </div>
        </header>
        {/* <FetchData /> */}
      </main>
      <AllRecipes />
    </Layout>
  );
};

export default Home;
