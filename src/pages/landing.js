import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Image from '../components/Image';

export default ({data}) => {
  const avatars = data.allImageSharp.edges
  return (
    <Layout>
      <SEO title="Welcome to Rots" />
      <h1>Welcome! Good to have you here</h1>
      {avatars.map(({node})=> (
        <div key={node.id}>
          <p>{node.originalName}</p>
          <Image alt="Gatsby in Space" source={node.fixed.originalName} />        
        </div>)
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
            fixed {
              originalName
            }
            id
          }
        }
    }
  }
`