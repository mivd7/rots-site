import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Image from '../components/Image';
import Carousel from '../components/Carousel';

export default ({data}) => {
  const avatars = data.allImageSharp.edges
  return (
    <Layout>
      <SEO title="Landing on the Rock" />
      {avatars.map(({node})=> 
        {
          return(node.fluid.originalName.includes('bg') ?
            <div key={node.id}>
              <Carousel alt={`bg-${node.id}`} source={node.fluid.originalName} width={node.original.width} height={node.original.height}/>
            </div> :
            <div key={node.id}>
              <Image alt={`logo-${node.id}`} source={node.fluid.originalName} width={node.original.width} height={node.original.height}/>
            </div>
        )}
      )}
   </Layout>
  )
}

export const query = graphql`
  query {
    allImageSharp {
      totalCount
      edges {
          node {
            fluid {
              originalName
            }
            id
            original {
              width
              height
            }
          }
        }
    }
  }
`