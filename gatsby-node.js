const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const vjershaPost = path.resolve('./src/templates/vjersha-post.js')

  const result = await graphql(
    `
      {
        allContentfulVjersha {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const vjershat = result.data.allContentfulVjersha.nodes

  // Define a template for blog post
      const blogPost = path.resolve('./src/templates/blog-post.js')

      const resultBlog = await graphql(
        `
          {
            allContentfulBlogPost {
              nodes {
                title
                slug
              }
            }
          }
        `
      )

      if (resultBlog.errors) {
        reporter.panicOnBuild(
          `There was an error loading your Contentful posts`,
          resultBlog.errors
        )
        return
      }

  const posts = resultBlog.data.allContentfulBlogPost.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (vjershat.length > 0) {
    vjershat.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : vjershat[index - 1].slug
      const nextPostSlug =
        index === vjershat.length - 1 ? null : vjershat[index + 1].slug

      createPage({
        path: `/vjersha/${post.slug}/`,
        component: vjershaPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }



    // Create blog posts pages
    // But only if there's at least one blog post found in Contentful
    // `context` is available in the template as a prop and as a variable in GraphQL

    if (posts.length > 0) {
      posts.forEach((post, index) => {
        const previousPostSlug = index === 0 ? null : posts[index - 1].slug
        const nextPostSlug =
          index === posts.length - 1 ? null : posts[index + 1].slug

        createPage({
          path: `/kenge/${post.slug}/`,
          component: blogPost,
          context: {
            slug: post.slug,
            previousPostSlug,
            nextPostSlug,
          },
        })
      })
    }
}
