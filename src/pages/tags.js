import React from "react";
import { Layout } from "../components/Layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import setupTags from "../../utils/setupTags";

const Tags = () => {
  const data = useStaticQuery(query);
  const newTags = setupTags(data.allContentfulRecipe.nodes);
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            return (
              <Link key={index} to={`/${text}`} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
