import * as React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SectionAbout from "../components/section-about"
import SectionBlog from "../components/section-blog"
import SectionExperience from "../components/section-experience"
import SectionProjects from "../components/section-projects"
import SectionSkills from "../components/section-skills"

const Index = ({ data }) => {
  const about = data.site.siteMetadata.about || false
  const projects = data.site.siteMetadata.projects || false
  const posts = data.allMarkdownRemark.nodes
  const experience = data.site.siteMetadata.experience || false
  const skills = data.site.siteMetadata.skills || false
  const noBlog = !posts || !posts.length

  return (
    <Layout>
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {!noBlog && <SectionBlog posts={posts} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {skills && skills.length && <SectionSkills skills={skills} />}
    </Layout>
  )
}

export default Index

export const Head = () => <Seo />

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
        projects {
          name
          description
          link
        }
        experience {
          name
          description
          link
        }
        skills {
          name
          description
        }
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 5) {
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
