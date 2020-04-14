import React from "react"
import styles from "../../css/contact.module.css"

import Title from "../Title"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/khoado.dk@gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className={styles.formControl}
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Hi there! How may we help you?"
              required
            />
          </div>
          <div>
            <button type="submit" value="submit" className={styles.submit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
