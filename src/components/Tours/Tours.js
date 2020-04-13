import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TourList from "./TourList"

const getTours = graphql`
  {
    tours: allContentfulTours {
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
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Tours = () => {
  const response = useStaticQuery(getTours)
  const tours = response.tours.edges
  return (
    <div>
      <TourList tours={tours} />
    </div>
  )
}

export default Tours
