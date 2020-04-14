import React from "react"
import styles from "../../css/blog-card.module.css"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ posts }) => {
  const { slug, title, images, published } = posts

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Img fluid={images[0].fluid} className={styles.img} alt="blog" />

        <AniLink fade className={styles.link} to={`/posts/${slug}`}>
          read more
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
