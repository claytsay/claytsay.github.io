module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://claytsay.github.io/`,
    // Your Name
    name: 'Clay Tsay',
    // Main Site Title
    title: `Clay Tsay | University Student`,
    // Description that goes under your name in main bio
    description: `A student double-majoring in computer science and chemical engineering.`,
    // Optional: Twitter account handle
    author: `@claytsay`,
    // Optional: Github account URL
    github: `https://github.com/claytsay`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/claytsay/`,
    // Content of the About Me section
    about: `I am interested in the application of computer science to solving problems in more traditional engineering fields, namely chemical engineering. My studies currently focus on machine learning, artificial intelligence, and computational methods in chemical engineering.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'ssds',
        description:
          'A pair of Python and Deno libraries that implement high-performance data structures',
        link: 'https://github.com/users/claytsay/projects/1',
      },
      {
        name: 'person_simulator',
        description:
          'A full-stack chatbot web app built with Node.js, React, and Python',
        link: 'https://github.com/claytsay/person_simulator',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Amazon',
        description: 'SDE Intern, May 2021 - August 2021',
        link: '',
      },
      {
        name: 'Cognition and Action Lab',
        description: 'Research Assistant, September 2019 - December 2019',
        link: 'http://ivrylab.berkeley.edu/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'C, HTML/CSS, Java, JavaScript, MATLAB, Python, TypeScript, Wolfram Language',
      },
      {
        name: 'Libraries & Frameworks',
        description:
          'AWS CDK, Elasticsearch, Flink, Matplotlib, Node.js, NumPy, Pandas, PyTorch, SciPy, React',
      },
      {
        name: 'Services',
        description:
          'AWS',
      },
      {
        name: 'Databases',
        description:
          'SQLite',
      },
      {
        name: 'Other',
        description:
          'Linux, Microsoft Office',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-F29F4GE30X`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
