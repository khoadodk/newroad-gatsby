import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const defaultBcg = data.defaultBcg.childImageSharp.fluid
  return (
    <Layout>
      <Hero home="true" img={defaultBcg}>
        <Banner
          title="exciting tours"
          info="Endless exploration to exotic places where you always dream about"
        >
          <Link to="./tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </Hero>
      <About />
      <Services />
    </Layout>
  )
}

export default IndexPage
