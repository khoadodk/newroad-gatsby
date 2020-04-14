import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../css/template.module.css"
import {
  FaBinoculars,
  FaMoneyBillWave,
  FaCalendarDay,
  FaGlobeAmericas,
} from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import Day from "../components/Day"

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTours(slug: { eq: $slug }) {
      name
      price
      start(formatString: "dddd MMMM Do, YYYY")
      country
      days
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description {
        description
      }
    }
  }
`

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    start,
    country,
    days,
    journey,
    images,
    description: { description },
  } = data.tour

  const [mainImage, ...tourImages] = images
  //   console.log(mainImage, "MAIN IMAGE")
  //   console.log(tourImages, "TOUR IMAGES")

  return (
    <Layout>
      <Hero img={mainImage.fluid}></Hero>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((img, index) => (
              <Img
                key={index}
                fluid={img.fluid}
                alt="single tour"
                className={styles.image}
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from: &nbsp;<strong>${price}</strong>
            </p>
            <p>
              <FaGlobeAmericas className={styles.icon} />
              countries: &nbsp;<strong>{country}</strong>
            </p>
          </div>
          <p>
            <FaCalendarDay className={styles.icon} />
            Starts on: &nbsp;<strong>{start}</strong>
          </p>
          <p>
            <FaBinoculars className={styles.icon} />
            Duration: &nbsp;<strong>{days} days</strong>
          </p>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => (
              <Day key={index} day={item.day} info={item.info} />
            ))}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default TourTemplate
