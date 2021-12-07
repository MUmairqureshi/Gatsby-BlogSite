const { ENETUNREACH } = require('constants')
var path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
   {
    allContentfulBlogSite {
      edges {
        node {
          slug
        }
      }
    }
  }  
     `)
  console.log(JSON.stringify(result))

  result.data.allContentfulBlogSite.edges.forEach((result) => {
    console.log("data ", result)
    createPage({
      path: `/blog/${result.node.slug}`,
      component: path.resolve('./src/templates/blog.tsx'),
      context: {
        slug: result.node.slug
      }
    })
  })
}
