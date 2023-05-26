import React from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Want to get in touch ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              quia sint nulla modi harum optio voluptatem earum, veritatis
              blanditiis magnam laborum error porro, dolorum laboriosam!
              Praesentium exercitationem beatae ea necessitatibus!
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block"></button>
            </form>
          </article>
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

export default Contact;
