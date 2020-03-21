import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Image from '../components/image';
export default ({data}) => {
  const logos = data.images.nodes
  console.log(logos)
  return (
    <Layout>
      <SEO title="Landing on the Rock" />
      <h1>Fasten your seat belts, we're landing on the rock</h1>
      {logos.map(logo => 
            <div key={logo.id}>
              <Image alt={`logo-${logo.id}`} source={logo.relativePath}/>
            </div>
      )}
   </Layout>
  )
}

export const query = graphql`
  {
    images: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      nodes {
        relativePath
        childImageSharp {
          id
          fluid(maxWidth: 400) {
            src
          }
        }
      }
    }
  }
`