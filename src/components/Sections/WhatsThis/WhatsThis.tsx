import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const WhatsThis = () => {
  const data = useStaticQuery(graphql`
    query ImagerQuery {
      jackImage: file(relativePath: { eq: "whatsthis.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const image = getImage(data);

  return (
    <>
        
    </>
  );
};

export default WhatsThis;
