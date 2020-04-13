import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import Tours from "../components/Tours/Tours"

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const ToursPage = ({ data }) => {
  const { fluid } = data.defaultBcg.childImageSharp
  return (
    <Layout>
      <Hero img={fluid}></Hero>
      <Tours />
    </Layout>
  )
}

export default ToursPage
