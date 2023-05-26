import React from "react";
import { Layout } from "../components/Layout";
import AllRecipes from "../components/AllRecipes";

const Recipes = () => {
  return (
    <Layout>
      <h1>Recipes Page</h1>
      <AllRecipes />
    </Layout>
  );
};

export default Recipes;
