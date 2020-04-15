import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import FeaturedTours from "../components/Home/FeaturedTours"
import SEO from "../components/seo"

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
      <SEO title="Home" />
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
      <FeaturedTours />
    </Layout>
  )
}

export default IndexPage
