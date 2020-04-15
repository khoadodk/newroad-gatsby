import React from "react"
import { graphql } from "gatsby"
import styles from "../css/blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import Title from "../components/Title"
import BlogCard from "../components/Blog/BlogCard"

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPosts(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
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

const PostListTemplate = props => {
  const { data } = props
  const { currentPage, numPages } = props.pageContext

  const prevPage = currentPage - 1 <= 1 ? "/posts" : `/posts/${currentPage - 1}`
  const nextPage =
    currentPage + 1 > numPages
      ? `/posts/${currentPage}`
      : `/posts/${currentPage + 1}`

  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }, index) => (
            <BlogCard key={index} posts={node} />
          ))}
        </div>
        <section className={styles.links}>
          <AniLink fade className={styles.link} to={prevPage}>
            Prev
          </AniLink>
          {Array.from({ length: numPages }, (_, i) => (
            <AniLink
              fade
              key={i}
              to={i === 0 ? "/posts" : `/posts/${i + 1}`}
              className={
                i + 1 === currentPage
                  ? `${styles.link} ${styles.active}`
                  : `${styles.link}`
              }
            >
              {i + 1}
            </AniLink>
          ))}
          <AniLink fade className={styles.link} to={nextPage}>
            Next
          </AniLink>
        </section>
      </section>
    </Layout>
  )
}

export default PostListTemplate
