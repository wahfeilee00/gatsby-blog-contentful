import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Layout } from "../components/Layout";
import slugify from "slugify";

const RecipeTempplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    descriptions: { descriptions, image },
  } = data.contentfulRecipe;
  const pathToImage = getImage(image);
  const { tags, instructions, ingredients, tools } = content;
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              className="about-img"
              alt={title}
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{descriptions}</p>
              <div className="recipe-icons">
                <article>
                  <span>clock</span>
                  <h5>Prep Time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <span>history</span>
                  <h5>Cook Time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <span>serving</span>
                  <h5>Servings</h5>
                  <p>{servings} min.</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags:{" "}
                {tags.map((tags, index) => {
                  const slug = slugify(tags, { lower: true });
                  return (
                    <Link to={`/tags/${slug}`} key={index}>
                      {tags}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>Step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>Ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index + 1} className="single-ingredient">
                      {item}
                    </p>
                  );
                })}
              </div>
            </article>
            <article className="second-column">
              <div>
                <h4>Tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index + 1} className="single-tools">
                      {item}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        tags
        tools
        ingredients
        instructions
      }
      descriptions {
        descriptions
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default RecipeTempplate;
