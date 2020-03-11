import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const page = data.wordpressPage;
  return (
    <Layout>
      <div>
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String!) {
  wordpressPage(id: { eq: $id }) {
    title
    content
  }
}
`


