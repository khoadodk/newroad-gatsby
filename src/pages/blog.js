import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/seo"

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
      <SEO title="Blog" />
      <Hero img={fluid}></Hero>
      <BlogList />
    </Layout>
  )
}

export default BlogPage
