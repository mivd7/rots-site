import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
  import { Link } from "gatsby"
//   import Image from '../components/image';
  export default () => {
    return (
      <Layout>
        <SEO title="Art Rock" />
        <h1>This is art</h1>
        <Link to={`/`}>Back to the homepage</Link>
     </Layout>
    )
  }
  
//   export const query = graphql`
//     {
//       images: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
//         nodes {
//           relativePath
//           childImageSharp {
//             id
//             fluid(maxWidth: 400) {
//               src
//             }
//           }
//         }
//       }
//     }
//   `