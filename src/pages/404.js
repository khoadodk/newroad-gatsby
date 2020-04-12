import React from "react"
import { Link } from "gatsby"
import styles from "../css/error.module.css"

import Layout from "../components/layout"
import Banner from "../components/Banner"

const ErrorPage = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Opps! it's a dead end">
          <Link to="/" className="btn-white">
            back to the home page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default ErrorPage
