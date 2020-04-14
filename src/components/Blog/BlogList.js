import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"

import BlogCard from "./BlogCard"
import Title from "../Title"

const getPosts = graphql`
  {
    posts: allContentfulPosts(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          title
          slug
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)

  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blog" />
      <div className={styles.center}>
        {posts.edges.map(({ node }, index) => (
          <BlogCard key={index} posts={node} />
        ))}
      </div>
    </section>
  )
}

export default BlogList
