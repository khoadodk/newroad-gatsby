import React from "react"
import { FaAlignRight } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/navbar.module.css"
import socialIcons from "../constants/social-icons"
import links from "../constants/links"
import logo from "../images/gatsby-icon.png"

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="logo" className={styles.logoImg} />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => (
            <li key={index}>
              <AniLink fade to={item.path}>
                {item.text}
              </AniLink>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
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
      </div>
    </nav>
  )
}

export default Header
