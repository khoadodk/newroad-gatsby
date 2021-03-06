import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Tour from "../Tours/Tour"
import Title from "../Title"

const getFeatured = graphql`
  {
    featuredTours: allContentfulTours(filter: { featured: { eq: true } }) {
      edges {
        node {
          contentful_id
          name
          country
          days
          price
          slug
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const response = useStaticQuery(getFeatured)
  const tours = response.featuredTours.edges
  return (
    <section className={styles.tours}>
      <Title title="Featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }, index) => (
          <Tour key={index} tour={node} />
        ))}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
