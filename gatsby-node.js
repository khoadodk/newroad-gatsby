const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours: allContentfulTours {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPosts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `posts/${node.slug}`,
      component: path.resolve("./src/templates/post-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  //--------- Pagination ----------
  const posts = data.posts.edges
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)

  // Generate the number of page index
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/posts" : `/posts/${i + 1}`,
      component: path.resolve("./src/templates/post-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
