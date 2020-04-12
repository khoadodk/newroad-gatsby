import React from "react"
import styles from "../../css/about.module.css"

import img from "../../images/defaultBcg.jpeg"
import Title from "../Title"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sequi
            dicta nesciunt eveniet perferendis adipisci ducimus temporibus
            tempore deleniti vero.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sequi
            dicta nesciunt eveniet perferendis adipisci ducimus temporibus
            tempore deleniti vero.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
