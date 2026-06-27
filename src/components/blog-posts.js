import * as React from "react"

import Section from "./section"
import SummaryItem from "./summary-item"

const BlogPosts = ({ posts }) => {
  return (
    <Section title="All Blog Posts">
      {posts.map(post => (
        <SummaryItem
          key={post.fields.slug}
          name={post.frontmatter.title}
          description={post.frontmatter.description}
          link={post.fields.slug}
          internal
        />
      ))}
    </Section>
  )
}

export default BlogPosts
