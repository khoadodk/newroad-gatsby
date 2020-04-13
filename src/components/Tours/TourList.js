import React from "react"
import styles from "../../css/items.module.css"

import Tour from "./Tour"
import Title from "../Title"

const TourList = ({ tours }) => {
  const INITIAL_STATE = tours
  console.log(tours)
  const [sortedTours, setSortedTours] = React.useState(INITIAL_STATE)
  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {sortedTours.map(({ node }) => (
          <Tour key={node.contenful_id} tour={node} />
        ))}
      </div>
    </section>
  )
}

export default TourList
