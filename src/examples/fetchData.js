import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const getData = graphql`
  query firstQuery {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`;

const FetchData = () => {
  const data = useStaticQuery(getData);
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData);
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      <p>{data.site.siteMetadata.author}</p>
      <p>{title}</p>
      <p>{author}</p>
    </div>
  );
};

export default FetchData;
