import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const images = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
          )
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(images);
  const nodes = data.allFile.nodes;
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image;
        const pathImage = getImage(image);
        return (
          <article key={index} className="item">
            {/* Not Really Safe way to do it, use getImage() helper function */}
            {/* <GatsbyImage image={image.childImageSharp.gatsbyImage} alt={name} className="gallery-img" /> */}
            <GatsbyImage image={pathImage} alt={name} className="gallery-img" />
            <p>{name}</p>
          </article>
        );
      })}
      <h2>Simple image Gallery</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 15px;
  }
`;

export default Gallery;
