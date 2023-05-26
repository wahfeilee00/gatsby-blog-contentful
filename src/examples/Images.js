import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>Constrained</h4>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          height={400}
          placeholder="tracedSVG"
          layout="constrained"
          className="static-image"
          as="div"
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Images;
