import React from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        content {
          tags
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
