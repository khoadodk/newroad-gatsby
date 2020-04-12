import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"

export const query = graphql`
  {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const ContactPage = ({ data }) => {
  const { fluid } = data.connectBcg.childImageSharp
  return (
    <Layout>
      <Hero img={fluid}></Hero>
    </Layout>
  )
}

export default ContactPage
