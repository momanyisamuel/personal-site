import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div
              key={node.fields.slug}
              className="post hover:bg-blue-900 hover:text-white border-4 border-blue-900 py-4 px-6 mb-8 flex button button--calypso cursor-pointer"
            >
              <Link to={node.fields.slug} className="shadow-none">
                <div>
                  <div className="flex mb-1">
                    <h1 className="text-base uppercase">{title}</h1>
                  </div>
                  <p
                    className="text-base"
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  />
                  <div className="flex">
                    <p className="text-base">{node.frontmatter.date}</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD - YYYY")
            title
            description
          }
        }
      }
    }
  }
`
