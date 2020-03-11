import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  const pages = data.allWordpressPage.edges;
  
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Rots Doing Things
        </h1>
        <h4>{data.allWordpressPage.totalCount} Pages</h4>
        {pages.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              <Link to={`/${node.slug}/`}>{node.title}{" "}</Link>
              <span
                css={css`
                  color: #bbb;
                `}
              ><br/>
                — {node.date}
              </span>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "DD MMMM YYYY")
        }
      }
    }
  }
`