import * as React from "react"
import { graphql } from "gatsby"

import BlogPosts from "../components/blog-posts"
import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  if (!posts || !posts.length) {
    return (
      <Layout>
        <Header metadata={data.site.siteMetadata} />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Header metadata={data.site.siteMetadata} />
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default Blog

export const Head = () => <Seo title="Blog" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
