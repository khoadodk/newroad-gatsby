import React from "react"
import { Link, graphql } from "gatsby"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    post: contentfulPosts(slug: { eq: $slug }) {
      title
      published(formatString: "dddd MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`

const PostTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post

  // rich text rendering such as images, links to another posts...
  const options = {
    renderNode: {
      // images
      "embedded-asset-block": node => {
        const { fields } = node.data.target
        // conditional rendering so the app is still running if there is no image
        return fields ? (
          <div className={styles.postImage}>
            <h4>image caption:{fields.title["en-US"]}</h4>
            <img src={fields.file["en-US"].url} alt="" width={500} />
          </div>
        ) : (
          ""
        )
      },
      // posts
      "embedded-entry-block": node => {
        const { fields } = node.data.target
        return fields ? (
          <div className={styles.relatedPosts}>
            <h4>{fields.title["en-US"]}</h4>
            <img
              src={fields.images["en-US"][0].fields.file["en-US"].url}
              alt=""
              width={300}
            />
            <Link to={`/posts/${fields.slug["en-US"]}`} className={styles.link}>
              Read more...
            </Link>
          </div>
        ) : (
          ""
        )
      },
    },
  }

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1 className={styles.blogTitle}>{title}</h1>
          <p>
            published on: &nbsp;<strong>{published}</strong>
          </p>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/posts" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default PostTemplate
