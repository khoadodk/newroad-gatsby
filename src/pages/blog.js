import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"

export const query = graphql`
  {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const BlogPage = ({ data }) => {
  const { fluid } = data.blogBcg.childImageSharp
  return (
    <Layout>
      <Hero img={fluid}></Hero>
    </Layout>
  )
}

export default BlogPage
