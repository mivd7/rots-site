import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Note: You can change "images" to whatever you'd like.

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
                original {
                  height
                  width
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {

        return n.node.relativePath.includes(props.source);
      });
      if (!image) {
        return null;
      }
      console.log(image)
      // const imageStyles = {width: image.node.childImageSharp.original.width, height: image.node.originalSharp.height} - imgStyle={imageStyles}
      return (
          <Img alt={props.alt}
              fluid={image.node.childImageSharp.fluid} 
              style={{maxWidth: 250, maxHeight: 250}} 
              className={`logo logo-animated logo-${image.node.name}`}/>)
    }}
  />
);

export default Image;