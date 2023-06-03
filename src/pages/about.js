import React from "react";
import { Layout } from "../components/Layout";
// import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About Page</h2>
            <p>
              qwerqwerqwer qwerqwerqwer wqrqwerwerw werwerwerwqer qwrwerqwerqwer
              asdasdfsdfasdf sadsadfasdfasdf safsadfasdf
            </p>
            <p>
              qwerqwerqwer qwerqwerqwer wqrqwerwerw werwerwerwqer qwrwerqwerqwer
              asdasdfsdfasdf sadsadfasdfasdf safsadfasdf
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage src="../assets/images/big.jpg" alt="food" />
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesome recipes !</h5>
          {/* Deconstruction and pulled from the props */}
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
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

export default About;
