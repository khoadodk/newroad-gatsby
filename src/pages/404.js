import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/error.module.css"

import Layout from "../components/layout"
import Banner from "../components/Banner"
import SEO from "../components/seo"

const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <header className={styles.error}>
        <Banner title="Opps! it's a dead end">
          <AniLink fade duration={1} to="/" className="btn-white">
            back to the home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default ErrorPage
