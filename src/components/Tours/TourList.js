import React from "react"
import styles from "../../css/items.module.css"

import Tour from "./Tour"
import Title from "../Title"

const TourList = ({ tours }) => {
  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }, index) => (
          <Tour key={index} tour={node} />
        ))}
      </div>
    </section>
  )
}

export default TourList
