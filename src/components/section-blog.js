import * as React from "react"
import { Link } from "gatsby"

import Section from "./section"
import SummaryItem from "./summary-item"

const SectionBlog = ({ posts }) => {
  return (
    <Section title="Latest Posts">
      {posts.map(post => (
        <SummaryItem
          key={post.fields.slug}
          name={post.frontmatter.title}
          description={post.frontmatter.description}
          link={post.fields.slug}
          internal
        />
      ))}
      {posts.length >= 5 && (
        <Link className="text-gray-500 text-sm hover:text-black" to="/blog">
          View all posts &rarr;
        </Link>
      )}
    </Section>
  )
}

export default SectionBlog
