import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/footer.module.css"
import socialIcons from "../constants/social-icons"
import links from "../constants/links"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <AniLink fade key={index} to={link.path}>
            {link.text}
          </AniLink>
        ))}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright &copy; newroad travel company {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer
