import React from "react"
import styles from "../../css/services.module.css"

import Title from "../Title"
import services from "../../constants/services"

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {services.map((service, index) => (
          <article key={index} className={styles.service}>
            <span>{service.icon}</span>
            <h4>{service.title}</h4>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
