import React, { useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Image from '../components/image';

export default ({data}) => {
  const activeLogo = useRef();
  // const [isActive, setIsActive] = useState(false)
  const focusLogo = () => {
    console.log(activeLogo.current)
  }
  const logos = data.images.nodes
  return (
    <Layout>
      <SEO title="Landing on the Rock" />
      {logos.map(logo => 
        ( <div key={logo.id}>
            <Link onClick={focusLogo} to={`/art`}>
              <Image ref={activeLogo} alt={`logo-${logos.indexOf(logo)}`} source={logo.relativePath}/>
            </Link>
          </div>
        )
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