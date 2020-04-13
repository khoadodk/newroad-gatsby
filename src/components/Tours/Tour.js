import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/tour.module.css"
import Img from "gatsby-image"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// set up default image for tour in case there is no image
export const getImage = graphql`
  {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Tour = ({ tour }) => {
  const response = useStaticQuery(getImage)
  const { name, price, country, days, slug, images } = tour

  const defaultImage = response.file.childImageSharp.fluid

  let mainImage = images ? images[0].fluid : defaultImage

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Img fluid={mainImage} className={styles.img} alt="single tour" />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
