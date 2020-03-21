import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from 'gatsby-image-background-slider'
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={'Rots on Fire'} />
      <BackgroundSlider 
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 4000){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
    />
      <main>{children}</main>
    {/* </BackgroundSlider> */}
    </>
  )
}

export default Layout
