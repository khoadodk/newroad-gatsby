import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

const IndexPage = () => (
  <Layout>
    <Hero>
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

export default IndexPage
