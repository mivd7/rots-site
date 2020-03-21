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
                fluid(maxWidth: 5000, maxHeight: 4000) {
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
      return (props.alt.includes('bg') ? 
        <Img alt={props.alt} 
             fluid={image.node.childImageSharp.fluid} 
             className={`bg ${image.node.name}`} 
             /> : 
        <Img alt={props.alt}
             fluid={image.node.childImageSharp.fluid} 
             className={`logo ${image.node.name}`}/>)
    }}
  />
);

export default Image;